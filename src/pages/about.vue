<script setup >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import dev2 from '../assets/dev2.png'


library.add(fas);

</script>
<template>
    <div class="w-full h-full flex flex-col sm:max-w-4xl md:flex-row justify-center items-center ">
        <ul class="w-8/12 sm:pl-5 sm:w-3/5 sm:h-1/2 order-2 sm:order-1">
            <li><h5 class="text-2xl font-bold">About</h5></li>
            <li><hr class="w-4/5 h-0.5 bg-black dark:bg-white rounded-lg"></li>
            <li>
                <div class="w-full text-sm sm:text-lg">
                    <p> Hey, my name is Gabriel Silva and I use gabrieldev6 as my nickname across social medias.
                    I’m a graphic designer, UX/UI designer & front-end web developer from Brazil. 
                    I’m also passionate about pop music and make portraits and universes around
                    what I listen to and I’m always curious to learn more when it comes to new technologies 
                    and creative coding.
                    </p>

                </div>
            </li>
            <li>

                <button class="hover-line-button font-bold flex items-center color-black dark:color-white pt-1 sm:pt-4 ">
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="rotate-90"/> Resume
                </button>
            </li>

        </ul>
        <div class="order-1 sm:order-2 w-full flex justify-center">
            <img :src="dev2" class="rounded-xl w-8/12 sm:max-w-96"/>
        </div>
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