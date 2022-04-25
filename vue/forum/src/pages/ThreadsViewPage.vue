<template>
  <AppLayout title="Thread detail">
    <ThreadDetail :id="id" />
  </AppLayout>
</template>

<script setup lang="ts">
import { AppLayout } from '~/components/AppLayout';
import { ThreadDetail } from '~/components/ThreadDetail';

defineProps<{ id: string }>();
</script>
