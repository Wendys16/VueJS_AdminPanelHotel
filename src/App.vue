<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AsidePage from './components/AsidePage.vue'
</script>
<template>
    <div>
        <AsidePage />
        <div class="p-6 sm:ml-64 bg-bgBody">
            <router-view></router-view>
        </div>
    </div>
</template>