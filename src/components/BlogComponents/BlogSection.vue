<template>
  <section class="blog__section">
    <div class="container">
        <div class="row">
            <div class="blog__list">
                <div class="blog__list-item" v-for="(blog, idx) in store.blogs" :key="idx" @click="pushData(idx)">
                    <img :src="blog.img" alt="" class="blog-img">

                    <div class="blog-info">
                        <p class="blog-author"><i class="fas fa-pen-nib"></i> <span>{{ blog.author }}</span></p>
                        <p class="blog-date"><i class="fal fa-calendar-alt"></i> <span>{{ blog.date }}</span></p>
                    </div>

                    <h4 class="blog-title">{{ blog.title }}</h4>
                    <p class="blog-txt">{{ blog.txt || loremTxt }} </p>

                    <span class="read-link">read more</span>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { blogSectionStore } from "@/stores/BlogStores/blogSectionStore.js";
import { singleBlogStore } from "@/stores/BlogStores/singleBlogStore.js";
export default {
    name: 'Blog Section',
    data() {
        return {
            store: blogSectionStore(),
            loremTxt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae eveniet culpa assumenda autem eligendi ab dignissimos quo! Ab hic adipisci, veritatis deleniti esse tempore.',
            sBStore: singleBlogStore()
        }
    },
    methods: {
        pushData(idx) {
            this.sBStore.blogData = {}
            let newData = {...this.store.blogs[idx]}
            this.sBStore.blogData = newData

            this.$router.getRoutes().forEach(route => {
                route.name == "single blog" ? route.meta.hasData = true : ""
            });

            this.sBStore.commentForm = {email: '', name: '', msg: ''}

            this.$router.push(`/blog/${idx + 1}`)
        }
    }
}

</script>

<style lang="scss" scoped>

.blog__section {
    width: 100%;
    padding: 125px 0;

    .row {
        justify-content: space-between;
    }

    .blog__list {
        max-width: 870px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 40px;

        &-item {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 30px;
            cursor: pointer;

            .blog {
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

                &-author, &-date {
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
                        background: #FFE7F9;
                        border-radius: 10px;
                    }

                    font-weight: 700;
                }

                &-title {
                    font-size: calc(20px + 10 * (100vw / 1920));
                    text-transform: capitalize;
                    color: var(--ny-blue);
                }

                &-txt {
                    font-size: 15px;
                    color: var(--txt-purple);
                    font-weight: 400;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
}

.read-link {
    font-size: 18px;
    font-weight: 600;
    color: var(--ny-blue);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 5px;

    &::after {
        content: '';
        width: 6px;
        height: 6px;
        background: var(--main-pink);
        border-radius: 50%;
    }
}

@media (max-width: 768px) {
    .blog {
        &__section {
            padding: 70px 0;
        }
        
        &-title {
            font-size: calc(20px + (10 + 10 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (max-width: 486px) {
    .blog {
        &__list {
            &-item {
                align-items: center !important;
                text-align: center;
            }
        }

        &-info {
            max-width: 100% !important;
            flex-direction: column;
            align-items: center;
            row-gap: 15px !important;
        }
    }
}

</style>