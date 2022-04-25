<template>
  <AppLayout title="Not Found">
    <div class="my-2 text-sm">Oops, sorry the page you've requested is not found!</div>
    <router-link class="text-purple-800 block text-xs font-semibold" to="/">
      Read some cool threads
    </router-link>
  </AppLayout>
</template>

<script setup lang="ts">
import { AppLayout } from '~/components/AppLayout';
</script>
