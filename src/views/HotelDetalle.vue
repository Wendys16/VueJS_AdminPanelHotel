<template>
    <div class="p-0">
        <div class="mb-5 border-b-4 border-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
            <div class="w-full text-center space-y-3">
                <h1 class="text-3xl shadow-xl bg-gray-200 rounded-lg font-serif" style="text-shadow: 5px -2px 4px gray">HOTEL LAS
                    PALMERAS</h1>
                <p class="italic">Barranquilla, atlantico</p>
                <p class="italic">Nit: 999974877</p>
                <p class="italic">Direccion: Cra 25 N° 4-5</p>

                <button type="button" title="Editar Informacion del Hotel" @click="openModalCrear"
                    class="font-medium text-sm p-2 mr-2 shadow-sm shadow-black rounded-full hover:bg-gray-100  border border-solid  border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            style="color: teal" />
                    </svg>
                </button>
                
                <router-link to="/detalle-Hotel-grafica"
                    class="font-medium text-sm  p-2 mr-2 shadow-sm shadow-black rounded-full hover:bg-gray-100 border border-solid  border-gray-300">
                    ver grafica
                </router-link>
                <router-link to="/detalle-Hotel-habitaciones"
                    class="font-medium text-sm  p-2 mr-2 shadow-sm shadow-black rounded-full hover:bg-gray-100 border border-solid  border-gray-300">
                    Habitaciones
                </router-link>
            </div>
            <div class="w-full ">
                <img class="w-full" src="../assets/img/hotel1.jpg" alt="">
            </div>
        </div>

        <div class="p-0">
            <router-view></router-view>
        </div>
    </div>
    <CrearPage :modalCrear="modalCrear" @close-modal-Crear="closeModalCrear" />
</template>
<script>
import CrearPage from '../components/CrearPage.vue'
export default {
    data() {
        return {
            modalEliminar: false,
            modalCrear: false,
        };
    },
    methods: {
        openModalEliminar() {
            this.modalEliminar = true;
        },
        closeModalEliminar() {
            this.modalEliminar = false;
        },
        openModalCrear() {
            this.modalCrear = true;
        },
        closeModalCrear() {
            this.modalCrear = false;
        },
    },
    components: {
        CrearPage,
    },
};
</script>