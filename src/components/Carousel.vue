<template>
  <div class="carousel-container relative">
    <!-- Contenedor principal con overflow para permitir scroll -->
    <div class="carousel-content flex flex-col gap-4 overflow-y-auto h-80 pt-10 pb-10">
      
      <!-- Flecha arriba -->
      <button
        @click="scrollUp"
        class="absolute top-0  left-1/2 transform -translate-x-1/2  text-white rounded-full p-2 shadow-md"
      >
        <span v-html="Up"></span>
      </button>

      <!-- Tarjetas del carrusel -->
      <div class="flex flex-col gap-4">
        <Card
          v-for="item in filteredContent"
          :key="item.id"
          :title="item.title"
          :genre="item.genre"
          :year="item.year"
          :qualification="item.qualification"
          :description="item.description"
          :poster="item.poster"
          @click="selectMovie(item)" 
        />
      </div>

      <!-- Flecha abajo -->
      <button
        @click="scrollDown"
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white rounded-full p-2 shadow-md"
      >
      <span v-html="Down"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import content from '../data/content.js';
import Card from './Card.vue';
import { Down, Up } from '../assets/iconos.js'; // Importar los íconos

const emit = defineEmits();
const activeFilter = ref('movie'); 
const filteredContent = ref(content);

const filterContent = (type) => {
  activeFilter.value = type;
  filteredContent.value = content.filter(item => item.type === type);
};

// Método que emite el evento con la película seleccionada
const selectMovie = (movie) => {
  emit('movie-clicked', movie);  // Emite el evento con los datos de la película
};

// Método para hacer scroll hacia arriba
const scrollUp = () => {
  const container = document.querySelector('.carousel-content');
  container.scrollBy({ top: -100, behavior: 'smooth' });
};

// Método para hacer scroll hacia abajo
const scrollDown = () => {
  const container = document.querySelector('.carousel-content');
  container.scrollBy({ top: 100, behavior: 'smooth' });
};
</script>

<style scoped>
.carousel-container {
  position: relative;
}

.carousel-content {
  overflow-y: auto; /* Permite el desplazamiento */
  max-height: 80vh; /* Ajusta la altura máxima del contenedor */
}

/* Oculta la barra de desplazamiento */
.carousel-content::-webkit-scrollbar {
  display: none;
}

button {
  z-index: 10;
}

button:hover {
  background-color: #4a4a4a;
}

/* Asegura que las tarjetas tengan suficiente espacio y no se encojan demasiado */
.content-card {
  min-height: 200px;  /* Ajusta la altura mínima de las tarjetas */
}
</style>
