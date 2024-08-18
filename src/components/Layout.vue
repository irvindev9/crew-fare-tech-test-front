<script setup>
import Navbar from './Layout/Navbar.vue';
</script>

<template>
  <div>
      <Navbar/>
      <main className="grid-container">
        <slot />
      </main>
    </div>
</template>