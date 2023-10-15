<template>
    <div>
        <div class="p-0">
            <div class="h-6">
                <h1 class="float-left  text-3xl font-semibold text-gray-500 dark:text-gray-400  md:text-3x1">Hoteles</h1>
                <button type="button" @click="openModalCrear"
                    class="flex text-white bg-gray-700 hover:bg-gray-800 font-normal rounded-lg text-sm px-3 py-1 mr-2 mb-1 float-right absolute top-8 right-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Agregar Hotel
                </button>
            </div>
            <hr>
            <br>
            <div class="grid grid-cols-1 gap-3 mb-4 md:grid-cols-2 lg:grid-cols-2">
                <div class="flex  h-40  bg-white">
                    <div class="w-3/6 h-full">
                        <div class="p-2 h-3/5">
                            <h2 class="font-bold">HOTEL LAS PALMERAS</h2>
                            <p>Barranquilla, atlantico</p>
                        </div>
                        <div class="p-2 flex items-end h-16">
                            <button type="button" title="Editar" @click="openModalCrear"
                                class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        style="color: teal" />
                                </svg>
                            </button>
                            <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                                @click="openModalEliminar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        style="color: rgb(238, 88, 88)" />
                                </svg>
                            </button>

                            <router-link to="/detalle-Hoteles" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        style="color: darkcyan" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-3/6 h-full">
                        <img class="w-full h-full" src="../assets/img/hotel-las-palmeras.jpg" alt="no hay imagen">
                    </div>
                </div>
                <div class="flex  h-40 bg-white">
                    <div class="w-3/6 h-full">
                        <div class="p-2 h-3/5">
                            <h2 class="font-bold">HOTEL MIRADOR</h2>
                            <p>Boca grande, cartagena</p>
                        </div>
                        <div class="p-2 flex items-end h-16">
                            <button type="button" title="Editar" @click="openModalCrear"
                                class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        style="color: teal" />
                                </svg>
                            </button>
                            <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                                @click="openModalEliminar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        style="color: rgb(238, 88, 88)" />
                                </svg>
                            </button>

                            <router-link to="/detalle-Hoteles" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        style="color: darkcyan" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-3/6 h-full ">
                        <img class="w-full h-full" src="../assets/img/hotel-mirador.jpg" alt="no hay imagen">
                    </div>
                </div>
                <div class="flex  h-40 bg-white">
                    <div class="w-3/6 h-full">
                        <div class="p-2 h-3/5">
                            <h2 class="font-bold">HOTEL ONOMA</h2>
                            <p>Medellin, antioquia</p>
                        </div>
                        <div class="p-2 flex items-end h-16">
                            <button type="button" title="Editar" @click="openModalCrear"
                                class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        style="color: teal" />
                                </svg>
                            </button>
                            <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                                @click="openModalEliminar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        style="color: rgb(238, 88, 88)" />
                                </svg>
                            </button>

                            <router-link to="/detalle-Hoteles" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        style="color: darkcyan" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-3/6 h-full">
                        <img class="w-full h-full" src="../assets/img/hotel1.jpg" alt="no hay imagen">
                    </div>
                </div>
                <div class="flex  h-40 bg-white">
                    <div class="w-3/6 h-full">
                        <div class="p-2 h-3/5">
                            <h2 class="font-bold">HOTEL PLAYA LINDA</h2>
                            <p>Tolu, coveñas</p>
                        </div>
                        <div class="p-2 flex items-end h-16">
                            <button type="button" title="Editar" @click="openModalCrear"
                                class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        style="color: teal" />
                                </svg>
                            </button>
                            <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                                @click="openModalEliminar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        style="color: rgb(238, 88, 88)" />
                                </svg>
                            </button>

                            <router-link to="/detalle-Hoteles" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        style="color: darkcyan" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-3/6 h-full">
                        <img class="w-full h-full" src="../assets/img/hotel2.jpg" alt="no hay imagen">
                    </div>
                </div>

                <div class="flex  h-40  bg-white">
                    <div class="w-3/6 h-full">
                        <div class="p-2 h-3/5">
                            <h2 class="font-bold">HOTEL PUERTA ORO</h2>
                            <p>Tolu, coveñas</p>
                        </div>
                        <div class="p-2 flex items-end h-16">
                            <button type="button" title="Editar" @click="openModalCrear"
                                class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        style="color: teal" />
                                </svg>
                            </button>
                            <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                                @click="openModalEliminar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        style="color: rgb(238, 88, 88)" />
                                </svg>
                            </button>

                            <router-link to="/detalle-Hoteles" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        style="color: darkcyan" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-3/6 h-full">
                        <img class="w-full h-full" src="../assets/img/hotel3.jpg" alt="no hay imagen">
                    </div>
                </div>

                <div class="flex  h-40  bg-white">
                    <div class="w-3/6 h-full">
                        <div class="p-2 h-3/5">
                            <h2 class="font-bold">HOTEL LUXXE</h2>
                            <p>Poblado, medellin</p>
                        </div>
                        <div class="p-2 flex items-end h-16">
                            <button type="button" title="Editar" @click="openModalCrear"
                                class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        style="color: teal" />
                                </svg>
                            </button>
                            <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                                @click="openModalEliminar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        style="color: rgb(238, 88, 88)" />
                                </svg>
                            </button>

                            <router-link to="/detalle-Hoteles" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                                <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        style="color: darkcyan" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-3/6 h-full ">
                        <img class="w-full h-full " src="../assets/img/hotel4.jpg" alt="no hay imagen">
                    </div>
                </div>

            </div>
        </div>
    </div>
    <EliminarPage :modalEliminar="modalEliminar" @close-modal-eliminar="closeModalEliminar" />
    <CrearPage :modalCrear="modalCrear" @close-modal-Crear="closeModalCrear" />
</template>
<script>
import EliminarPage from '../components/EliminarPage.vue'
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
        EliminarPage,
        CrearPage,
    },
};
</script>