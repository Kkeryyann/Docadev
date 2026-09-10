<script setup>
</script>

<template>
  <nav class="flex justify-between items-center px-8 fixed w-full bg-black z-100">
    <NuxtLink to="/" class="font-bold text-lg text-gray-100">
      <img src="~/assets/logo.svg" alt="logo" class="w-full">
    </NuxtLink>

    <NuxtLink
        to="/soumettre"
        class="text-sm bg-lime hover:bg-lime-600 text-black px-4 py-2 rounded transition"
    >
      Soumettre une ressource
    </NuxtLink>
  </nav>
</template>