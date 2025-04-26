<template>
  <div
    class="hero-banner md:flex content-center bg-cover bg-top h-screen block items-center justify-center text-white"
    :style="{ backgroundImage: 'url(' + heroImage + ')' }"
  >
    <div class="text-left">
      <span class="text-1xl">ORIGINAL DE TESTFLIX</span>
      <h3 class="text-5xl text-primary font-bold">{{ heroTitle }}</h3>
    </div>
    <div>
      <div class="flex items-center custom-select">
        <span>VER:</span>
        <select class="bg-transparent text-primary p-2 rounded" @change="filterContent($event)">
          <option value="all">TODAS</option>
          <option value="movie">PELICULAS</option>
          <option value="series">SERIES</option>
          <option value="recientemente">AGREGADO RECIENTEMENTE</option>
        </select>
      </div>

      <Carousel :filter="activeFilter" @movie-clicked="updateHero" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import content from '../data/Content.js';
import Carousel from '../components/Carousel.vue';

const heroImage = ref(content[6].poster);
const heroTitle = ref(content[6].title);

// Filtro activo
const activeFilter = ref('all');

// Función que filtra el contenido en base a la opción seleccionada
const filterContent = (event) => {
  activeFilter.value = event.target.value;
};

const updateHero = (movie) => {
  heroImage.value = movie.poster;
  heroTitle.value = movie.title;
};
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
  