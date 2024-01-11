<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
