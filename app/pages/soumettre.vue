<script setup>
import BorderGlow from '/components/BorderGlow.vue'

const titre = ref('')
const type = ref('')
const description = ref('')
const lien = ref('')

const envoi = ref(false)
const succes = ref(false)
const erreur = ref('')

async function soumettre() {
  erreur.value = ''

  if (!titre.value || !type.value || !description.value) {
    erreur.value = 'Merci de remplir tous les champs obligatoires.'
    return
  }

  envoi.value = true
  try {
    await $fetch('/api/ressources', {
      method: 'POST',
      body: {
        titre: titre.value,
        type: type.value,
        description: description.value,
        lien: lien.value || undefined,
      },
    })
    succes.value = true
    titre.value = ''
    type.value = ''
    description.value = ''
    lien.value = ''
  } catch (e) {
    erreur.value = "Une erreur est survenue, veuillez réessayer."
  } finally {
    envoi.value = false
  }
}
</script>

<template>
  <div class="w-full justify-center items-center px-8 py-4">
    <NuxtLink to="/" class="absolute text-sm text-white hover:text-lime p-2 inline-block">← Retour</NuxtLink>
    <h1 class="text-4xl font-bold text-center">Soumettre une nouvelle ressource</h1>
    <p class="text-sm text-gray-500 my-4 text-center">
      Votre proposition sera vérifiée puis, si elle est validée, elle apparaîtra sur le site.
    </p>

    <div v-if="succes" class="bg-green-50 border border-green-200 text-green-700 rounded p-4 mb-4">
      Merci ! Ta trouvaille est en attente de validation.
    </div>

    <BorderGlow class="w-1/2 p-8 mx-auto"
        :edge-sensitivity="30"
        glow-color="40 80 80"
        background-color="#121212"
        :border-radius="16"
        :glow-radius="40"
        :glow-intensity="1.0"
        :cone-spread="25"
        :animated="true"
        :colors="['#B6FF00']"
    >
      <form @submit.prevent="soumettre" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Titre <span>*</span></label>
          <input v-model="titre" type="text" placeholder="React Bits" class="w-full border rounded p-2 focus:outline-none focus:ring-inset focus:border-lime"/>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Thème <span>*</span></label>
          <select v-model="type" class="w-full border rounded p-2 focus:outline-none focus:ring-inset focus:border-lime">
            <option value="">-- Choisir --</option>
            <option value="animation">Animations</option>
            <option value="apprentissage">Apprentissage</option>
            <option value="dev">Développement</option>
            <option value="idee_projet">Idées de projets</option>
            <option value="inspiration">Inspirations</option>
            <option value="typographie">Typographie</option>
            <option value="visuel">Visuels</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Description (optionnelle)</label>
          <textarea v-model="description" rows="4" placeholder="React Bits est une librairie open source de composants d'interface utilisateur soigneusement conçus, destinés à améliorer vos applications web React."  class="w-full border rounded p-2 focus:outline-none focus:ring-inset focus:border-lime"></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Lien <span>*</span></label>
          <input v-model="lien" type="url" placeholder="https://reactbits.dev" class="w-full border rounded p-2 focus:outline-none focus:ring-inset focus:border-lime"/>
        </div>

        <p v-if="erreur" class="text-red-500 text-sm">{{ erreur }}</p>

        <button
            type="submit"
            :disabled="envoi"
            class="w-full bg-lime hover:bg-lime-600 text-black rounded p-2 disabled:opacity-50 cursor-pointer"
        >
          {{ envoi ? 'Envoi...' : 'Soumettre ma ressource' }}
        </button>
      </form>
    </BorderGlow>
  </div>
</template>
<style scoped>
span {
  color: #B6FF00;
}
</style>