<template>
  <div
    class="h-screen flex items-center justify-center overflow-hidden gradient"
  >
    <div class="h-2/4 space-y-4 sm:w-80 w-64">
      <div class="w-3/4 mx-auto pb-5 border-b">
        <img class="w-full" src="@/assets/img/logo-no-background.png" />
      </div>
      <form class="space-y-4" @submit.prevent="submit">
        <div
          class="flex items-center justify-start px-5 pl-1 py-2 bg-white/25 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            class="w-2/12 h-7"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13 0C14.7239 0 16.3772 0.684819 17.5962 1.90381C18.8152 3.12279 19.5 4.77609 19.5 6.5C19.5 8.22391 18.8152 9.87721 17.5962 11.0962C16.3772 12.3152 14.7239 13 13 13C11.2761 13 9.62279 12.3152 8.40381 11.0962C7.18482 9.87721 6.5 8.22391 6.5 6.5C6.5 4.77609 7.18482 3.12279 8.40381 1.90381C9.62279 0.684819 11.2761 0 13 0ZM13 16.25C20.1825 16.25 26 19.1588 26 22.75V26H0V22.75C0 19.1588 5.8175 16.25 13 16.25Z"
              fill="#951D65"
            />
          </svg>
          <input
            type="text"
            class="bg-transparent p-3 py-2 border-l outline-none w-10/12 text-secondary-100 placeholder:text-secondary-100 font-bold"
            placeholder="User Name"
            ref="userNameInput"
          />
        </div>
        <div
          class="flex items-center justify-start px-5 pl-1 py-2 bg-white/25 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="30"
            viewBox="0 0 23 30"
            fill="none"
            class="w-2/12 h-7"
          >
            <path
              d="M2.85715 30C2.07143 30 1.39857 29.72 0.838574 29.16C0.278574 28.6 -0.000949955 27.9276 2.42542e-06 27.1429V12.8571C2.42542e-06 12.0714 0.280002 11.3986 0.840002 10.8386C1.4 10.2786 2.07238 9.99905 2.85715 10H4.28572V7.14286C4.28572 5.16667 4.98238 3.48191 6.37572 2.08857C7.76905 0.695239 9.45334 -0.000951405 11.4286 9.758e-07C13.4048 9.758e-07 15.0895 0.696668 16.4829 2.09C17.8762 3.48333 18.5724 5.16762 18.5714 7.14286V10H20C20.7857 10 21.4586 10.28 22.0186 10.84C22.5786 11.4 22.8581 12.0724 22.8571 12.8571V27.1429C22.8571 27.9286 22.5771 28.6014 22.0171 29.1614C21.4571 29.7214 20.7848 30.0009 20 30H2.85715ZM11.4286 22.8571C12.2143 22.8571 12.8871 22.5771 13.4471 22.0171C14.0071 21.4571 14.2867 20.7848 14.2857 20C14.2857 19.2143 14.0057 18.5414 13.4457 17.9814C12.8857 17.4214 12.2133 17.1419 11.4286 17.1429C10.6429 17.1429 9.97 17.4229 9.41 17.9829C8.85 18.5429 8.57048 19.2152 8.57143 20C8.57143 20.7857 8.85143 21.4586 9.41143 22.0186C9.97143 22.5786 10.6438 22.8581 11.4286 22.8571ZM7.14286 10H15.7143V7.14286C15.7143 5.95238 15.2976 4.94048 14.4643 4.10714C13.631 3.27381 12.6191 2.85714 11.4286 2.85714C10.2381 2.85714 9.22619 3.27381 8.39286 4.10714C7.55953 4.94048 7.14286 5.95238 7.14286 7.14286V10Z"
              fill="#951D65"
            />
          </svg>
          <input
            type="text"
            class="bg-transparent p-3 py-2 border-l outline-none w-10/12 text-secondary-100 placeholder:text-secondary-100 font-bold"
            placeholder="Room Name"
            ref="roomNameInput"
          />
        </div>
        <input
          type="submit"
          class="w-full py-3 bg-secondary-500 rounded-md text-white font-bold cursor-pointer"
        />
        <p
          class="text-yellow-400/95 font-bold sm:text-sm text-xs"
          ref="txtError"
          :class="{ hidden: !errorMsg }"
        >
          {{ errorMsg }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/stores";

document.title = "OnlyChat";

const store = useStore();

const router = useRouter();
const userNameInput = ref();
const roomNameInput = ref();
const txtError = ref();
const errorMsg: Ref<string> = ref("");

function submit() {
  if (userNameInput.value.value.length < 3) {
    errorMsg.value = "Username must be longer then 3 letters";
  } else if (userNameInput.value.value.length > 12) {
    errorMsg.value = "Username cannot be more than 12 characters";
  } else if (roomNameInput.value.value.length < 3) {
    errorMsg.value = "Room name must be longer then 3 letters";
  } else {
    errorMsg.value = "";
    store.setInfo(
      userNameInput.value.value.trim(),
      roomNameInput.value.value.trim().toLowerCase()
    );
    router.push("/chat-room");
  }
}
</script>
