<template>
    <div>
      <!-- <div class="flex justify-center space-x-4 mb-8">
        <button
          @click="filterContent('movie')"
          :class="{'bg-blue-500': activeFilter === 'movie', 'bg-gray-800': activeFilter !== 'movie'}"
          class="text-white py-2 px-4 rounded"
        >
          Películas
        </button>
        <button
          @click="filterContent('series')"
          :class="{'bg-blue-500': activeFilter === 'series', 'bg-gray-800': activeFilter !== 'series'}"
          class="text-white py-2 px-4 rounded"
        >
          Series
        </button>
      </div> -->
      <div class="carousel grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="item in filteredContent"
          :key="item.id"
          class="content-card  bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
        >
          <img :src="item.poster" :alt="item.title" class="object-cover w-52 h-52 " />
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ item.title }}</h2>
            <p class="text-sm text-gray-400">{{ item.genre }} - {{ item.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import content from '../data/content.js';
  import { ref } from 'vue';
  
  const activeFilter = ref('movie'); 
  const filteredContent = ref(content); 
  
  const filterContent = (type) => {
    activeFilter.value = type;
    filteredContent.value = content.filter(item => item.type === type);
  };
  </script>
  
  <style scoped>
  .content-card img {
    transition: transform 0.3s;
  }
  .content-card:hover img {
    transform: scale(1.05);
  }
  </style>
  