<template>
    <div>
        <div class="h-7 ">
            <h1 class="float-left  text-3xl font-semibold text-gray-700 from-neutral-100 md:text-3x1">Habitaciones</h1>
            <button type="button"
                class="flex text-white bg-gray-700 hover:bg-gray-800 font-normal rounded-lg text-sm px-3 py-1 mt-1 float-right "
                onclick="openModal('editarHabitacion')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Nueva Habitación
            </button>
        </div>
        <br>
        <div class="grid grid-cols-1 gap-3 mb-4 md:grid-cols-2 lg:grid-cols-2">
            <div class="flex  h-40 bg-white" >
                <div class="w-3/6 h-full">
                    <div class="p-2 h-3/5">
                        <h2 class="font-bold">Habitación 101</h2>
                        <p>Codigo: 100344</p>
                        <p>Tipo Estandar</p>
                        <p>Acomodacion doble</p>
                    </div>
                    <div class="p-2 flex items-end h-16">
                        <button type="button" title="Editar" onclick="openModal('editarHabitacion')"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    style="color: teal" />
                            </svg>
                        </button>
                        <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                            onclick="openModal('eliminarHabitacion')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    style="color: rgb(238, 88, 88)" />
                            </svg>
                        </button>

                        <a href="./detalleHotel.html" title="Ver más"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    style="color: darkcyan" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-3/6 h-full">
                    <img class="w-full h-full" src="../assets/img/habitaciones/h1.jpg" alt="no hay imagen">
                </div>
            </div>
            <div class="flex  h-40 bg-white">
                <div class="w-3/6 h-full">
                    <div class="p-2 h-3/5">
                        <h2 class="font-bold">Habitacion 102</h2>
                        <p>Codigo: 101345</p>
                        <p>Tipo junior</p>
                        <p>Acomodacion sencilla</p>
                    </div>
                    <div class="p-2 flex items-end h-16">
                        <button type="button" title="Editar" onclick="openModal('editarHabitacion')"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    style="color: teal" />
                            </svg>
                        </button>
                        <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                            onclick="openModal('eliminarHabitacion')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    style="color: rgb(238, 88, 88)" />
                            </svg>
                        </button>

                        <a href="./detalleHotel.html" title="Ver más"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    style="color: darkcyan" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-3/6 h-full rounded p-1">
                    <img class="w-full h-full rounded" src=../assets/img/habitaciones/hab2.jpg alt="no hay imagen">
                </div>
            </div>
            <div class="flex  h-40 rounded bg-white">
                <div class="w-3/6 h-full">
                    <div class="p-2 h-3/5">
                        <h2 class="font-bold">Habitacion 103</h2>
                        <p>Codigo: 101346</p>
                        <p>Tipo Estandar</p>
                        <p>Acomodacion triple</p>
                    </div>
                    <div class="p-2 flex items-end h-16">
                        <button type="button" title="Editar" onclick="openModal('editarHabitacion')"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    style="color: teal" />
                            </svg>
                        </button>
                        <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                            onclick="openModal('eliminarHabitacion')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    style="color: rgb(238, 88, 88)" />
                            </svg>
                        </button>

                        <a href="./detalleHotel.html" title="Ver más"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    style="color: darkcyan" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-3/6 h-full">
                    <img class="w-full h-full" src=../assets/img/habitaciones/hab3.jpg alt="no hay imagen">
                </div>
            </div>
            <div class="flex  h-40 bg-white">
                <div class="w-3/6 h-full">
                    <div class="p-2 h-3/5">
                        <h2 class="font-bold">Habitacion 104</h2>
                        <p>Codigo: 102348</p>
                        <p>Tipo Estandar</p>
                        <p>Acomodacion cuadruple</p>
                    </div>
                    <div class="p-2 flex items-end h-16">
                        <button type="button" title="Editar" onclick="openModal('editarHabitacion')"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    style="color: teal" />
                            </svg>
                        </button>
                        <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                            onclick="openModal('eliminarHabitacion')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    style="color: rgb(238, 88, 88)" />
                            </svg>
                        </button>

                        <a href="./detalleHotel.html" title="Ver más"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    style="color: darkcyan" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-3/6 h-full ">
                    <img class="w-full h-full" src=../assets/img/habitaciones/hab4.jpg alt="no hay imagen">
                </div>
            </div>

            <div class="flex  h-40 bg-white">
                <div class="w-3/6 h-full">
                    <div class="p-2 h-3/5">
                        <h2 class="font-bold">Habitacion 105</h2>
                        <p>Codigo: 106349</p>
                        <p>Tipo junior</p>
                        <p>Acomodacion sencilla</p>
                    </div>
                    <div class="p-2 flex items-end h-16">
                        <button type="button" title="Editar" onclick="openModal('editarHabitacion')"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    style="color: teal" />
                            </svg>
                        </button>
                        <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                            onclick="openModal('eliminarHabitacion')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    style="color: rgb(238, 88, 88)" />
                            </svg>
                        </button>

                        <a href="./detalleHotel.html" title="Ver más"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    style="color: darkcyan" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-3/6 h-full r">
                    <img class="w-full h-full" src=../assets/img/habitaciones/hab5.jpg alt="no hay imagen">
                </div>
            </div>

            <div class="flex  h-40 bg-white">
                <div class="w-3/6 h-full">
                    <div class="p-2 h-3/5">
                        <h2 class="font-bold">Habitacion 106</h2>
                        <p>Codigo: 108348</p>
                        <p>Tipo suite</p>
                        <p>Acomodacion doble</p>
                    </div>
                    <div class="p-2 flex items-end h-16">
                        <button type="button" title="Editar" onclick="openModal('editarHabitacion')"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    style="color: teal" />
                            </svg>
                        </button>
                        <button type="button" title="Eliminar" class="font-medium rounded-lg text-sm  px-1 py-1 mr-2"
                            onclick="openModal('eliminarHabitacion')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    style="color: rgb(238, 88, 88)" />
                            </svg>
                        </button>

                        <a href="./detalleHotel.html" title="Ver más"
                            class="font-medium rounded-lg text-sm  px-1 py-1 mr-2">
                            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    style="color: darkcyan" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-3/6 h-full">
                    <img class="w-full h-full" src=../assets/img/habitaciones/hab6.jpg alt="no hay imagen">
                </div>
            </div>

        </div>
    </div>
</template>
