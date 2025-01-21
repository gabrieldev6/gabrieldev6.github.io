import {createRouter, createWebHistory} from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./pages/home.vue'),
            children: [
                {
                    path: '',
                    name: 'Show',
                    component: () => import('./pages/show.vue')
                },
                {
                    path: '/projects',
                    name: 'Projects',
                    component: () => import('./pages/projects.vue')
                },
                {
                    path: '/about',
                    name: 'About',
                    component: () => import('./pages/about.vue')
                }
            ]
        },
        
        
    ]   
})

export default routes