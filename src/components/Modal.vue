<template>
    <div v-if="isOpen" class="modal">
      <div class="modal-content">
        <span @click="close" class="close-button">x</span>
        <h3>Agregar Película</h3>
        <!-- Aquí puedes agregar el formulario para la película -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
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
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    text-align: center;
  }
  
  .close-button {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
  </style>
  