<template>

  <div>
    <h1>Additional AI Generated Images Collection</h1>
  </div>

  <div> 
    <v-container fluid>

      <v-row>
        <v-col v-for="card in gallery.cards" :key="card.id" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="card.image" aspect-ratio="1"></v-img>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup>

import { useGalleryStore } from '@/store/gallery.ts';
const gallery = useGalleryStore()
const cards = ref([])

// const cards = ref([
//     {
//       id: 1,
//       title: 'Card 1',
//       description: 'Description for card 1',
//       image: 'https://th.bing.com/th/id/OIG.w1lgVttivj7ECCuSOZUB?pid=ImgGn',
//     },
//     {
//       id: 2,
//       title: 'Card 2',
//       description: 'Description for card 2',
//       image: 'https://th.bing.com/th/id/OIG.eUDjSPr5nI7EK2M2F5uP?pid=ImgGn',
//     },
//     {
//       id: 3,
//       title: 'Card 3',
//       description: 'Description for card 3',
//       image: 'https://th.bing.com/th/id/OIG.gp_MYn2fkQFcDxUmsPUT?pid=ImgGn',
//     },
//     {
//       id: 4,
//       title: 'Card 4',
//       description: 'Description for card 4',
//       image: 'https://th.bing.com/th/id/OIG.aEfWC3e7s8rTrcuAaS9X?pid=ImgGn',
//     }

// ])

onMounted(()=> {
  gallery.getCardDetails()
})
console.log(gallery.cards)

  
       
</script>

<style>
  .card-gallery {
    margin: 20px;
  }
</style>