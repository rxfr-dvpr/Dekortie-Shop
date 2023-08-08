<template>
  <div class="shop__list" :class="{'defaultView': gridType}">
    <div class="shop__list-item" v-for="(item, idx) in list" :key="idx" @click="this.$router.push(`/shop`)">
      <div class="item-img-box">
        <img :src="item.img" :alt="item.name || 'furniture'" class="item-img" loading="lazy">
      </div>

      <div class="item__descr">
        <p class="item__descr-name">{{ item.name || 'no name' }}</p>

        <div class="item-color-options">
          <span class="color-option yellow"></span>
          <span class="color-option pink"></span>
          <span class="color-option purple"></span>
        </div>

        <span class="item__descr-price">
          <span class="new-price">${{ item.newPrice || '00' }}.00</span> <span class="old-price">${{ item.oldPrice || '00' }}.00</span>
        </span>

        <p class="item__descr-txt" v-if="!gridType">{{ item.txt || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia itaque doloremque maiores, laudantium neque' }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import { shopListStore } from "@/stores/ShopStores/shopListStore.js";

export default {
  name: 'Shop List',
  props: {
    gridType: {
      type: Boolean, 
      default: true,
      required: true
    },
    list: {
      type: Array,
      default: [],
      required: true
    }
  },
  data() {
    return {
      store: shopListStore(),
    }
  }
}

</script>

<style lang="scss" scoped>

.shop__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;

  &-item {
    max-width: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #f6f7fb;
    padding-top: 50px;
    row-gap: 30px;
    box-shadow: 0px 0px 25px 10px #F8F8FB;
    cursor: pointer;

    .item-img-box {
      max-width: 200px;
      max-height: 200px;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }

    .item-img {
      object-fit: contain;
    }

    .item-color-options {
      display: flex;
      align-items: center;
      gap: 5px;

      .color-option {
        width: 15px;
        min-width: 15px;
        height: 15px;
        min-height: 15px;
        background: var(--main-blue);
        border-radius: 50%;

        &.yellow {
          background: var(--main-yellow);
        }

        &.pink {
          background: var(--main-pink);
        }

        &.purple {
          background: var(--main-purple);
        }
      }
    }

    .item__descr {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: var(--main-white);
      padding: 15px 5px;
      row-gap: 8px;

      &-name {
        font-size: 18px;
        color: var(--main-blue);
        font-weight: 700;
        text-transform: capitalize;
      }

      &-price {
        font-size: 14px;
        font-weight: 500;
        
        .new-price {
          color: var(--main-blue);
        }

        .old-price {
          color: var(--main-pink);
          text-decoration: line-through;
        }
      }

      &-txt {
        font-size: 15px;
        color: var(--txt-purple);
        line-height: 175%;
      }
    }

    &:hover {
      background: #EBF4F3;
    }
  }

  &:not(.defaultView) {
    .shop__list {
      &-item {
        max-width: 100%;
        background: var(--main-white);
        padding: 18px 20px;
        flex-direction: row;
        justify-content: flex-start;
        gap: 35px;
        border-radius: 10px;
        

        .item-img-box {
          max-width: 200px;
        }

        .item__descr {
          max-width: 600px;
          align-items: flex-start;
          text-align: start;
          background: transparent;
        }

        &:hover {
          background: #EBF4F3;
        }
      }
    }
  }
}

</style>