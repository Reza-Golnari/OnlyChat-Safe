<template>
  <div :class="{ dark: store.darkMode }">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "./stores";
const store = useStore();
</script>
