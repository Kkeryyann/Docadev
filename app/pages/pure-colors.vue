<script setup>
const suggestions = [
  { pure: '#FF0000', alternatives: ['#E03030', '#C8321C', '#C51336'] },
  { pure: '#FF8000', alternatives: ['#E6880D', '#DF640D', '#FFB81E'] },
  { pure: '#FFFF00', alternatives: ['#F8E61B', '#F2E71A', '#F5D927'] },
  { pure: '#00FF00', alternatives: ['#37CA50', '#09B24D', '#72D444'] },
  { pure: '#00FFFF', alternatives: ['#15D1CE', '#0BB2BB', '#05AFC5'] },
  { pure: '#FF00FF', alternatives: ['#BF1ECA', '#FF56EE', '#D017AB'] },
  { pure: '#0000FF', alternatives: ['#2709BE', '#092197', '#2C38E5'] },
  { pure: '#000000', alternatives: ['#171919', '#071009', '#17121A'] },
  { pure: '#FFFFFF', alternatives: ['#FCF8F7', '#F7F9FA', '#F8F7FA'] }
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
    <div class="mx-auto max-w-3xl">
      <header class="mb-12 text-center sm:mb-16">
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-lime">Palette</p>
        <h1 class="text-3xl font-bold text-white sm:text-4xl">Alternatives aux couleurs pures</h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Les couleurs à 100% de saturation (#FF0000, #00FF00...) sonnent artificielles à l'écran.
          Pour chacune, voici 3 alternatives plus nuancées à copier directement dans ton design.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-8">
        <div v-for="s in suggestions" :key="s.pure" class="flex gap-4 h-64">

          <!-- Bloc "Pure" -->
          <button
              @click="copier(s.pure)"
              class="w-1/2 rounded-2xl flex items-center justify-center transition cursor-pointer hover:scale[1.05] hover:shadow-[0_0_12px_1px_rgba(182,255,0,0.5)]"
              :style="{ backgroundColor: s.pure }"
          >
            <span class="text-sm font-mono text-white bg-black px-3 py-1.5 rounded">
              {{ codeCopie === s.pure ? 'Copié' : s.pure }}
            </span>
          </button>

          <!-- 3 blocs "Couleur" empilés -->
          <div class="w-1/2 flex flex-col gap-4">
            <button
                v-for="hex in s.alternatives"
                :key="hex"
                @click="copier(hex)"
                class="flex-1 rounded-2xl flex items-center justify-center transition cursor-pointer hover:scale[1.05] hover:shadow-[0_0_12px_1px_rgba(182,255,0,0.5)]"
                :style="{ backgroundColor: hex }"
            >
              <span class="text-xs font-mono text-white bg-black px-2 py-1 rounded">
                {{ codeCopie === hex ? 'Copié' : hex }}
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>