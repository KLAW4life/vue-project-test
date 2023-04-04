<template>
    <div>
        <h1>Card Upload Form</h1>
    </div>

    <div>
        <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent="createCard">
            <v-text-field
            v-model="title"
            :rules="trules"
            label="Title"
            ></v-text-field>

            <v-textarea 
            v-model="desc"
            :rules="descrules"
            label="Image Description"
            ></v-textarea>

            <v-text-field
            v-model="url"
            :rules="urlrules"
            label="Image Url"
            ></v-text-field>

            <!-- update_gallery function to add when clicked -->
            <v-btn @click="sunmitAns" block class="mt-2" color="primary">Submit</v-btn>

        </v-form>
    </v-sheet>
    </div>

    
</template>

<script setup>
//importing the store to get the createCard function
import { useGalleryStore } from '@/store/gallery.ts';

const title = ref('')
const trules = [
  value => {
    if (value) return true
    return 'You must enter a title.'
  },
]
const desc = ref('')
const descrules = [
  value => {
    if (value) return true
    return 'You must enter a description.'
  },
]
const url = ref('')
const urlrules = [
  value => {
    if (value) return true
    return 'You must enter an image url link.'
  },
]

// creating an instance of the function
const update_gallery = useGalleryStore()

// function submitAnswers() {
//   //do whatever
//   update_gallery.createCard(title.value, desc.value, url.value)
// }

function sunmitAns(){
  console.log('this ran')
  update_gallery.createCard(title.value, desc.value, url.value)
}

</script>
  