<template>
  <div
    class="text-center bg-secondary-900 text-white font-bold rounded-lg transition-colors p-1 tracking-wider md:max-w-[70%] text-sm md:text-base line-clamp-1 mx-auto"
  >
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["msg"]);
const msg = props.msg;
</script>
