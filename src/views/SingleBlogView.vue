<template>
  <UniqueHeader :title="store.title" :pagesList="store.pagesList" />

  <section class="single-blog__section">
    <div class="container">
        <div class="row">
          <div class="single-blog">
            <img :src="store.blogData.img" alt="no img" class="single-blog-img" />

            <div class="single-blog-info">
              <p class="single-blog-author">
                <i class="fas fa-pen-nib"></i>
                <span>{{ store.blogData.author }}</span>
              </p>

              <p class="single-blog-date">
                <i class="fal fa-calendar-alt"></i>
                <span>{{ store.blogData.date }}</span>
              </p>
            </div>

            <h4 class="single-blog-title">
              {{ store.blogData.title || "No title" }}
            </h4>

            <p class="single-blog-txt">{{ store.blogData.txt || loremTxt }}</p>

            <p class="single-blog-more-txt">
              {{ store.blogData.body1 || loremTxt }}
            </p>

            <p class="single-blog-more-txt">
              {{ store.blogData.body2 || loremTxt }}
            </p>

            <p class="single-blog-more-txt">
              {{ store.blogData.body3 || loremTxt }}
            </p>

            <p class="single-blog-more-txt">
              {{ store.blogData.conclusion || loremTxt }}
            </p>

            <p class="single-blog-more-txt">
              {{ store.blogData.warning || loremTxt }}
            </p>

          </div>

          <form action="" class="blog-comment__form" @submit.prevent>
            <input type="text" class="name-inp" v-model="store.commentForm.email" placeholder="your name">
            <input type="email" class="email-inp" v-model="store.commentForm.name" placeholder="write your email*">
            <textarea cols="30" rows="10" class="msg-inp" v-model="store.commentForm.msg" placeholder="write your comment"></textarea>
            <button class="pink-btn submit-btn">continue shipping</button>
          </form>
        </div>
    </div>
  </section>

</template>

<script>
import UniqueHeader from "@/components/UniqueHeader.vue";
import { singleBlogStore } from "@/stores/BlogStores/singleBlogStore.js";

export default {
  name: "Single Blog",
  components: {
    UniqueHeader,
  },
  data() {
    return {
      store: singleBlogStore(),
      loremTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae eveniet culpa assumenda autem eligendi ab dignissimos quo! Ab hic adipisci, veritatis deleniti esse tempore.",
    };
  }
};
</script>

<style lang="scss" scoped>

.single-blog__section {
  width: 100%;
  padding: 115px 0;

  .row {
    flex-direction: column;
    row-gap: 135px;
  }

  .single-blog {
    max-width: 870px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;

    &-img {
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }

    &-info {
      max-width: max-content;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 25px;
    }

    &-author,
    &-date {
      font-size: 14px;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      gap: 10px;

      i {
        color: var(--main-yellow);
      }

      span {
        color: var(--ny-blue);
        padding: 5px 25px;
        background: #ffe7f9;
        border-radius: 10px;
      }

      font-weight: 700;
    }

    &-title {
      font-size: 30px;
      text-transform: capitalize;
      color: var(--ny-blue);
    }

    &-txt, &-more-txt {
      font-size: 15px;
      color: var(--txt-purple);
      font-weight: 400;
      line-height: 160%;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .blog-comment__form {
    max-width: 870px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 35px;
    row-gap: 45px;

    input {
        max-width: 47.9%;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #CDCEDC;
        background: #FFF;
        outline: none;
        padding: 10px 8px;
        color: var(--txt-purple);
        font-size: 15px;

        &::placeholder {
            color: var(--txt-purple);
            font-size: 15px;
            text-transform: capitalize;
        }
    }

    textarea {
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
            color: var(--txt-purple);
            font-size: 15px;
            text-transform: capitalize;
        }
    }

    .submit-btn {
        max-width: 100%;
    }
  }
}
</style>
