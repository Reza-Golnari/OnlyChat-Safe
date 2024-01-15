<template>
  <div
    class="flex items-center"
    :class="{ 'justify-end': isAuthUser() }"
    v-if="!msg.isNotification"
  >
    <div
      class="flex flex-col shadow py-1 px-3 min-w-52 max-w-[280px] md:max-w-[450px] lg:max-w-[700px] w-max rounded transition-colors"
      :class="[
        { 'bg-primary': isAuthUser() },
        { 'dark:bg-primary': isAuthUser() },
        { 'dark:text-white': isAuthUser() },
        { 'text-white': isAuthUser() },
        { 'dark:bg-gray-200': !isAuthUser() },
      ]"
    >
      <div class="font-bold text-sm" :class="{ 'text-end': isAuthUser() }">
        {{ formattedUser }}
      </div>
      <p
        class="text-sm md:text-base text-wrap break-words text font-sans"
        :class="[{ 'text-end': isAuthUser() }, { rtl: !isRtl }]"
      >
        {{ msg.text }}
      </p>
      <div>
        <p class="text-xs">
          {{ msgTime }}
        </p>
      </div>
    </div>
  </div>
  <Notification :msg="msg.text" v-else />
</template>

<script setup lang="ts">
import Notification from "@/components/Notification.vue";
import { defineProps, computed } from "vue";
import { useStore } from "@/stores";
import { checkLanguage } from "@/composables/lang.ts";

const store = useStore();
const props = defineProps(["msg"]);
const msg = props.msg;

const formattedUser = computed(() => {
  return msg.user.charAt(0).toUpperCase() + msg.user.slice(1);
});

function isAuthUser(): boolean {
  return msg.user === store.userName;
}

const isRtl = computed(() => {
  return checkLanguage(msg.text);
});

const msgTime = computed(() => {
  const timeArr = msg.time.split(":");
  if (timeArr[0].length < 2) {
    timeArr[0] = `0${timeArr[0]}`;
  }
  if (timeArr[1].length < 2) {
    timeArr[1] = `0${timeArr[1]}`;
  }
  return timeArr.join(":");
});
</script>
