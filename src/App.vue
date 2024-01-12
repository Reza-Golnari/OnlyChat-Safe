<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>
