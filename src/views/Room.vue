<template>
  <div
    class="h-screen overflow-hidden font-roboto transition-colors dark:bg-zinc-900"
    @click="closeSubMenu($event)"
  >
    <nav
      class="flex items-center justify-between p-3 px-6 bg-white dark:bg-zinc-900 transition-colors dark:text-white text-center shadow-md"
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          @click="store.darkMode = false"
          v-if="store.darkMode"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          @click="store.darkMode = true"
          v-else
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </button>
      <h3
        class="font-bold text-2xl tracking-wide cursor-pointer"
        @click="copyRoomName"
        ref="roomTitle"
      >
        {{ store.roomName }}
      </h3>
      <button class="relative" @click="isSubMenu = !isSubMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 subIcon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            class="subIcon"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
        <ul
          class="subMenu absolute right-5 top-3 p-2 bg-white dark:bg-zinc-800 shadow-lg rounded transition"
          :class="[{ invisible: !isSubMenu }, { 'opacity-0': !isSubMenu }]"
          @click="leaveRoom()"
        >
          <li
            class="text-red-500 font-bold flex gap-1 transition-colors dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            Leave
          </li>
        </ul>
      </button>
    </nav>
    <div class="px-2 md:px-4">
      <div
        class="container overflow-hidden flex flex-col justify-between gap-y-4 mx-auto my-5 max-w-[900px] h-[88vh] py-2 px-2 md:px-5 shadow-md"
      >
        <div
          class="space-y-3 min-h-11/12 overflow-x-hidden"
          ref="chatContainer"
        >
          <Message v-for="(msg, index) in msgList" :key="index" :msg="msg" />
        </div>
        <div
          class="flex items-center justify-between md:w-5/6 min-w-72 w-full mx-auto px-3 border rounded-lg"
        >
          <input
            type="text"
            v-model="msg"
            @keydown.enter.prevent="sendMessage(msg)"
            placeholder="Start typing..."
            class="outline-none w-10/12 md:11/12 py-2 dark:bg-zinc-900 transition-colors dark:text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            class="cursor-pointer w-2/12 md:w-1/12 pl-3"
            :class="{ 'stroke-primary': msg }"
            @click="sendMessage(msg)"
          >
            <g clip-path="url(#clip0_2_1361)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.59168 2.71245L2.38083 7.25004H7.25001C7.66422 7.25004 8.00001 7.58582 8.00001 8.00004C8.00001 8.41425 7.66422 8.75004 7.25001 8.75004H2.38083L1.59168 13.2876L13.9294 8.00004L1.59168 2.71245ZM0.988747 8.00004L0.0636748 2.68087C-0.0111098 2.25086 0.128032 1.81135 0.436661 1.50272C0.824446 1.11494 1.40926 1.00231 1.91333 1.21834L15.3157 6.9622C15.7308 7.14013 16 7.54835 16 8.00004C16 8.45172 15.7308 8.85995 15.3157 9.03788L1.91333 14.7817C1.40926 14.9978 0.824446 14.8851 0.436661 14.4974C0.128032 14.1887 -0.01111 13.7492 0.0636748 13.3192L0.988747 8.00004Z"
                fill="#8E8E93"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_1361">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, type Ref, nextTick } from "vue";
import { useStore } from "@/stores";
import io from "socket.io-client";
import { useRouter } from "vue-router";
import Message from "@/components/Message.vue";

document.title = "OnlyChat | Room";

const router = useRouter();
const store = useStore();
const msg: Ref<string> = ref("");
const roomTitle = ref();
let userID: string = "";
const isSubMenu: Ref<boolean> = ref(false);
const chatContainer = ref();
const msgList: Ref<object[]> = ref([]);
let msgData: {
  user: string;
  text: string;
  isNotification: boolean;
};

if (!store.checkStore()) {
  router.push("/");
}

function closeSubMenu(event: any): void {
  if (event.target.classList.contains("subIcon")) return;

  isSubMenu.value = false;
}

function leaveRoom(): void {
  store.setInfo("", "");
  router.push("/");
}

const socket = io("http://127.0.0.1:8000");

function copyRoomName() {
  if (!navigator.clipboard) return;

  typeof store.roomName === "string" &&
    navigator.clipboard.writeText(store.roomName);

  roomTitle.value.textContent = "Copied!";

  setTimeout(() => {
    roomTitle.value.textContent = store.roomName;
  }, 1000);
}

socket.emit("join", store.roomName, store.userName);

socket.on("connect", () => {
  msgData = {
    user: "",
    text: `${store.userName} Connected!`,
    isNotification: true,
  };
  msgList.value.push(msgData);
});

socket.on("user-data", (data: string) => {
  userID = data;
});

socket.on("chat-message", (data: any, id: string) => {
  console.log(data);
  if (userID === id) return;
  if (data.match("joined in chat!") || data.match("Left the chat")) {
    msgData = {
      user: "",
      text: data,
      isNotification: true,
    };
    msgList.value.push(msgData);

    return;
  }
  console.log(false);
  msgData = {
    user: data.split(":")[0],
    text: data.split(":")[1],
    isNotification: false,
  };
  msgList.value.push(msgData);
  nextTick(() => {
    chatContainer.value.scroll({
      top: chatContainer.value.scrollHeight,
      behavior: "smooth",
    });
  });
});

function sendMessage(newMsg: string) {
  if (!newMsg) return;
  socket.emit("chat-message", newMsg);
  msgList.value.push({
    user: store.userName,
    text: newMsg,
    isNotification: false,
  });
  msg.value = "";
  nextTick(() => {
    chatContainer.value.scroll({
      top: chatContainer.value.scrollHeight,
      behavior: "smooth",
    });
  });
}

onBeforeUnmount(() => {
  socket.on("disconnect", () => {
    msgData = {
      user: "",
      text: `${store.userName} Disconnected!`,
      isNotification: true,
    };
    msgList.value.push(msgData);
  });
});
</script>

<style scoped>
.container {
  overflow: auto;
}
</style>
