import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/litar-Hoteles',
      name: 'litar-Hoteles',
      component: () => import('../views/HotelListado.vue')
    },
    {
      path: '/detalle-Hoteles',
      name: 'detalle-Hoteles',
      component: () => import('../views/HotelDetalle.vue'),
      children: [
        {
          path: '/detalle-Hotel-grafica',
          name: 'grafica-Hotele',
          component: () => import('../views/HotelGrafica.vue')
        },
        {
          path: '/detalle-Hotel-habitaciones',
          name: 'habitaciones-Hotel',
          component: () => import('../views/HotelHabitaciones.vue')
        }
      ]
    }
  ]
})

export default router
