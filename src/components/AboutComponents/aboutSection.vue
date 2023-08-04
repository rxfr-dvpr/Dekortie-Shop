<template>
    <section class="about__section">
        <div class="container">
            <div class="row">
                <div class="about__img-box">
                    <img :src="aboutImg" alt="" class="about-img">
                </div>

                <div class="about__descr">
                    <h2 class="about__descr-title">{{ store.title }}</h2>
                    <p class="about__descr-txt">{{ store.txt }}</p>
                    <router-link to="/contact" class="contact-btn pink-btn">contact us</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import aboutImg from "@/assets/images/aboutView/aboutSection/about-img.png";
import { aboutSectionStore } from "@/stores/AboutStores/aboutSectionStore.js";
export default {
    name: 'About Section',
    data() {
        return {
            aboutImg,
            store: aboutSectionStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;
    
    .row {
        justify-content: space-between;
        align-items: center;
        row-gap: 40px;
    }

    .about__img-box {
        max-width: 550px;
        width: 100%;
        position: relative;

        .about-img {
            width: 100%;
            display: block;
            border-radius: 6px;
        }

        &::before {
            content: '';
            width: 100%;
            min-height: 100%;
            background: var(--off-ny-blue);
            display: block;
            position: absolute;
            top: 3%;
            left: -3%;
            border-radius: 6px;
            z-index: -1;
            transition: .4s;
        }
    }

    .about__descr {
        max-width: 520px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 15px;

        &-title {
            color: var(--off-ny-blue);
            text-transform: capitalize;
            font-size: 36px;
        }

        &-txt {
            font-size: 15px;
            color: var(--txt-purple);
            margin-bottom: 30px;
            line-height: 160%;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

</style>