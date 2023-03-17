import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id 必填，唯一
  state: () => {
    return {
      name: '章三',
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
  },
})
