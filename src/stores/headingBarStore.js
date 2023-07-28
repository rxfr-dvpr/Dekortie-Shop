import { defineStore } from "pinia";

export const headingbarStore = defineStore('Heading Bar Store', {
  state: () => ({
    contacts: [
      {
        icon: '<i class="fal fa-envelope"></i>',
        url: 'mailto:saidaliyev.avazbek14@gmail.com',
        name: 'saidaliyev.avazbek14@gmail.com'
      },
      {
        icon: '<i class="fal fa-phone-alt"></i>',
        url: 'tel:+998998173066',
        name: '+998 (99) 817-30-66'
      }
    ],
    userLinks: [
      {
        name: "login",
        url: '/login',
        icon: '<i class="fal fa-user"></i>'
      },
      {
        name: "wishlist",
        url: '/wishlist',
        icon: '<i class="fal fa-heart"></i>'
      },
      {
        name: "",
        url: '/cart',
        icon: '<i class="fal fa-shopping-cart"></i>'
      }
    ]
  })
})