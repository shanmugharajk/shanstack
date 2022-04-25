<template>
  <!-- List of threads -->
  <div v-for="thread in threads" :key="thread.id" class="my-7 text-gray-700">
    <ThreadListItem :thread="thread" />
  </div>
</template>

<script setup lang="ts">
import { data } from '~/__mocks__/data';

import ThreadListItem from './ThreadListItem.vue';

const { threads } = data;
</script>
