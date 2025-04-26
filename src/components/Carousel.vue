<template>
  <div class="carousel-container relative">
    <!-- Contenedor principal con overflow para permitir scroll -->
    <div class="carousel-content flex flex-col gap-4 overflow-y-auto h-80 pt-10 pb-10">
      <!-- Flecha arriba -->
      <button
        @click="scrollUp"
        class="absolute top-0  left-1/2 transform -translate-x-1/2 text-white rounded-full p-2 shadow-md"
      >
        <span v-html="Up"></span>
      </button>

      <!-- Tarjetas del carrusel -->
      <div class="flex flex-col gap-4">
        <div 
          v-for="item in filteredContent" 
          :key="item.id"
          @click="selectMovie(item)"
        >
          <Card
            :title="item.title"
            :genre="item.genre"
            :year="item.year"
            :qualification="item.qualification"
            :description="item.description"
            :poster="item.poster"
          />
        </div>
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
import { computed } from 'vue';
import content from '../data/content.js';
import Card from './Card.vue';
import { Down, Up } from '../assets/iconos.js';

const props = defineProps({
  filter: {
    type: String,
    default: 'all'
  }
});

const emit = defineEmits();

// Computamos el contenido filtrado basado en el filtro que viene de props
const filteredContent = computed(() => {
  if (props.filter === 'recientemente') {
    return [...content].sort((a, b) => b.year - a.year);
  } else if (props.filter === 'all') {
    return content;
  } else {
    return content.filter(item => item.type === props.filter);
  }
});

const selectMovie = (movie) => {
  emit('movie-clicked', movie);
};

const scrollUp = () => {
  const container = document.querySelector('.carousel-content');
  container.scrollBy({ top: -100, behavior: 'smooth' });
};

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
