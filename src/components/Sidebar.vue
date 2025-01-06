<template>
    <div v-if="isOpen" class="sidebar">
      <div class="sidebar-content">
        <span @click="close" class="close-button">x</span>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  });
  
  const emit = defineEmits(['update:isOpen']);
  
  function close() {
    emit('update:isOpen', false);
  }
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #242424;
    color: white;
    z-index: 999;
    transition: transform 0.3s ease;
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 10px 0;
  }
  
  .sidebar .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  </style>
  