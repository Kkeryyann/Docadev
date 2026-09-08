<script setup>
const email = ref('')
const password = ref('')
const erreur = ref('')

const { fetch: refreshSession } = useUserSession()

async function seConnecter() {
  erreur.value = ''
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    })
    await refreshSession() // recharge la session côté client
    await navigateTo('/admin')
  } catch (e) {
    erreur.value = 'Email ou mot de passe incorrect'
  }
}
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <form @submit.prevent="seConnecter" class="p-8 rounded-lg shadow-md w-80">
      <h1 class="text-xl font-bold mb-4">Connexion admin</h1>

      <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border rounded p-2 mb-3"
      />
      <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full border rounded p-2 mb-3"
      />

      <p v-if="erreur" class="text-red-500 text-sm mb-3">{{ erreur }}</p>

      <button type="submit" class="w-full bg-lime text-black rounded p-2">
        Se connecter
      </button>
    </form>
  </div>
</template>