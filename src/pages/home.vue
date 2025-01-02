<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import logo from './assets/logo.svg'
import dev from '../assets/dev.jpeg'

import { ref } from 'vue'
import { useDark } from '@vueuse/core'

library.add(fas);

const isDark = useDark();
let show = ref(false);


</script>

<template>
  <div class="h-full w-full dark:bg-gray-800 ">
    <!-- barra -->
    <div class="dark:bg-black w-full h-1/10 bg-blue-500 text-white dark:text-gray-300 flex items-center z-1000">
      <ul class="w-full flex justify-between items-center px-10">
        <li>
            <font-awesome-icon icon="fa-solid fa-code" class="w-12 h-12" />
        </li>
        <li class="flex items-center">
          <div id="app" class="px-2 py-2 ">
            <div class="px-5 py-5 flex justify-center items-center shadow-md rounded-md dark:shadow-md dark:shadow-gray-800 dark:text-gray-300">
                <label for="theme-toggle" class="container">

                <input v-model="isDark" id="theme-toggle" checked="checked" type="checkbox">
                <font-awesome-icon icon="fa-solid fa-sun" class="sun w-4"/>
                <font-awesome-icon icon="fa-solid fa-moon" class="moon w-4"/>
                </label>
            </div>
            

              <!-- <button id="theme-toggle" 
                class="px-2 py-2 shadow-md rounded-md dark:shadow-md dark:shadow-gray-800 dark:text-gray-300">
                <font-awesome-icon icon="fa-solid fa-sun" />
              </button> -->
            
          </div>
          <div><button @click="show = !show" class="px-4 py-2 rounded-md shadow-md dark:shadow-md dark:shadow-gray-800 dark:text-gray-300">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button></div>

        </li>
      </ul>

    </div>

    <!-- painel -->
    <div class="h-9/10 w-full text-black flex justify-center items-center dark:text-gray-300">
      <ul class="w-full h-full flex flex-col justify-center">
        <li class="w-full flex flex-col items-center">
          <img :src="dev" alt="" class="rounded-full w-64 h-64 border-2 shadow-md dark:shadow-md dark:shadow-gray-800 dark:border-gray-800">
        </li>
        <li class="w-full flex flex-col items-center pt-5">
          <p class="text-4xl ">Hey, I'm Gabriel Silva</p>
        </li>
        <li class="w-full flex flex-col items-center ">
          <p class="text-4xl">but you can call me <a href="">sloy6</a></p>
        </li>
        <li class="w-full flex justify-center text-center pt-5 text-2xl">
          <p>I'm a front-end web developer, UX/UI designer <br>& back-end developer</p>
        </li>
        <li class="w-full flex justify-around pt-5 ">
          <div class="flex w-1/2 max-w-96 justify-around">
            <button class="hover-line-button font-bold flex items-center color-black dark:color-white"> <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2"/> See my projects</button>
          <button class="hover-line-button font-bold flex items-center color-black dark:color-white"> <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2"/> More about me</button>
          
          </div>
          
        </li>
      </ul>

      
      <Transition :duration="550" name="nested">
        <div v-if="show" class="outer px-2 h-full w-4/5 top-36 fixed rounded-t-lg shadow-lg dark:shadow-md dark:shadow-gray-700 backdrop-blur-sm">  
          <div class="inner pt-10 pl-2 dark:text-gray-300">
            <ul>
              <li><button><p class="font-bold text-3xl pt-2">Home</p></button></li>
              <li><button><p class="font-bold text-3xl pt-2">Projects</p></button></li>
              <li><button><p class="font-bold text-3xl pt-2">About</p></button></li>
              <li><button><p class="font-bold text-3xl hover:text-3xl pt-2">Contact</p></button></li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
    
  </div>

</template>
<style scoped>


/*------ Settings ------*/
.container {
  --color: #a5a5b0;
  --size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: var(--size);
  user-select: none;
  fill: var(--color);
}

.container .moon {
  position: absolute;
  animation: keyframes-fill .5s;
}

.container .sun {
  position: absolute;
  display: none;
  animation: keyframes-fill .5s;
}

/* ------ On check event ------ */
.container input:checked ~ .moon {
  display: none;
}

.container input:checked ~ .sun {
  display: block;
}

/* ------ Hide the default checkbox ------ */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* ------ Animation ------ */
@keyframes keyframes-fill {
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
}


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





  

  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}


.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  
  opacity: 0.001;
}

</style>