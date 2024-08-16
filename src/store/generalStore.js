import { defineStore } from 'pinia'

const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

export default useGeneralStore;