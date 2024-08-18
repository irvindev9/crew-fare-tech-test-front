<script setup>
import { onMounted, ref, computed } from 'vue'
import Layout from './components/Layout.vue'
import Map from './components/Map.vue'
import { getDefaultCountries, getByRegion, getCountriesNames, getCountryDetails } from './api/countriesCalls'

const countries = ref([])
const refresh = ref(false)
const countriesNames = ref([])
const filter = ref('')
const limit = ref(10)

onMounted(async () => {
  refresh.value = true
  const countriesData = await getDefaultCountries()
  countries.value = countriesData
  refresh.value = false

  const countriesNamesData = await getCountriesNames()
  countriesNames.value = countriesNamesData
})

const valuesForMap = computed(() => {
  const arrayCountries = countries.value.map((country) => {
    return {
      [country.cca2]: {
        population: country.population,
        capital: country.capital,
        color: '#0d61b9'
      }
    }
  })

  return Object.assign({}, ...arrayCountries)
})

const getCountriesByRegion = async (region) => {
  refresh.value = true
  const countriesData = await getByRegion(region, limit.value)
  countries.value = countriesData
  refresh.value = false
}

const getCountriesDetail = async (region) => {
  refresh.value = true
  const countriesData = await getCountryDetails(region)
  countries.value = [countriesData]
  refresh.value = false
}

const filteredCountries = computed(() => {
  return countriesNames.value.filter((name) => {
    return name.toLowerCase().includes(filter.value.toLowerCase())
  })
})

</script>

<template>
  <div>
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-12">
                <Map :mapData="valuesForMap" v-if="!refresh" />
              </div>
              <div class="col-12 mt-3">
                <div class="card">
                  <div class="card-header">
                    Filter by Region <br>
                    Limit: <input type="text" class="control-form" v-model.number="limit">
                  </div>
                  <div class="card-body text-center">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-light" @click="getCountriesByRegion('Asia')">Asia</button>
                      <button type="button" class="btn btn-light" @click="getCountriesByRegion('Africa')">Africa</button>
                      <button type="button" class="btn btn-light" @click="getCountriesByRegion('Americas')">America</button>
                    </div>
                    <br>
                    <div class="btn-group mt-3" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-light" @click="getCountriesByRegion('Antarctic')">Antarctic</button>
                      <button type="button" class="btn btn-light" @click="getCountriesByRegion('Europe')">Europe</button>
                      <button type="button" class="btn btn-light" @click="getCountriesByRegion('Oceania')">Oceania</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="card">
                  <div class="card-header">
                    Filter by Country: 
                    <input type="text" class="control-form" v-model="filter">
                  </div>
                  <div class="card-body text-center">
                    <span @click="getCountriesDetail(name)" class="cursor badge text-bg-light" v-for="name in filteredCountries" :key="name">{{name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(country, index) in countries" :key="index">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{{country.name}}</div>
                  <p>
                    Capital: {{country.capital ? country.capital[0] : country.name}}<br>
                    Population: <i>{{country.population}}</i> people
                  </p>
                </div>
                <span class="badge text-bg-light rounded-pill">{{country.flag}}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
