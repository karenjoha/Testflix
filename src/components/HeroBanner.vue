<template>
    <div
      class="hero-banner bg-cover bg-center h-96 flex items-center justify-center text-white"
      :style="{ backgroundImage: 'url(' + heroImage + ')' }"
    >
        <div class="text-center">
            <h3 class="text-4xl text-purpleLight font-bold">{{ heroTitle }}</h3>
            <h3 class="text-4xl text-white font-bold">{{ heroTitle }}</h3>
            <h3 class="text-2xl text-white font-bold">{{ heroTitle }}</h3>
        </div>
        <Carousel/>

    </div>
  </template>
  
  <script setup>
  import content from '../data/content.js'; // Importamos la data de películas y series
  import Carousel from '../components/Carousel.vue';

  const heroImage = content[0].poster; // Usamos el póster de la primera película o serie
  const heroTitle = content[0].title; // Usamos el título de la primera película o serie
  </script>
  
  <style scoped>
  /* .hero-banner {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
  } */
  </style>
  