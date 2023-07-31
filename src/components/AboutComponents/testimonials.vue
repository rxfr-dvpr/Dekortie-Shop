<template>
  <section class="testimonials__section">
    <div class="container">
        <div class="row">
            <h2 class="testimonial-title all-title">{{ store.title }}</h2>

            <div class="authors-images">
                <img :src="img" alt="" class="author-img" v-for="(img, id) in images" :key="id">
            </div>

            <swiper :pagination="{clickable: true}" :modules="modules" class="testi-swiper" slidesPerView="1">
                <swiper-slide class="testi-swiper-slide" v-for="(item, idx) in store.commentList" :key="idx">
                    <p class="author-name">{{ item.name }}</p>
                    <p class="author-job">{{ item.job }}</p>
                    <p class="author-comment">{{ item.comment }}</p>
                </swiper-slide>
            </swiper>
        </div>
    </div>
  </section>
</template>

<script>
import { testimonialsStore } from "@/stores/AboutStores/testimonialsStore.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination, A11y } from 'swiper/modules';
import author1 from "@/assets/images/aboutView/testimonials/author-1.png";
import author2 from "@/assets/images/aboutView/testimonials/author-2.png";
import author3 from "@/assets/images/aboutView/testimonials/author-3.png";

export default {
    name: 'Testimonials',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store: testimonialsStore(),
            modules: [Pagination, A11y],
            images: [author1, author2, author3]
        }
    }
}

</script>

<style lang="scss" scoped>

.testimonials__section {
    width: 100%;
    padding-top: 25px;
    
    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 25px;
    }

    .authors-images {
        max-width: max-content;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        .author-img {
            max-width: 55px;
            width: 100%;
            max-height: 55px;
            height: 100%;
            object-fit: contain;
            border-radius: 5px;

            &:nth-child(2) {
                margin-bottom: 15px;
            }
        }
    }

    .testi-swiper {
        width: 100%;
        padding-bottom: 70px;

        &-slide {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 5px;

            .author {
                &-name {
                    font-size: 28px;
                    font-weight: 700;
                    color: var(--dark-color);
                    text-transform: capitalize;
                }

                &-job {
                    font-size: 14px;
                    color: var(--txt-purple);
                }

                &-comment {
                    max-width: 650px;
                    width: 100%;
                    color: var(--txt-purple);
                    font-size: 16px;
                    margin-top: 20px;
                    
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

</style>