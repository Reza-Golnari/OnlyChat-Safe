<template>
  <div
    class="flex items-center"
    :class="{ 'justify-end': msg.user === store.userName }"
  >
    <div
      class="flex flex-col gap-y-1 shadow py-1 px-3 min-w-56 max-w-[280px] md:max-w-[450px] lg:max-w-[700px] w-max rounded"
      :class="[
        { 'bg-primary': msg.user === store.userName },
        { 'text-white': msg.user === store.userName },
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
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "@/stores";

const store = useStore();
const props = defineProps(["msg"]);
const msg = props.msg;
</script>

<style scoped></style>
