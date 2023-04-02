
import {defineStore} from 'pinia'
import {db} from '@/database/firebase_init'
import {onValue, ref} from 'firebase/database'

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
    //look into vue diaglouge to 
    createCard() {
      const updates : any = {}
      // update[`cards/${card_ido}`] = {
      //   title: d
      // }
        // return update(ref(db), updates)
    }
  }
})