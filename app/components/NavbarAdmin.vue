<script setup>
const { clear: clearSession } = useUserSession()

async function seDeconnecter() {
  await $fetch('/api/logout', { method: 'POST' })
  await clearSession()
  await navigateTo('/admin/login')
}
</script>

<template>
  <nav class="flex justify-between items-center px-8">
    <NuxtLink to="/" class="font-bold text-lg text-gray-100">
      <img src="~/assets/logo.svg" alt="logo" class="w-full">
    </NuxtLink>

    <button
        @click="seDeconnecter"
        class="text-sm bg-lime hover:bg-lime-600 text-black px-4 py-2 rounded transition"
    >
      Se déconnecter
    </button>
  </nav>
</template>