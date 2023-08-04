import { defineStore } from "pinia";

export const shopListStore = defineStore('Shop List Store', {
    state: () => ({
        list: [ 
            { 
                name: 'grey lounge chair', 
                oldPrice: 50, 
                newPrice: 30,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-1.png?alt=media&token=8a099901-2745-44fd-b1fb-c18864ba27f0'
            }, 
            { 
                name: 'la-z-boy upholstered recliner', 
                oldPrice: 55, 
                newPrice: 35,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-2.png?alt=media&token=5d836934-42e1-4c36-a8d0-f5d2d3abf708'
            }, 
            { 
                name: 'white lounge chair', 
                oldPrice: 60, 
                newPrice: 40,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-3.png?alt=media&token=8f4b8e63-6acf-4be1-92cb-3287d7e272cc'
            }, 
            { 
                name: 'swissgear bungee backpack', 
                oldPrice: 45, 
                newPrice: 25,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-4.png?alt=media&token=26054925-5a90-41b0-868c-9a87b03bcb4d'
            }, 
            { 
                name: 'elago sport band', 
                oldPrice: 35, 
                newPrice: 20,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-5.png?alt=media&token=4f75fbfe-64af-4daf-8920-a59d0ffcb535'
            }, 
            { 
                name: 'samsung galaxy watch 4 classic', 
                oldPrice: 70, 
                newPrice: 50, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-6.png?alt=media&token=82477f29-4b25-4fbb-b920-a3e5ecc26911'
            }, 
            { 
                name: 'beats studio pro', 
                oldPrice: 80, 
                newPrice: 60, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-7.png?alt=media&token=f3237e93-6738-455a-a9cc-a851d12a0b5f'
            }, 
            { 
                name: 'christopher arm chair', 
                oldPrice: 55, 
                newPrice: 40,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-8.png?alt=media&token=b463acf5-d707-4f52-bf5d-ee689aac9b55'
            }, 
            { 
                name: 'itouch sport 3 smartwatch', 
                oldPrice: 40, 
                newPrice: 25,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-9.png?alt=media&token=db221334-208f-44dc-8bd2-8b1e93cd3f57'
            }, 
            { 
                name: 'canon eos rebel t7 dslr', 
                oldPrice: 65, 
                newPrice: 45,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-10.png?alt=media&token=0b3c9888-a6e2-4452-8fe1-c6e534b159e0'
            }, 
            { 
                name: 'skullcandy crusher evo wireless', 
                oldPrice: 75, 
                newPrice: 55,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-11.png?alt=media&token=0c5a0cb3-48f6-4a4c-b41b-581c5c8859c7'
            }, 
            { 
                name: 'swissgear bungee backpack', 
                oldPrice: 45, 
                newPrice: 30,
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-12.png?alt=media&token=494fc00f-4172-44a3-b8fa-7f64d67938ac'
            }, 
        ]
    })
})

