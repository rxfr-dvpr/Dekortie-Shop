<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-content">
                <router-link to="/" class="footer-logo logo-brand">{{ store.logo }}</router-link>

                <div class="footer-form">
                    <input type="email" class="footer-email-inp" 
                    v-model="store.form.emailValue" placeholder="Enter Email Address" required>
                    <button class="footer-btn pink-btn">{{ store.form.btnValue }}</button>
                </div>

                <p class="footer-content-txt">{{ store.form.locationTxt }}</p>
            </div>

            <div class="footer__links">
                <div class="footer__links-item" v-for="(item, idx) in store.footerLinks" :key="idx">
                    <p class="footer__links-item-title">{{ item.title }}</p>

                    <router-link :to="link.url" class="footer__links-item-link" v-for="(link, id) in item.list" :key="id">{{ link.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
  </footer>

  <div class="copyright__content">
    <div class="container">
        <div class="row">
            <p class="copyright-txt">©RXFR - all rights reserved</p>

            <div class="social__links">
                <a v-for="(link, idd) in store.socialLinks" :key="idd" target="_blank" :href="link.url" class="social__links-item" v-html="link.icon"></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { footerStore } from "@/stores/footerStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    background: var(--footer-bg);
    padding: 95px 0;

    .row {
        justify-content: space-between;
    }

    &-content {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 30px;

        .footer-logo {
            color: var(--dark-color);
        }

        .footer-form {
            max-width: max-content;
            width: 100%;
            display: flex;
            align-items: center;

            .footer-email-inp {
                padding: 12px 20px;
                background: var(--main-white);
                border: 0;
                border-radius: 3px;
                color: var(--txt-purple);
                font-size: 14px;
                outline: none;

                &::placeholder {
                    color: var(--txt-purple);
                }
            }

            .footer-btn {
                padding: 10px 40px;
            }
        }

        &-txt {
            font-size: 15px;
            color: var(--txt-purple);
            text-transform: capitalize;
        }
    }

    &__links {
        max-width: 720px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-item {
            max-width: 190px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;

            &-title {
                font-size: 22px;
                font-weight: 700;
                color: var(--dark-color);
                text-transform: capitalize;
                margin-bottom: 20px;
            }

            &-link {
                font-size: 15px;
                color: var(--txt-purple);
                text-transform: capitalize;

                &:hover {
                    color: var(--main-pink);
                }
            }
        }
    }
}

.copyright__content {
    width: 100%;
    background: var(--light-bg);
    padding: 15px 0;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .copyright-txt {
        font-size: 15px;
        color: var(--txt-purple);
        text-transform: capitalize;
    }

    .social__links {
        max-width: max-content;
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;

        &-item {
            border-radius: 50%;
            background: var(--ny-blue);
            height: 30px;
            min-width: 30px;
            max-width: 30px;
            width: 100%;
            display: grid;
            place-items: center;
            font-size: 14px;
        }
    }
}

</style>