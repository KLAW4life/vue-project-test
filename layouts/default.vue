<template>
  <v-app>
    <v-main>
      <slot/>  
    </v-main>
  </v-app>  
</template>
<script setup>
import { useGalleryStore } from '~~/store/gallery';

const galleryStore = useGalleryStore()
  onMounted(()=> {
    galleryStore.getCardDetails()
    console.log('reload')
  })
</script>