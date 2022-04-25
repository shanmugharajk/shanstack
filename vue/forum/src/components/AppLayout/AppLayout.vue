<template>
  <section>
    <header class="py-3 px-4 bg-purple-700">
      <h1 class="text-lg font-semibold text-white">Welcome to the forum</h1>
    </header>

    <div class="px-4 mt-5 w-[85%] m-auto">
      <h2 class="text-2xl text-purple-800 font-semibold">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
