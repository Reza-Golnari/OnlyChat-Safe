import { defineStore } from "pinia";

interface stateType {
  userName: string | null;
  roomName: string | null;
  darkMode: boolean;
}

export const useStore = defineStore("store", {
  state: (): stateType => {
    return {
      userName: null,
      roomName: null,
      darkMode: false,
    };
  },
  actions: {
    setInfo(userName: string, roomName: string) {
      this.userName = userName;
      this.roomName = roomName;
    },
    checkStore(): boolean {
      if (this.userName && this.roomName) {
        return true;
      }
      return false;
    },
  },
});
