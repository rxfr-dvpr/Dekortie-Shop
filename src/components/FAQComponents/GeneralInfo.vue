<template>

  <section class="faq__section">
    <div class="container">
        <div class="row">

            <div class="faq__content">
                <h2 class="faq__content-title all-title">{{ store.title }}</h2>

                <div class="faq__list">
                    <div class="faq__list-item" v-for="(item, idx) in store.questionAnswers" :key="idx">
                        <p class="faq-question">{{ item.question }}</p>
                        <p class="faq-answer">{{ item.answer }}</p>
                    </div>
                </div>
            </div>

            <form action="" class="faq__form" @submit.prevent>
                <h3 class="faq__form-title">{{ store.faqForm.title }}</h3>
                <input type="text" class="faq__form-name" v-model="store.faqForm.name" required placeholder="your name">
                <input type="email" class="faq__form-email" v-model="store.faqForm.email" required placeholder="your email">
                <textarea class="faq__form-msg" v-model="store.faqForm.msg" placeholder="type your message" rows="10"></textarea>

                <button class="send-btn pink-btn">send email</button>
            </form>

        </div>
    </div>
  </section>

</template>

<script>
import { generalInfoStore } from "@/stores/FaqStores/generalInfoStore.js";

export default {
    name: 'General Info',
    data() {
        return {
            store: generalInfoStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.faq__section {
    width: 100%;
    padding: 100px 0;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    .faq__content {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 65px;

        .faq__list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 55px;

            &-item {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 15px;

                .faq-question {
                    font-weight: 700;
                    color: var(--dark-blue);
                    font-size: 16px;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                .faq-answer {
                    font-size: 16px;
                    color: var(--txt-purple);

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
    
    .faq__form {
        max-width: 565px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 35px;
        background: #f8f8fd;
        padding: 65px 45px;

        &-title {
            font-size: 24px;
            color: var(--dark-blue);
            text-transform: capitalize;
            margin-bottom: 75px;
        }

        input, textarea {
            max-width: 450px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #CDCEDC;
            background: #FFF;
            outline: none;
            padding: 10px 8px;
            resize: vertical;
            color: var(--txt-purple);
            font-size: 15px;
            &::placeholder {
                font-size: 15px;
                text-transform: capitalize;
                color: var(--txt-purple);
            }
        }
    }
}

@media (max-width: 1145px) {
    .faq__content {
        row-gap: 45px !important;

        .faq__list {
            row-gap: 35px !important;
        }
    }

    .faq__form {
        max-width: 500px !important;
        padding: 45px !important;

        &-title {
            margin-bottom: 25px !important;
        }
    }
}

@media (max-width: 1080px) {
    .faq__content {
        max-width: 450px !important;
    }
    .faq__form {
        max-width: 450px !important;
        padding: 30px !important;
        row-gap: 25px !important; 
    }
}

@media (max-width: 992px) {
    .faq__section {
        padding: 70px 0;
    }

    .row {
        flex-direction: column;
        justify-content: flex-start;
    }
}

</style>