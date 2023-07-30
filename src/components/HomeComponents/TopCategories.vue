<template>

  <section class="categories__section">
    <div class="container">
        <div class="row">
            <h2 class="categories-title all-title">{{ store.title }}</h2>

            <div class="categories__products">
                <div class="categories__products-item" v-for="(item, idx) in store.roundCards" :key="idx" :class="moving ? 'moving' : ''">
                    <div class="item__img-box">
                        <img :src="images[idx]" alt="" class="item-img">
                    </div>

                    <p class="item-name">{{ item.name }}</p>
                    <p class="item-price">${{ item.price }}.00</p>
                </div>
            </div>
        </div>
    </div>
  </section>

</template>

<script>
import { categoriesStore } from "@/stores/HomeStores/categoriesStore.js";
import itemImg1 from "@/assets/images/homeView/topCategories/item-1.png";
import itemImg2 from "@/assets/images/homeView/topCategories/item-2.png";
import itemImg3 from "@/assets/images/homeView/topCategories/item-3.png";
import itemImg4 from "@/assets/images/homeView/topCategories/item-4.png";

export default {
    name: 'Top Categories',
    data() {
        return {
            store: categoriesStore(),
            images: [itemImg1, itemImg2, itemImg3, itemImg4],
            moving: false
        }
    },
    mounted() {
        let movingAnim = () => { 
            this.moving = true

            setTimeout(() => {
                this.moving = false
            }, 1000);
        }

        setInterval(() => {
            movingAnim()        
        }, 2000);
    }
}

</script>

<style lang="scss" scoped>

.categories__section {
    width: 100%;
    padding: 30px 0 70px;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 55px;
    }

    .categories__products {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 40px;

        &-item {
            max-width: 270px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 15px;

            .item__img-box {
                width: 100%;
                background: #F6F7FB;
                border-radius: 50%;
                min-height: 270px;
                display: grid;
                place-items: center;
                position: relative;
                box-shadow: 0px 8px 40px rgba(49, 32, 138, .1);

                .item-img {
                    max-width: max-content;
                    width: 100%;
                    object-fit: contain;
                }

                &::before {
                    content: '';
                    width: 100%;
                    min-height: 100%;
                    display: block;
                    background: var(--main-purple);
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 50%;
                    z-index: -1;
                    transform: translate(-10px, 8px);
                    transition: .6s;
                }
            }

            .item-name {
                margin-top: 10px;
                font-size: 20px;
                text-transform: capitalize;
                color: var(--ny-blue);
                font-weight: 500;
            }

            .item-price {
                font-size: 15px;
                font-weight: 500;
                color: var(--ny-blue);
            }

            &.moving {
                .item__img-box::before {
                    transform: translate(10px, 8px);
                }
            }
        }
    }
}

</style>