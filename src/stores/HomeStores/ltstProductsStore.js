import { defineStore } from "pinia";

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
                        newPrice: 42,
                        oldPrice: 65
                    },
                    {
                        name: 'handy deluxe set',
                        newPrice: 39,
                        oldPrice: 60
                    },
                    {
                        name: 'comfortable blanket',
                        newPrice: 45,
                        oldPrice: 70
                    },
                    {
                        name: 'handy craft organizer',
                        newPrice: 38,
                        oldPrice: 55
                    },
                    {
                        name: ' handcrafted pillow',
                        newPrice: 40,
                        oldPrice: 62
                    },
                    {
                        name: 'craft diy kit',
                        newPrice: 36,
                        oldPrice: 58
                    }
                ]
            },
            {
                typeName: 'best seller',
                visible: false,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        newPrice: 42,
                        oldPrice: 65
                    },
                    {
                        name: 'handy deluxe set',
                        newPrice: 39,
                        oldPrice: 60
                    },
                    {
                        name: 'comfortable blanket',
                        newPrice: 45,
                        oldPrice: 70
                    },
                    {
                        name: 'handy craft organizer',
                        newPrice: 38,
                        oldPrice: 55
                    },
                    {
                        name: ' handcrafted pillow',
                        newPrice: 40,
                        oldPrice: 62
                    },
                    {
                        name: 'craft diy kit',
                        newPrice: 36,
                        oldPrice: 58
                    }
                ]
            },
            {
                typeName: 'featured',
                visible: false,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        newPrice: 42,
                        oldPrice: 65
                    },
                    {
                        name: 'handy deluxe set',
                        newPrice: 39,
                        oldPrice: 60
                    },
                    {
                        name: 'comfortable blanket',
                        newPrice: 45,
                        oldPrice: 70
                    },
                    {
                        name: 'handy craft organizer',
                        newPrice: 38,
                        oldPrice: 55
                    },
                    {
                        name: ' handcrafted pillow',
                        newPrice: 40,
                        oldPrice: 62
                    },
                    {
                        name: 'craft diy kit',
                        newPrice: 36,
                        oldPrice: 58
                    }
                ]
            },
            {
                typeName: 'special offer',
                visible: false,
                products: [
                    {
                        name: 'comfort cozy cushion',
                        newPrice: 42,
                        oldPrice: 65
                    },
                    {
                        name: 'handy deluxe set',
                        newPrice: 39,
                        oldPrice: 60
                    },
                    {
                        name: 'comfortable blanket',
                        newPrice: 45,
                        oldPrice: 70
                    },
                    {
                        name: 'handy craft organizer',
                        newPrice: 38,
                        oldPrice: 55
                    },
                    {
                        name: ' handcrafted pillow',
                        newPrice: 40,
                        oldPrice: 62
                    },
                    {
                        name: 'craft diy kit',
                        newPrice: 36,
                        oldPrice: 58
                    }
                ]
            }
        ]
    })
})