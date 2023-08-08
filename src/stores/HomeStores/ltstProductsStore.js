import { defineStore } from "pinia";
import { v4 as uuid4 } from "uuid";

export const ltstProductsStore = defineStore('Latest Products Store', {
    state: () => ({
        title: 'latest products',
        productList: [
            {
                typeName: 'new arrival',
                visible: true,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        price: 42,
                        oldPrice: 65,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-1.png?alt=media&token=b427245e-89bc-482c-a313-baf58d2b7bda',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy deluxe set',
                        price: 39,
                        oldPrice: 60,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-2.png?alt=media&token=b57a6470-2669-414d-bcf6-b4fa514304f5',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'comfortable blanket',
                        price: 45,
                        oldPrice: 70,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-3.png?alt=media&token=218e1d13-0026-4cef-b403-f84a65c5c292',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy craft organizer',
                        price: 38,
                        oldPrice: 55,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-4.png?alt=media&token=dab1f5d1-0fb3-4e08-aff7-24c61f6e930c',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handcrafted pillow',
                        price: 40,
                        oldPrice: 62,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-5.png?alt=media&token=a54064b4-8151-431e-8e6b-f04a832b2c40',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'craft diy kit',
                        price: 36,
                        oldPrice: 58,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-6.png?alt=media&token=43d2da5a-a190-4c2c-a948-d07bdf5b5120',
                        uniqueID: uuid4(),
                    }
                ]
            },
            {
                typeName: 'best seller',
                visible: false,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        price: 42,
                        oldPrice: 65,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-1.png?alt=media&token=b427245e-89bc-482c-a313-baf58d2b7bda',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy deluxe set',
                        price: 39,
                        oldPrice: 60,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-2.png?alt=media&token=b57a6470-2669-414d-bcf6-b4fa514304f5',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'comfortable blanket',
                        price: 45,
                        oldPrice: 70,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-3.png?alt=media&token=218e1d13-0026-4cef-b403-f84a65c5c292',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy craft organizer',
                        price: 38,
                        oldPrice: 55,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-4.png?alt=media&token=dab1f5d1-0fb3-4e08-aff7-24c61f6e930c',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handcrafted pillow',
                        price: 40,
                        oldPrice: 62,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-5.png?alt=media&token=a54064b4-8151-431e-8e6b-f04a832b2c40',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'craft diy kit',
                        price: 36,
                        oldPrice: 58,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-6.png?alt=media&token=43d2da5a-a190-4c2c-a948-d07bdf5b5120',
                        uniqueID: uuid4(),
                    }
                ]
            },
            {
                typeName: 'featured',
                visible: false,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        price: 42,
                        oldPrice: 65,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-1.png?alt=media&token=b427245e-89bc-482c-a313-baf58d2b7bda',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy deluxe set',
                        price: 39,
                        oldPrice: 60,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-2.png?alt=media&token=b57a6470-2669-414d-bcf6-b4fa514304f5',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'comfortable blanket',
                        price: 45,
                        oldPrice: 70,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-3.png?alt=media&token=218e1d13-0026-4cef-b403-f84a65c5c292',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy craft organizer',
                        price: 38,
                        oldPrice: 55,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-4.png?alt=media&token=dab1f5d1-0fb3-4e08-aff7-24c61f6e930c',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handcrafted pillow',
                        price: 40,
                        oldPrice: 62,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-5.png?alt=media&token=a54064b4-8151-431e-8e6b-f04a832b2c40',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'craft diy kit',
                        price: 36,
                        oldPrice: 58,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-6.png?alt=media&token=43d2da5a-a190-4c2c-a948-d07bdf5b5120',
                        uniqueID: uuid4(),
                    }
                ]
            },
            {
                typeName: 'special offer',
                visible: false,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        price: 42,
                        oldPrice: 65,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-1.png?alt=media&token=b427245e-89bc-482c-a313-baf58d2b7bda',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy deluxe set',
                        price: 39,
                        oldPrice: 60,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-2.png?alt=media&token=b57a6470-2669-414d-bcf6-b4fa514304f5',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'comfortable blanket',
                        price: 45,
                        oldPrice: 70,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-3.png?alt=media&token=218e1d13-0026-4cef-b403-f84a65c5c292',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handy craft organizer',
                        price: 38,
                        oldPrice: 55,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-4.png?alt=media&token=dab1f5d1-0fb3-4e08-aff7-24c61f6e930c',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'handcrafted pillow',
                        price: 40,
                        oldPrice: 62,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-5.png?alt=media&token=a54064b4-8151-431e-8e6b-f04a832b2c40',
                        uniqueID: uuid4(),
                    },
                    {
                        name: 'craft diy kit',
                        price: 36,
                        oldPrice: 58,
                        img: 'https://firebasestorage.googleapis.com/v0/b/dekortie-shop-storage.appspot.com/o/HomePage%2FLatestProducts%2Fltst-product-img-6.png?alt=media&token=43d2da5a-a190-4c2c-a948-d07bdf5b5120',
                        uniqueID: uuid4(),
                    }
                ]
            }
        ]
    })
})