<template>
  <section class="offer__section">
    <div class="container">
        <div class="row">
            <h2 class="offer-title all-title">{{ store.title }}</h2>

            <div class="offer__cards">
                <div class="offer__cards-item" v-for="(card, id) in store.cards" :key="id">
                    <img :src="cardImages[id]" alt="" class="offer-card-img">
                    <p class="offer-card-name">{{ card.name }}</p>
                    <p class="offer-card-txt">{{ card.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { offerStore } from "@/stores/HomeStores/offerStore.js";
import cardImg1 from "@/assets/images/homeView/offerSection/free-delivery.svg";
import cardImg2 from "@/assets/images/homeView/offerSection/cashback.svg";
import cardImg3 from "@/assets/images/homeView/offerSection/premium-quality.svg";
import cardImg4 from "@/assets/images/homeView/offerSection/24-hours-support.svg";

export default {
    name: 'Offer',
    data() {
        return {
            store: offerStore(),
            cardImages: [cardImg1, cardImg2, cardImg3, cardImg4]
        }
    }
}

</script>

<style lang="scss" scoped>

.offer__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 55px;
    }

    .offer__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 30px;

        &-item {
            max-width: 270px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 25px;
            padding: 50px 30px 45px;
            background: var(--main-white);
            box-shadow: 0 8px 10px rgba($color: #5f5f5f, $alpha: .1);

            .offer-card {

                &-img {
                    max-width: 65px;
                    width: 100%;
                    object-fit: contain;
                }

                &-name {
                    font-size: 20px;
                    color: var(--ny-blue);
                    text-transform: capitalize;
                    font-weight: 700;
                }

                &-txt {
                    font-size: 15px;
                    color: var(--txt-purple);
                    font-weight: 500;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .offer__cards {
        &-item {
            padding: 30px !important;
        }
    }
}

@media (max-width: 992px) {
    .offer__cards {
        flex-wrap: wrap;
        justify-content: center !important;
    }
}

</style>