<script setup>
import dev from '../assets/dev.jpeg'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

</script>

<template>
<div class="w-full h-full">
    <ul class="w-full h-full flex flex-col justify-center">
        <li class="w-full flex flex-col items-center">
          
          <img :src="dev" alt="" class="rounded-full w-64 h-64 border-2 shadow-md dark:shadow-md dark:shadow-gray-800 dark:border-gray-800">
        </li>
        <li class="w-full flex flex-col items-center text-center pt-5">
          <p class="text-4xl ">Hey, I'm Gabriel Pimentel</p>
        </li>
        <li class="w-full flex flex-col items-center text-center">
          <p class="text-4xl">but you can call me <a href="">gabrieldev6</a></p>
        </li>
        <li class="w-full flex justify-center text-center pt-5 text-2xl">
          <p>I'm a front-end web developer, UX/UI designer <br>& back-end developer</p>
        </li>
        <li class="w-full flex justify-around pt-5 ">
          <div class="flex w-1/2 max-w-96 justify-around">
            
            <button class="hover-line-button font-bold flex items-center color-black dark:color-white"> 
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2"/> See my projects
            </button>
            
            <button class="hover-line-button font-bold flex items-center color-black dark:color-white">
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2"/> More about me
            </button>
          
          </div>
          
        </li>
      </ul>
</div>
</template>

<style lang="css" scoped>
.hover-line-button {
  position: relative;
  display: inline-block;
  background: none;
  border: none; 
  cursor: pointer;
  overflow: hidden;
}

.hover-line-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* Espessura da linha */
  background: black;
  transition: width 0.3s ease-out, left 0.3s ease-out;
}
.dark .hover-line-button::after {
  background-color: #e2e8f0; /* Escuro */
}
.hover-line-button:hover::after {
  width: 100%; /* Aumenta a largura até preencher o botão */
  left: 0; /* Garante que a linha cresce da esquerda para direita */
}

.hover-line-button:not(:hover)::after {
  width: 0; /* Volta a largura para 0 */
  left: 100%; /* Faz a linha retornar da direita para esquerda */
}

</style>