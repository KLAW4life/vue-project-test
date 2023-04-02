<template>

  <div class="d-flex justify-center mb-6 bg-surface-variant">
    <h1>My AI Generated Image Collection</h1>
  </div>

  <div> 
    <v-container fluid>

      <v-row>
        <v-col v-for="card in cards" :key="card.id" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="card.image" aspect-ratio="1"></v-img>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.description }}</v-card-text>
            <v-btn
              @click="test"
            >
              Click Me to Like!
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<!-- Format to use composition api using setup in script tag -->
<script setup>
  const cards = ref({
      card_id_01: {
        title: 'test0',
        description: '',
        image: ''
      },
      card_id_02: {
        title: 'Testr 1',
        description: '',
        image: ''
      }
    }
    )
  const cards2 = ref([
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for card 1',
      image: 'https://th.bing.com/th/id/OIG.Ex8vuUEwB_PsjepuIxRM?pid=ImgGn',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for card 2',
      image: 'https://th.bing.com/th/id/OIG.LXzak5Qy5QSsJTwefUyo?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for card 3',
      image: 'https://th.bing.com/th/id/OIG.zuWbfzEoTNyhm67yxJl9?pid=ImgGn',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description for card 4',
      image: 'https://th.bing.com/th/id/OIG.Ek5JD2_1Jliu_X4wBiP.?pid=ImgGn',
    },
  ])

 function test() {
  alert('Hello World')
 }

</script>
  
<style>
  .card-gallery {
    margin: 20px;
  }
</style>