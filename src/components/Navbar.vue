<template>
    <div class="flex justify-between p-4 absolute w-full">
      <h2 class="text-primary">TESTFLIX</h2>
      <div class="flex">
        <!-- Botón para abrir el modal -->
        <div @click="openModal" class="cursor-pointer flex items-center">
            <span v-html="Agregar"></span>
            <span class="text-white">Agregar pelicula</span>
        </div>
  
        <!-- Menú lateral y notificaciones -->
        <div class="flex items-center space-x-4">
            <span v-html="Menu"></span>
          
          <!-- Botón de notificaciones -->

          <span v-html="Notification"></span>
          <!-- Foto de perfil -->

          <img src="../../public/images/Perfil.png" alt="Perfil">
        </div>
      </div>
  
      <!-- Usar el componente Modal -->
      <Modal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" />
  
      <!-- Usar el componente Sidebar -->
      <Sidebar :isOpen="isSidebarOpen" @update:isOpen="isSidebarOpen = $event" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Modal from './Modal.vue';
  import Sidebar from './Sidebar.vue';
  import { Agregar, Menu, Notification } from '../assets/iconos.js'; // Importar los íconos

  const isModalOpen = ref(false);
  const isSidebarOpen = ref(false);
  
  // Función para abrir el modal
  function openModal() {
    isModalOpen.value = true;
  }
  
  // Función para abrir/cerrar el menú lateral
  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
  }
  </script>
  
  <style scoped>
  /* Puedes agregar aquí estilos para tu navbar si los necesitas */
  </style>
  