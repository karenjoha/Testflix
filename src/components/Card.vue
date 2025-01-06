<template>
    <div class="content-card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg relative group">
        <span v-html="Play" class="absolute inset-0 flex items-center justify-center w-2"></span>
        <!-- Imagen de fondo -->
        <img :src="poster" :alt="title" class="object-cover w-full h-64 transition-all duration-300" />

        <!-- Título siempre visible en la parte inferior -->
        <div class="absolute bottom-0 left-0 w-full bg-transparent p-4 z-10">
        <h2 class="text-lg font-bold text-center">{{ title }}</h2>
        </div>
        <!-- Información adicional -->
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-gray-800 bg-opacity-80 p-4 rounded-t-lg">
            <div class="items-end">
            <!-- list -->
            <span v-html="List" v-if="isIconClickedList" @click="toggleIconList"></span>
            <span v-html="ListHover" v-else @click="toggleIconList"></span>
        </div>

          <div class="flex justify-between items-center	">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11.5" fill="#242424" fill-opacity="0.5" stroke="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9887 12.1619L9.59967 7.7999V16.1999L15.9887 12.1619Z" stroke="white"/>
            </svg>
            <h2 class="text-lg font-bold text-center">{{ title }}</h2>
            <!-- like -->
            <span v-html="Like"  v-if="isIconClickedLike" @click="toggleIconLike"></span>
            <!-- clik -->
            <span v-html="LikeHover" v-else @click="toggleIconLike"></span>
          </div>

          <p class="text-sm text-white mt-2">{{ description }}</p>
          <div class="flex justify-between text-sm mt-2">
            <span class="flex items-center">{{ qualification }}
              <span v-html="Start"></span>
            </span>
            <span>Year: {{ year }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Play , Start, Like, LikeHover, List, ListHover} from '../assets/iconos.js';
  defineProps({
    title: String,
    genre: String,
    year: String,
    poster: String,
    description: String,
    qualification: String,
  });
  const isIconClickedList = ref(true);
  const isIconClickedLike = ref(true);

  const toggleIconList = () => {
    isIconClickedList.value = !isIconClickedList.value;
};
const toggleIconLike = () => {
      isIconClickedLike.value = !isIconClickedLike.value;
  }
  </script>
  
  <style scoped>
  .content-card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }
  
  .content-card:hover {
    transform: scale(1.05);
  }
  
  .content-card .absolute {
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    z-index: 10;
  }
  
  .content-card .group:hover .absolute {
    opacity: 1;

  }
  
  .content-card .absolute div {
      color: white;
      padding: 15px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    

  </style>
  