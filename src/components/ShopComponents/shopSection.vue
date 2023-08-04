<template>
  <section class="shop__section">
    <div class="container">
        <div class="row">

            <div class="shop__top-bar">
                <p class="shop__top-title"> {{ store.topBar.title }} <span class="shop__top-subtitle">{{ store.topBar.subtitle }}</span></p>

                <div class="shop__top-filters">
                    <div class="p-p-filter all-filter">
                        <span>per page:</span>

                        <input type="text" maxlength="2">
                    </div>

                    <div class="sort-filter all-filter">
                        <span>sort by:</span>

                        <select class="sort-type" @change="onChange($event)">
                            <option :value="item.name" v-for="(item, idx) in store.topBar.sortFilterOptions" :key="idx" :data-value="item.value">{{ item.name }}</option>
                        </select>
                    </div>
                    
                    <div class="view-filter all-filter">
                        <span>view:</span>
                        
                        <button class="view-change-btn" @click="gridType = !gridType"><i class="fas fa-th-large"></i> <i class="fas fa-list"></i></button>
                    </div>
                </div>
            </div>

            <ShopList :gridType="gridType" :list="chList"/>
        </div>
    </div>
  </section>
</template>

<script>
import { shopSectionStore } from "@/stores/ShopStores/shopSectionStore.js";
import ShopList from './shopList.vue';
import { shopListStore } from "@/stores/ShopStores/shopListStore.js";

export default {
    name: 'Shop Section',
    components: {
        ShopList
    },
    data() {
        return {
            store: shopSectionStore(),
            gridType: true,
            list: shopListStore().list,
            chList: shopListStore().list,
        }
    },
    methods: {
        onChange(event) {
            let aim = event.target.value;
            let changedArr = [...this.list]

            if (aim == 'recommended') {
                this.chList = this.list
            } else if (aim == 'highest price') {
                this.chList = changedArr.sort((a, b) => b.newPrice - a.newPrice);
            } else if (aim == 'lowest price') {
                this.chList = changedArr.sort((a, b) => a.newPrice - b.newPrice);
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.shop__section {
    width: 100%;
    padding: 125px 0;

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 145px;
    }

    .shop__top-bar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .shop__top {

            &-title {
                font-size: 22px;
                color: var(--off-blue);
                font-weight: 700;
                text-transform: capitalize;
                display: flex;
                flex-direction: column;
                row-gap: 3px;

                span {
                    font-size: 12px;
                    font-weight: 400;
                    color: var(--txt-purple);
                }
            }

            &-filters {
                max-width: max-content;
                width: 100%;
                gap: 25px;
                display: flex;
                align-items: center;

                .all-filter {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    span {
                        font-size: 15px;
                        color: var(--main-blue);
                        text-transform: capitalize;
                    }
                    
                    input {
                        max-width: 55px;
                        width: 100%;
                        outline: none;
                        border: solid 1px var(--txt-purple);
                        font-size: 15px;
                        color: var(--txt-purple);
                        padding: 5px;
                    }

                    select {
                        outline: none;
                        border: solid 1px var(--txt-purple);
                        font-size: 15px;
                        color: var(--txt-purple);
                        padding: 5px;
                        text-transform: capitalize;

                        option {
                            text-transform: capitalize;
                            font-size: 14px;
                            color: var(--txt-purple);
                            padding: 5px;
                        }
                    }

                    button {
                        border: 0;
                        background: transparent;
                        display: flex;
                        gap: 5px;
                        align-items: center;
                    }
                }
            }
        }
    }
}

</style>