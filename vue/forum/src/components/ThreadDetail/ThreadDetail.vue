<template>
  <div class="my-7 text-gray-700">
    <div class="pb-5">
      <div class="text-lg font-semibold mb-4 text-purple-900 text-center">
        {{ thread.title }}
      </div>

      <!-- List of posts -->
      <div
        v-for="postId in thread.posts"
        :key="postId"
        class="shadow shadow-light-50 bg-white mb-5 p-5 rounded-lg"
      >
        <div class="flex">
          <!-- Left section Avatar + Name -->
          <!-- prettier-ignore -->
          <div
            class="mx-3 flex flex-col justify-center items-center
             content-center text-center mr-5 w-42"
          >
            <a href="#" class="flex flex-col items-center">
              <div class="text-xs w-[50px] text-ellipsis overflow-hidden">
                {{ getUserById(getPostById(postId).userId).name }}
              </div>

              <img
                :src="getUserById(getPostById(postId).userId).avatar"
                alt="avatar"
                width="48"
                height="48"
                class="rounded-full my-2 w-12 h-12 max-w-12 max-h-12 object-cover"
              />
            </a>

            <div class="text-xs">{{ thread.posts.length }} posts</div>
          </div>

          <!-- Post content -->
          <div class="text-xs w-full">{{ getPostById(postId).text }}</div>
        </div>

        <div class="text-right text-xs text-gray-400">
          {{ getPostById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPostById, getUserById, data } from '~/__mocks__/data';

const props = defineProps<{ id: string }>();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const thread = data.threads.find((t) => t.id === props.id)!;
</script>
