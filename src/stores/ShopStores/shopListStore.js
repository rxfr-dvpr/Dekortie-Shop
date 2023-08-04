import { defineStore } from "pinia";

export const shopListStore = defineStore('Shop List Store', {
    state: () => ({
        list: [ 
            { 
                name: 'grey lounge chair', 
                oldPrice: 50, 
                newPrice: 30, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-1.png?alt=media&token=8a099901-2745-44fd-b1fb-c18864ba27f0', 
                txt: 'The grey lounge chair is a comfortable and stylish addition to any living space. With its sleek design and plush cushioning, it provides the perfect spot to relax and unwind.' 
            }, 
            { 
                name: 'la-z-boy upholstered recliner', 
                oldPrice: 55, 
                newPrice: 35, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-2.png?alt=media&token=5d836934-42e1-4c36-a8d0-f5d2d3abf708', 
                txt: 'The la-z-boy upholstered recliner offers unparalleled comfort and support. Its plush cushioning and reclining feature make it the perfect choice for lounging and relaxation.' 
            }, 
            { 
                name: 'white lounge chair', 
                oldPrice: 60, 
                newPrice: 40, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-3.png?alt=media&token=8f4b8e63-6acf-4be1-92cb-3287d7e272cc', 
                txt: 'The white lounge chair adds a touch of elegance to any room. Its modern design and comfortable seating make it an ideal choice for both style and relaxation.' 
            }, 
            { 
                name: 'swissgear bungee backpack', 
                oldPrice: 45, 
                newPrice: 25, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-4.png?alt=media&token=26054925-5a90-41b0-868c-9a87b03bcb4d', 
                txt: 'The swissgear bungee backpack is a versatile and durable option for everyday use. With its spacious compartments and comfortable straps, it offers convenience and functionality.' 
            }, 
            { 
                name: 'elago sport band', 
                oldPrice: 35, 
                newPrice: 20, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-5.png?alt=media&token=4f75fbfe-64af-4daf-8920-a59d0ffcb535', 
                txt: 'The elago sport band is a stylish and comfortable accessory for your smartwatch. Made from high-quality materials, it offers a secure and comfortable fit for all-day wear.' 
            }, 
            { 
                name: 'samsung galaxy watch 4 classic', 
                oldPrice: 70, 
                newPrice: 50, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-6.png?alt=media&token=82477f29-4b25-4fbb-b920-a3e5ecc26911', 
                txt: "The samsung galaxy watch 4 classic is a feature-packed smartwatch that combines style and functionality. With its sleek design and advanced health tracking capabilities, it's the perfect companion for an active lifestyle." 
            },
            { 
                name: 'beats studio pro', 
                oldPrice: 80, 
                newPrice: 60, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-7.png?alt=media&token=f3237e93-6738-455a-a9cc-a851d12a0b5f', 
                txt: 'The beats studio pro headphones deliver immersive sound and superior comfort. With their noise-canceling technology and premium audio quality, they provide an exceptional listening experience.' 
            }, 
            { 
                name: 'christopher arm chair', 
                oldPrice: 55, 
                newPrice: 40, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-8.png?alt=media&token=b463acf5-d707-4f52-bf5d-ee689aac9b55', 
                txt: 'The christopher arm chair combines classic design with modern comfort. Its sturdy construction and plush cushioning make it a perfect addition to any living room or study.' 
            }, 
            { 
                name: 'itouch sport 3 smartwatch', 
                oldPrice: 40, 
                newPrice: 25, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-9.png?alt=media&token=db221334-208f-44dc-8bd2-8b1e93cd3f57', 
                txt: 'The itouch sport 3 smartwatch is a versatile and stylish accessory for fitness enthusiasts. With its advanced fitness tracking features and sleek design, it helps you stay motivated and on top of your goals.' 
            }, 
            { 
                name: 'canon eos rebel t7 dslr', 
                oldPrice: 65, 
                newPrice: 45, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-10.png?alt=media&token=0b3c9888-a6e2-4452-8fe1-c6e534b159e0', 
                txt: 'The canon eos rebel t7 dslr is a powerful and versatile camera for photography enthusiasts. With its high-resolution sensor and intuitive controls, it allows you to capture stunning images with ease.' 
            }, 
            { 
                name: 'skullcandy crusher evo wireless', 
                oldPrice: 75, 
                newPrice: 55, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-11.png?alt=media&token=0c5a0cb3-48f6-4a4c-b41b-581c5c8859c7', 
                txt: 'The skullcandy crusher evo wireless headphones deliver powerful bass and immersive sound. With their wireless connectivity and long battery life, they provide a seamless listening experience on the go.' 
            }, 
            { 
                name: 'swissgear bungee backpack', 
                oldPrice: 45, 
                newPrice: 30, 
                img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/item-12.png?alt=media&token=494fc00f-4172-44a3-b8fa-7f64d67938ac', 
                txt: 'The swissgear bungee backpack is a reliable and spacious option for students and travelers. Its ergonomic design and multiple compartments make it easy to carry and organize your belongings.' 
            } 
        ]
    })
})

