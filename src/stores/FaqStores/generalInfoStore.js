import { defineStore } from  "pinia";

export const generalInfoStore = defineStore('General Info Store', {
    state: () => ({
        title: 'generel information',
        questionAnswers: [
            {
                question: "what is Dekortie?",
                answer: "dekortie is an online furniture shop offering stylish and high-quality furniture for your home."
            },
            {
                question: "how do I place an order?",
                answer: "browse our furniture collection, add desired items to your cart, and proceed to checkout."
            },
            {
                question: "what payment methods do you accept?",
                answer: "we accept major credit/debit cards, paypal, and bank transfers."
            },
            {
                question: "what is your return/exchange policy?",
                answer: "contact us within 3 days of receiving your order for assistance with returns or exchanges."
            }
        ],
        faqForm: {
            title: 'ask a question',
            name: '',
            email: '',
            msg: '',
        }
    })
})

