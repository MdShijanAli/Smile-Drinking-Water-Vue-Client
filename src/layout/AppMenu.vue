<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: '',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
            {
                label: 'Products',
                icon: 'pi pi-shopping-bag',
                to: '/all-products'
            },
            { label: 'Orders', icon: 'pi pi-shopping-cart', to: '/orders' },
            { label: 'Applicaitons', icon: 'pi pi-file', to: '/applications' },
            { label: 'Jobs', icon: 'pi pi-inbox', to: '/jobs' },
            { label: 'Settings', icon: 'pi pi-cog', to: '/settings' },
            { label: 'Logout', icon: 'pi pi-sign-out' },
        ]
    },



  
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
      
    </ul>
</template>

<style lang="scss" scoped></style>
