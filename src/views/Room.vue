<template>
  <div class="h-screen font-roboto">
    <nav class="p-3 bg-white text-center shadow-md">
      <div>
        <h3
          class="font-bold text-2xl tracking-wide cursor-pointer"
          @click="copyRoomName"
          ref="roomTitle"
        >
          {{ store.roomName }}
        </h3>
        <p></p>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type Ref } from "vue";
import { useStore } from "@/stores";
import io from "socket.io-client";
import { useRouter } from "vue-router";

document.title = "OnlyChat | Room";

const route = useRouter();
const store = useStore();
const msg: Ref<string> = ref("");
const roomTitle = ref();
let userID: string = "";

if (!store.checkStore()) {
  route.push("/");
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
  console.log("connected");
});

socket.on("user-data", (data: string) => {
  console.log(data);
  userID = data;
});

socket.on("chat-message", (data: any, id: string) => {
  if (userID === id) return;
  console.log("new message: ", data, id);
});

function sendMessage(newMsg: string) {
  if (!newMsg) return;
  socket.emit("chat-message", newMsg);
  msg.value = "";
}

onBeforeUnmount(() => {
  socket.on("disconnect", () => {
    console.log("dis");
    console.log(store.userName, store.roomName);
  });
});
</script>
