<script setup>
definePageMeta({
  middleware: 'admin',
  layout: 'admin',
})
const { data: ressources, refresh } = await useFetch('/api/ressources/en-attente')
const { data: toutesLesRessources, refresh: refreshToutes } = await useFetch('/api/ressources/admin')
const { clear: clearSession } = useUserSession()

async function valider(id) {
  await $fetch(`/api/ressources/${id}`, { method: 'PATCH', body: { statut: 'valide' } })
  await Promise.all([refresh(), refreshToutes()])
}

async function refuser(id) {
  await $fetch(`/api/ressources/${id}`, { method: 'PATCH', body: { statut: 'refuse' } })
  await Promise.all([refresh(), refreshToutes()])
}

async function supprimer(id) {
  await $fetch(`/api/ressources/${id}`, { method: 'DELETE' })
  await Promise.all([refresh(), refreshToutes()])
}

const nouvelleRessource = reactive({
  titre: '', type: '', description: '', lien: '', image: '',
})

async function ajouterRessource() {
  await $fetch('/api/ressources/admin', { method: 'POST', body: { ...nouvelleRessource } })
  Object.keys(nouvelleRessource).forEach(k => nouvelleRessource[k] = '')
  await refreshToutes()
}

// --- Édition inline ---
const idEnEdition = ref(null)
const brouillon = reactive({
  titre: '', type: '', description: '', lien: '', image: '',
})

function ouvrirEdition(r) {
  idEnEdition.value = r.id
  brouillon.titre = r.titre
  brouillon.type = r.type
  brouillon.description = r.description || ''
  brouillon.lien = r.lien
  brouillon.image = r.image || ''
}

function annulerEdition() {
  idEnEdition.value = null
}

async function enregistrerEdition(id) {
  await $fetch(`/api/ressources/${id}`, { method: 'PATCH', body: { ...brouillon } })
  idEnEdition.value = null
  await refreshToutes()
}

async function uploaderImage(event) {
  const fichier = event.target.files[0]
  if (!fichier) return

  const formData = new FormData()
  formData.append('image', fichier)

  const { url } = await $fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  nouvelleRessource.image = url
}

async function uploaderImageEdition(event) {
  const fichier = event.target.files[0]
  if (!fichier) return

  const formData = new FormData()
  formData.append('image', fichier)

  const { url } = await $fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  brouillon.image = url
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Ajouter une ressource</h1>
    <div class="w-auto border rounded-lg p-4 mb-6 flex items-start justify-start">
      <form @submit.prevent="ajouterRessource" class="space-x-4 flex items-center justify-center w-full">
        <input v-model="nouvelleRessource.titre" placeholder="Titre" class="h-10 border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime"/>
        <select v-model="nouvelleRessource.type" class="h-10 border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime">
          <option value="">Type</option>
          <option value="animation">Animation</option>
          <option value="apprentissage">Apprentissage</option>
          <option value="dev">Dev</option>
          <option value="idee_projet">Idée de projet</option>
          <option value="inspiration">Inspiration</option>
          <option value="typographie">Typographie</option>
          <option value="visuel">Visuel</option>
        </select>
        <textarea v-model="nouvelleRessource.description" placeholder="Description" class="h-10 border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime"></textarea>
        <input v-model="nouvelleRessource.lien" placeholder="Lien" class="h-10 border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime"/>
        <div class="flex flex-col gap-1">
          <input type="file" accept="image/*" @change="uploaderImage" class="text-sm" />
          <img v-if="nouvelleRessource.image" :src="nouvelleRessource.image" class="w-20 h-20 object-cover rounded" />
        </div>
        <button type="submit" class="bg-lime text-black px-4 py-2 rounded">
          Ajouter
        </button>
      </form>
    </div>

    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Ressources en attente</h2>
    </div>

    <div v-if="!ressources?.length === 0" class="text-gray-500 mb-8">
      Rien à valider pour le moment.
    </div>

    <div v-for="r in ressources || []" :key="r.id" class="border rounded p-4 mb-3">
      <div class="flex justify-between items-start">
        <div>
          <span class="text-xs text-gray-500">{{ r.type }}</span>
          <h2 class="font-semibold">{{ r.titre }}</h2>
          <p class="text-sm text-gray-700">{{ r.description }}</p>
          <a v-if="r.lien" :href="r.lien" target="_blank" class="text-blue-500 text-sm">{{ r.lien }}</a>
        </div>
        <div class="flex gap-2">
          <button @click="valider(r.id)" class="bg-green-500 text-white px-3 py-1 rounded">Valider</button>
          <button @click="refuser(r.id)" class="bg-orange-500 text-white px-3 py-1 rounded">Refuser</button>
        </div>
      </div>
    </div>

    <!-- Gestion de toutes les ressources -->
    <div class="flex justify-between items-center mb-6 mt-10">
      <h2 class="text-2xl font-bold">Toutes les ressources</h2>
    </div>

    <div v-if="!toutesLesRessources?.length" class="text-gray-500">
      Aucune ressource.
    </div>

    <div v-for="r in toutesLesRessources || []" :key="r.id" class="border rounded-lg overflow-hidden mb-4">
      <!-- Mode édition -->
      <div v-if="idEnEdition === r.id" class="space-y-2">
        <input v-model="brouillon.titre" placeholder="Titre" class="h-9 w-full border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime"/>
        <select v-model="brouillon.type" class="h-9 w-full border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime">
          <option value="animation">Animation</option>
          <option value="apprentissage">Apprentissage</option>
          <option value="dev">Dev</option>
          <option value="idee_projet">Idée de projet</option>
          <option value="inspiration">Inspiration</option>
          <option value="typographie">Typographie</option>
          <option value="visuel">Visuel</option>
        </select>
        <textarea v-model="brouillon.description" placeholder="Description" class="w-full border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime"></textarea>
        <input v-model="brouillon.lien" placeholder="Lien" class="h-9 w-full border rounded p-1 focus:outline-none focus:ring-inset focus:border-lime"/>
        <div class="flex flex-col gap-1">
          <input type="file" accept="image/*" @change="uploaderImageEdition" class="text-sm" />
          <img v-if="brouillon.image" :src="brouillon.image" class="w-20 h-20 object-cover rounded" />
        </div>
        <div class="flex gap-2">
          <button @click="enregistrerEdition(r.id)" class="bg-lime text-black px-3 py-1 rounded">Enregistrer</button>
          <button @click="annulerEdition" class="bg-gray-200 text-gray-700 px-3 py-1 rounded">Annuler</button>
        </div>
      </div>

      <!-- Mode lecture -->
      <div v-else class="flex">
        <div class="w-32 h-32 flex-shrink-0 bg-gray-900">
          <img
              v-if="r.image"
              :src="r.image"
              :alt="r.titre"
              class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-600 text-xs">
            Pas d'image
          </div>
        </div>

        <div class="flex justify-between items-start flex-1 p-4">
          <div>
            <span class="text-xs text-gray-500">{{ r.type }} · {{ r.statut }}</span>
            <h2 class="font-semibold">{{ r.titre }}</h2>
            <p class="text-sm text-gray-700">{{ r.description }}</p>
            <a v-if="r.lien" :href="r.lien" target="_blank" class="text-blue-500 text-sm">{{ r.lien }}</a>
          </div>
          <div class="flex gap-2">
            <button @click="ouvrirEdition(r)" class="bg-blue-500 text-white px-3 py-1 rounded">Modifier</button>
            <button @click="supprimer(r.id)" class="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
          </div>
        </div>
      </div>    </div>
  </div>
</template>