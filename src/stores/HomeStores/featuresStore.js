import { defineStore } from "pinia";
 
export const featuresStore = defineStore('Features Store', {
    state: () => ({
        title: 'unique features of leatest & trending poducts',
        featuresList: [
            {
                txt: 'all frames constructed with hardwood solids and laminates'
            },
            {
                txt: 'reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails'
            },
            {
                txt: 'arms, backs and seats are structurally reinforced'
            }
        ],
        name: 'B&B italian sofa',
        price: 32
    })
})