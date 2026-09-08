<script setup>
const page = ref(1)
const typeFiltre = ref('')

const typesLabels = {
  animation: 'Animation',
  apprentissage: 'Apprentissage',
  dev: 'Dev',
  idee_projet: 'Idée de projet',
  inspiration: 'Inspiration',
  typographie: 'Typographie',
  visuel: 'Visuel',
}

const { data, refresh } = await useFetch('/api/ressources', {
  query: computed(() => ({
    page: page.value,
    type: typeFiltre.value || undefined,
  })),
})

function changerFiltre(type) {
  typeFiltre.value = type
  page.value = 1
}

function changerPage(nouvellePage) {
  page.value = nouvellePage
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function estNouveau(dateAjout) {
  const septJours = 7 * 24 * 60 * 60 * 1000
  return (new Date() - new Date(dateAjout)) < septJours
}

function tronquer(texte, longueur = 90) {
  if (!texte) return ''
  if (texte.length <= longueur) return texte
  const coupe = texte.slice(0, longueur)
  return coupe.slice(0, coupe.lastIndexOf(' ')) + '...'
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Ressources</h1>
    </div>

    <div class="flex gap-2 mb-6 flex-wrap">
      <button
          @click="changerFiltre('')"
          :class="typeFiltre === '' ? 'bg-lime text-black' : 'bg-gray-100 hover:bg-lime text-black'"
          class="text-sm px-3 py-1 rounded cursor-pointer"
      >
        Tout
      </button>
      <button
          v-for="(label, key) in typesLabels"
          :key="key"
          @click="changerFiltre(key)"
          :class="typeFiltre === key ? 'bg-lime text-black' : 'bg-gray-100 hover:bg-lime text-black'"
          class="text-sm px-3 py-1 rounded cursor-pointer"
      >
        {{ label }}
      </button>
    </div>

    <div v-if="data.data.length === 0" class="text-gray-500">
      Rien pour le moment.
    </div>

    <div class="grid grid-cols-4 gap-4 mb-6">
      <a
          v-for="r in data.data"
          :key="r.id"
          :href="r.lien"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-gray-800 rounded-lg overflow-hidden flex flex-col transition hover:scale-[1.05]"
      >
        <div>
          <img
              v-if="r.image"
              :src="r.image"
              :alt="r.titre"
              class="aspect-16/10 w-full h-full object-cover rounded-t-lg"
          />
          <div v-else class="aspect-16/10 w-full h-full flex items-center justify-center text-gray-600 text-xs">
            Pas d'image
          </div>
        </div>

        <div class="p-4 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-1">
      <span class="text-xs uppercase tracking-wide text-lime">
        {{ typesLabels[r.type] || r.type }}
      </span>
            <span
                v-if="estNouveau(r.dateAjout)"
                class="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded"
            >
        New
      </span>
          </div>

          <h2 class="font-semibold text-lg">{{ r.titre }}</h2>
          <p class="text-gray-400 text-sm flex-1">{{ tronquer(r.description) }}</p>
        </div>
      </a>

    <!-- Pagination -->
    </div>
    <div v-if="data.totalPages > 1" class="w-full flex justify-center items-center gap-4">
      <button
          v-for="p in data.totalPages"
          :key="p"
          @click="changerPage(p)"
          :class="p === data.page ? 'bg-lime text-black' : 'bg-gray-100 text-gray-700'"
          class="w-8 h-8 rounded text-sm cursor-pointer"
      >
        {{ p }}
      </button>
    </div>
  </div>
</template>