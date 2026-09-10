<script setup>
import BorderGlow from '~/components/BorderGlow.vue'

const gradients = [
  { nom: 'Aurora', debut: '#5B0FBE', fin: '#00D4FF' },
  { nom: 'Venom', debut: '#0A1200', fin: '#B5E853' },
  { nom: 'Inferno', debut: '#1A0508', fin: '#FF6B35' },
  { nom: 'Twilight', debut: '#1E1040', fin: '#FF9A8B' },
  { nom: 'Sangria', debut: '#080205', fin: '#C0392B' },
  { nom: 'Royal Smoke', debut: '#1C1C1C', fin: '#6A0DAD' },
  { nom: 'Dark & Elegant', debut: '#0A1A2F', fin: '#1F1F1F' },
  { nom: 'Obsidian Glow', debut: '#050505', fin: '#3A0CA3' },
  { nom: 'Neon Dusk', debut: '#020024', fin: '#00D4FF' },
  { nom: 'Solar Flare', debut: '#E8003A', fin: '#FFAA00' },
  { nom: 'Neon Tide', debut: '#3B00FF', fin: '#00F5AA' },
  { nom: 'Dusk', debut: '#2B00FF', fin: '#FF5CBA' },
  { nom: 'Arctic', debut: '#0050D8', fin: '#E8F5FF' },
]

const codeCopie = ref('')

async function copier(hex) {
  await navigator.clipboard.writeText(hex)
  codeCopie.value = hex
  setTimeout(() => {
    if (codeCopie.value === hex) codeCopie.value = ''
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen px-4 py-12 sm:px-8 md:py-16">
    <div class="mx-auto max-w-6xl pt-24">
      <header class="mb-12 text-center sm:mb-16">
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-lime">Palette</p>
        <h1 class="text-3xl font-bold text-white sm:text-4xl">Dégradés</h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Une sélection de dégradés prêts à l'emploi, avec leur version inversée juste en dessous.
          Clique sur une couleur pour copier son code hex et l'utiliser directement dans un projet.
        </p>
      </header>

      <BorderGlow
          v-for="g in gradients" :key="g.nom" class="flex flex-col gap-16 p-4 my-4"
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
        <div class="flex gap-4">
          <div
              class="flex-1 h-24 rounded-lg"
              :style="{ background: `linear-gradient(90deg, ${g.debut}, ${g.fin})` }"
          />
          <button
              @click="copier(g.debut)"
              class="w-32 h-24 rounded-lg flex items-center justify-center transition cursor-pointer"
              :style="{ backgroundColor: g.debut }"
          >
            <span class="text-xs font-mono text-white bg-black px-2 py-1 rounded">
              {{ codeCopie === g.debut ? 'Copié' : g.debut }}
            </span>
          </button>
        </div>

        <div class="text-center text-base font-bold my-2">{{ g.nom }}</div>

        <!-- Ligne 2 : dégradé inversé -->
        <div class="flex gap-4">
          <div
              class="flex-1 h-24 rounded-lg"
              :style="{ background: `linear-gradient(90deg, ${g.fin}, ${g.debut})` }"
          />
          <button
              @click="copier(g.fin)"
              class="w-32 h-24 rounded-lg flex items-center justify-center transition cursor-pointer"
              :style="{ backgroundColor: g.fin }"
          >
            <span class="text-xs font-mono text-white bg-black px-2 py-1 rounded">
              {{ codeCopie === g.fin ? 'Copié' : g.fin }}
            </span>
          </button>
        </div>
      </BorderGlow>
    </div>
  </div>
</template>