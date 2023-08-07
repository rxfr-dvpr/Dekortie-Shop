import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const ftdProductsStore = defineStore('Featured Products', {
    state: () => ({
        title: 'featured products',
        cards: [
            {
                name: 'elon series chair',
                code: 'Y523201',
                uniqueID: uuidv4(),
                price: 42,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FFtdProducts%2Fproduct-1.png?alt=media&token=4d8f166c-c37c-4c36-a455-8a50d42e7a7c'
            },
            {
                name: 'aidan sling chair',
                code: 'Y525367',
                uniqueID: uuidv4(),
                price: 59,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FFtdProducts%2Fproduct-2.png?alt=media&token=29a6b666-2a2c-43e1-a8fd-62748cb4dd64'
            },
            {
                name: 'baxton studio chair',
                code: 'Y517932',
                uniqueID: uuidv4(),
                price: 35,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FFtdProducts%2Fproduct-3.png?alt=media&token=d9bc447a-69d1-4442-a849-83ddd915069f'
            },
            {
                name: 'swanky wood chair',
                code: 'Y564387',
                uniqueID: uuidv4(),
                price: 75,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FFtdProducts%2Fproduct-4.png?alt=media&token=15faf1a3-0191-441f-b0ed-ae6585f996bf'
            }
        ]
    })
})