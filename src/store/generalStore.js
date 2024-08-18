import { defineStore } from 'pinia'

const useGeneralStore = defineStore({
  id: 'general',
  state: () => ({
    countryNames: [],
  }),
  actions: {
    setCountries($countries) {
      this.countryNames = $countries;
    },
  },
})

export default useGeneralStore;