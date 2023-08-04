import { defineStore } from "pinia";

export const accountFormStore = defineStore('Account Form Store', {
    state: () => ({
        form: {
            title: 'login',
            txt: 'please login using account detail bellow.',
            emailInp: {
                value: '',
                placeHolder: 'email address'
            },
            passwordInp: {
                value: '',
                placeHolder: 'password'
            },
            btnValue: 'sign in'
        }
    })
})

