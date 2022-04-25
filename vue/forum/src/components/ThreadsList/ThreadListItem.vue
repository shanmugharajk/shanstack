<template>
  <div class="flex justify-between items-center content-center pb-2 border-b border-purple-100">
    <!-- Post title, author, time -->
    <div class="flex-1">
      <div class="text-purple-900">
        <router-link :to="{ name: 'ThreadsViewPage', params: { id: thread.id } }">
          {{ thread.title }}
        </router-link>
      </div>
      <div class="text-[10px] text-gray-500">
        By
        <a :href="getUserById(thread.userId)?.name">
          <span class="text-purple-900">{{ getUserById(thread.userId)?.name }} </span>
        </a>
        <span>, {{ thread.publishedAt }}</span>
      </div>
    </div>

    <!-- No of replies  -->
    <div class="min-w-[250px] text-sm">{{ thread.posts.length }} replies</div>

    <!-- User detail -->
    <div class="flex items-center space-x-5">
      <img
        :src="getUserById(thread.userId)?.avatar"
        alt="avatar-image"
        width="48"
        height="48"
        class="w-12 h-12 max-w-[48px] max-h-[48px] rounded-full"
      />

      <div class="w-96 text-xs">
        <div class="text-purple-900">{{ getUserById(thread.userId)?.name }}</div>
        <div class="text-[10px] text-gray-500">{{ thread.publishedAt }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Thread } from '~/__mocks__/types';
import { getUserById } from '~/__mocks__/data';

const props = defineProps<{
  thread: Thread;
}>();

console.log(props.thread);
</script>
