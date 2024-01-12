<template>
  <div
    class="text-center bg-secondary-900 text-white font-bold rounded-lg transition-colors p-1 tracking-wider"
  >
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["msg"]);
const msg = props.msg;
</script>
