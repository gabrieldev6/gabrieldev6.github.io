<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


import { ref } from 'vue'

library.add(fas);


let numProjects = ref(3);
</script>

<template>
    <div class="h-full w-full dark:bg-gray-800 ">
        <ul>
            <li>
                <div class="flex justify-between items-baseline w-96">
                    <h5 class="text-2xl font-bold">WORK</h5>
                    <h2 class="text-md">{{ numProjects }}</h2>
                </div>
                <hr class="w-full h-0.5 bg-black dark:bg-white rounded-lg">
            </li>
            <li>
                <div class="flex justify-between items-center pt-2">
                    <div class="flex items-center">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2" />
                        <h5 class="text-xl font-semibold">Dimpe</h5>
                    </div>
                    <h5>Web developer</h5>
                </div>

                <hr class="w-full h-0.5 bg-black dark:bg-white rounded-lg">
            </li>
            <li>
                <div class="flex justify-between items-center pt-2">
                    <div class="flex items-center">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2" />
                        <h5 class="text-xl font-semibold">OSD Lema</h5>
                    </div>
                    <h5>Web developer</h5>
                </div>

                <hr class="w-full h-0.5 bg-black dark:bg-white rounded-lg">
            </li>
            <li>
                <div class="flex justify-between items-center pt-2">
                    <div class="flex items-center">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="pr-2" />
                        <h5 class="text-xl font-semibold">Dimpe</h5>
                    </div>
                    <h5>Web developer</h5>
                </div>

                <hr class="w-full h-0.5 bg-black dark:bg-white rounded-lg">
            </li>
        </ul>


    </div>
</template>