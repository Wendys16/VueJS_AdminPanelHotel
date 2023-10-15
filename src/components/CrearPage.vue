<template>
    <div>
        <div v-if="modalCrear" class="modal">
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="ease-in duration-200" leave-from-class="opacity-100 "
                    leave-to-class="opacity-0">

                    <div class="fixed inset-0 z-10 w-screen overflow-y-auto" v-show="modalCrear">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <transition enter-active-class="ease-out duration-300"
                                enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                                leave-active-class="ease-in duration-200"
                                leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                                leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <div v-show="modalCrear"
                                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div
                                        class="flex items-start justify-between px-5 py-2 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                           Nuevo Hotel
                                        </h3>
                                        <button type="button" @click="closeModalCrear"
                                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-hide="defaultModal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <form action="#">
                                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div class="sm:flex sm:items-start">
                                                <div class="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <div class="mb-4">
                                                        <label for="ciudad"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad:</label>
                                                        <input type="text" name="ciudad" id="ciudad"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                            required>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="nombre"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre
                                                            del hotel:</label>
                                                        <input type="text" name="nombre" id="nombre"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                            required>
                                                    </div>

                                                    <div class="mb-4">
                                                        <label for="nit"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nit:</label>
                                                        <input type="text" name="nit" id="nit"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                            required>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="direccion"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion:</label>
                                                        <input type="text" name="direccion" id="direccion"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                            required>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="numHabit"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número
                                                            máximo de habitaciones:</label>
                                                        <input type="text" name="numHabit" id="numHabit"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                            required>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="submit"
                                                class="inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 sm:ml-3 sm:w-auto">Guardar</button>
                                            <button @click="closeModalCrear" type="button"
                                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancelar</button>
                                        </div>
                                    </form>
                                </div>
                            </transition>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        modalCrear: Boolean,
    },
    methods: {
        closeModalCrear() {
            this.$emit('close-modal-crear');
        },
    },
};
</script>