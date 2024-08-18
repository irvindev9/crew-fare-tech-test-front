<script setup>
import { ref, onMounted, onUpdated } from 'vue';

import svgMap from 'svgmap';

const svgMapInstance = ref(null);

const props = defineProps({
  mapData: Object,
});

onMounted(() => {
  svgMapInstance.value = new svgMap({
  targetElementID: 'svgMap',
  data: {
    data: {
      population: {
        name: 'Population',
        format: '{0} people',
        thousandSeparator: ',',
        thresholdMax: 50000,
        thresholdMin: 1000,
      },
      capital: {
        name: 'Capital',
        format: '{0}'
      }
    },
    applyData: 'population',
    values: props.mapData
  }
});
});


</script>

<template>
  <div>
    <div id="svgMap"></div>
  </div>
</template>

