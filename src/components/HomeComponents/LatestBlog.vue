<template>
  <section class="latest-blog__section">
    <div class="container">
      <div class="row">
        <h2 class="latest-blog-title all-title">{{ store.title }}</h2>

        <div class="blog__cards">
          <div class="blog__cards-item" v-for="(item, idx) in store.cards" :key="idx">

            <img :src="cardImages[idx]" alt="" class="blog__card-img">

            <div class="blog__card-descr">
              <div class="blog__card-descr-info">
                <p class="blog-author"><span class="blog-date-icon"><i class="fas fa-pen-nib"></i></span> {{ item.author }}</p>
                <p class="blog-date"><span class="blog-date-icon"><i class="fal fa-calendar-alt"></i></span> {{ item.date }}</p>
              </div>

              <p class="blog__card-descr-title">{{ item.title }}</p>
              <p class="blog__card-descr-txt">{{ item.txt }}</p>

              <router-link to="/blog" class="read-link">read more</router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ltstBlogStore } from "@/stores/HomeStores/latestBlogStore.js";
import blogImg1 from "@/assets/images/homeView/latestBlog/blog-img-1.png";
import blogImg2 from "@/assets/images/homeView/latestBlog/blog-img-2.png";
import blogImg3 from "@/assets/images/homeView/latestBlog/blog-img-3.png";

export default {
  name: 'Latest Blog',
  data() {
    return {
      store: ltstBlogStore(),
      cardImages: [blogImg1, blogImg2, blogImg3]
    }
  }
}

</script>

<style lang="scss" scoped>

.latest-blog__section {
  width: 100%;
  
  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 80px;
  }

  .blog__cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 35px;

    &-item {
      max-width: 370px;
      width: 100%;
      display: flex;
      flex-direction: column;
      background: var(--main-white);
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 10px 15px rgba($color: #555555, $alpha: .1);

      .blog__card {

        &-img {
          width: 100%;
          max-height: 255px;
          height: 100%;
        }

        &-descr {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: start;
          padding: 20px 15px 50px;
          row-gap: 20px;

          &-info {
            max-width: max-content;
            width: 100%;
            display: flex;
            align-items: center;
            column-gap: 30px;
            row-gap: 20px;

            .blog-author, .blog-date {
              font-size: 14px;
              color: var(--ny-blue);
              text-transform: capitalize;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 5px;

              &.blog-author {
                span i {
                  color: var(--main-pink);
                }
              }

              &.blog-date {
                span i {
                  color: var(--main-yellow);
                }
              }
            }
          }

          &-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--main-blue);
            text-transform: capitalize;
          }

          &-txt {
            font-size: 15px;
            color: var(--txt-purple);

            &::first-letter {
              text-transform: uppercase;
            }
          }

          .read-link {
            font-size: 15px;
            color: var(--main-blue);
            text-transform: capitalize;
            border-bottom: 1px solid var(--main-blue);

            &:hover {
              color: var(--main-pink);
              border-bottom-color: var(--main-pink);
            }
          }

        }
      }
    }
  }
}

</style>