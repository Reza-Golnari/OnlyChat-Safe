<template>
  <div
    class="flex items-center"
    :class="{ 'justify-end': msg.user === store.userName }"
    v-if="!msg.isNotification"
  >
    <div
      class="flex flex-col gap-y-1 shadow py-1 px-3 min-w-56 max-w-[280px] md:max-w-[450px] lg:max-w-[700px] w-max rounded transition-colors"
      :class="[
        { 'bg-primary': msg.user === store.userName },
        { 'dark:bg-primary': msg.user === store.userName },
        { 'dark:text-white': msg.user === store.userName },
        { 'text-white': msg.user === store.userName },
        { 'dark:bg-gray-200': msg.user !== store.userName },
      ]"
    >
      <div
        class="font-bold"
        :class="{ 'text-end': msg.user === store.userName }"
      >
        {{ msg.user }}
      </div>
      <p
        class="text-sm md:text-base first-letter:ml-2 text-wrap break-words"
        :class="{ 'text-end': msg.user === store.userName }"
      >
        {{ msg.text }}
      </p>
    </div>
  </div>
  <Notification :msg="msg.text" v-else />
</template>

<script setup lang="ts">
import Notification from "@/components/Notification.vue";
import { defineProps } from "vue";
import { useStore } from "@/stores";

const store = useStore();
const props = defineProps(["msg"]);
const msg = props.msg;
</script>

<style scoped></style>