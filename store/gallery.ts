
import {defineStore} from 'pinia'
import {db} from '@/database/firebase_init'
import {onValue, ref, getDatabase, update} from 'firebase/database'

interface GalleryProfile {
  cards: any
}

export const useGalleryStore = defineStore('gallery',{
  state: (): GalleryProfile => ({
      cards: []
  }),
  getters: {

  },
  actions: {
    getCardDetails(){
      onValue(ref(db, 'cards'), (snapshot: any) => {
        const galleryCards = snapshot.val() //.val() will return all the cards
        if(galleryCards) {
          // const galleryKeys = Object.keys(galleryCards) 
          // const galleryValues = Object.values(galleryCards)
          // console.log(galleryKeys)
          // console.log(galleryValues)
          // console.log(galleryCards)
          const galleryEntries = Object.entries(galleryCards)
          const cardsFormatted = galleryEntries.map((item: any) => {
            return {
              id: item[0],
              title: item[1].title,
              description: item[1].desc,
              image: item[1].img

            }
          })
          this.cards = cardsFormatted
        }
      })
    },

    createCard(title: any, desc: any, url: any){
    // createCard(){
      const updates: any = {};

      //Get the last card ID from the database and generating the next id.
      //onValue is a recursive function that runs everytime there is a change
    
      const idNum = this.cards.length
      //function to get the last id and increment
      const newKey = `card_id${idNum + 1}`

      const newCardData = {
        title: title,
        desc: desc,
        img: url 
      };
      updates['/cards/' + newKey] = newCardData;
      return update(ref(db), updates);


      // onValue(ref(db, 'cards'), (snapshot: any) => {
      //   const galleryCards = snapshot.val() //.val() will return all the cards
      //   if(galleryCards) {
      //     const galleryKeys = Object.keys(galleryCards) 
      //     const lastKey = galleryKeys[galleryKeys.length - 1];
      //     //use regex to get only the number from the id name
      //     const lastId = parseInt(lastKey.split("_")[1].match(/\d+/)[0]);
      //     const newKey = "card_id" + (lastId + 1);
      //     console.log(galleryKeys)
      //     console.log(lastKey)
      //     console.log(lastId)
      //     console.log(newKey)

      //     // A post entry.
          // const newCardData = {
          //   title: title,
          //   description: desc,
          //   image: url 
          // };

      //     const updates = {};
      //     updates['/cards/' + newKey] = newCardData;
      //     return update(ref(db), updates);

      //   }
      // })

      

    }

   }
})