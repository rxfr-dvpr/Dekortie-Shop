<template>
  <UniqueHeader :title="store.header.title" :pagesList="store.header.pagesList"/>

  <section class="form__section">
    <div class="container">
        <div class="row">

            <form action="" class="account-form" @submit.prevent>
                <p class="account-form-title">{{ fStore.form.title }}</p>
                <p class="account-form-txt">{{ fStore.form.txt }}</p>

                <input type="email" class="email-inp" v-model="fStore.form.emailInp.value" :placeholder="fStore.form.emailInp.placeHolder" required>
                <input type="password" class="password-inp" v-model="fStore.form.passwordInp.value" :placeholder="fStore.form.passwordInp.placeHolder" required>

                <span class="forget-btn">forgot your password?</span>
                <button class="submit-btn pink-btn">{{ fStore.form.btnValue }}</button>

                <span class="create-acc-btn">don’t have an account? create account</span>
            </form>

        </div>
    </div>
  </section>
</template>

<script>
import UniqueHeader from '@/components/UniqueHeader.vue'
import { accountStore } from "@/stores/accountStore.js";
import { accountFormStore } from "@/stores/AccountStores/accountFormStore.js";

export default {
    name: 'My Account',
    components: {
        UniqueHeader
    },
    data() {
        return {
            store: accountStore(),
            fStore: accountFormStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.form__section {
    width: 100%;
    padding: 120px 0;
    
    .row {
        justify-content: center;
        align-items: center;
    }

    .account-form {
        max-width: 545px;
        width: 100%;
        padding: 50px 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 25px;
        background: #FFF;
        box-shadow: 0px 0px 25px 10px #F8F8FB;

        &-title {
            font-size: 32px;
            color: var(--dark-color);
            text-transform: capitalize;
            font-weight: 700;
        }

        &-txt {
            font-size: 17px;
            color: var(--txt-purple);

            &::first-letter {
                text-transform: uppercase;
            }
        }

        input {
            width: 100%;
            padding: 17px 15px;
            border: var(--txt-purple) 1px solid;
            outline: none;
            -webkit-border-radius: 10px;
            border-radius: 10px;
            font-size: 15px;
            color: var(--txt-purple);
            
            &::placeholder {
                color: var(--txt-purple);
                text-transform: capitalize;
                font-size: 15px;
            }
        }

        .submit-btn {
            max-width: 100%;
        }

        .forget-btn, .create-acc-btn {
            width: 100%;
            text-align: start;
            font-size: 15px;
            text-transform: capitalize;
            color: var(--txt-purple);
            cursor: pointer;
        }
    }
}

</style>