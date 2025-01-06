<template>
    <div
      class="hero-banner md:flex bg-cover bg-center h-screen block items-center justify-center text-white"
      :style="{ backgroundImage: 'url(' + heroImage + ')' }"
    >
        <div class="text-left">
          <span class="text-1xl">ORIGINAL DE TESTFLIX</span>
            <h3 class="text-5xl text-primary font-bold">{{ heroTitle }}</h3>
            <button>REPRODUCIR</button>
            <button>MI LISTA</button>
        </div>
        <div>
          <div class="flex items-center custom-select">
            <span>VER:</span>
            <select class="bg-transparent text-primary p-2 rounded">
              <option value="tendencias">TENDENCIAS</option>
              <option value="misPeliculas">MIS PELICULAS</option>
              <option value="recientemente">AGREGADO RECIENTEMENTE</option>
            </select>
          </div>
          <Carousel/>
        </div>

    </div>
  </template>
  
  <script setup>
  import content from '../data/content.js'; // Importamos la data de películas y series
  import Carousel from '../components/Carousel.vue';

  const heroImage = content[6].poster; // Usamos el póster de la primera película o serie
  const heroTitle = content[6].title; // Usamos el título de la primera película o serie
  </script>
  
  <style scoped>
  .hero-banner {
    justify-content: space-between;
    padding: 4rem;
  }
  .custom-select option {
  background-color: #333;
  color: white;
  padding: 8px;
}

.custom-select option:hover {
  background-color: #D1A2FF;
  color: black;
}

.custom-select option:checked {
  background-color: #D1A2FF;
  color: black;
}
  </style>
  