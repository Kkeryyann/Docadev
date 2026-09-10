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
  document.getElementById('ressources')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
  <section class="relative min-h-screen flex items-center justify-center border-b border-white/10 px-4 py-16 sm:px-8">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-3xl font-bold text-[#f5f5f5] sm:text-4xl md:text-5xl">
        Toutes les trouvailles dev <span class="text-lime">au même endroit</span>
      </h1>
      <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
        Libs, apprentissages, illustrations, idées de projets... DocADev centralise des
        ressources jugées pertinantes pour les développeurs, partagées par la communauté et validées avant
        publication. Trouve une pépite ou propose la tienne.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <NuxtLink
            to="/soumettre"
            class="text-sm font-medium px-5 py-2.5 rounded bg-lime text-black hover:bg-lime-600 transition"
        >
          Proposer une ressource
        </NuxtLink>

        <a href="#ressources"
        class="text-sm font-medium px-5 py-2.5 rounded border border-white/15 text-white/80 hover:border-lime hover:text-lime transition"
        >
        Voir les ressources
        </a>
      </div>
    </div>


    <a href="#ressources"
    aria-label="Défiler vers les ressources"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-lime transition animate-bounce"
    >
    <span class="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    </a>
  </section>

  <div class="max-w-6xl mx-auto p-8 pt-24" id="ressources">
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