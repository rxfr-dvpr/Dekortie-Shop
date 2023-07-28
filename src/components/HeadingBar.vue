<template>
    <div class="heading__bar" v-if="wWidth > 886">
        <div class="container">
            <div class="row">
                <div class="bar__contacts">
                    <a :href="item.url" v-for="(item, id) in store.contacts" :key="id" class="bar__contacts-item"><span v-html="item.icon" class="link-icon"></span> {{ item.name }}</a>
                </div>

                <div class="user__links">
                    <router-link :to="link.url" v-for="(link, idx) in store.userLinks" :key="idx" class="user__links-item">
                        {{ link.name }}
                        <span class="icon" v-html="link.icon"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { headingbarStore } from "@/stores/headingBarStore";
export default {
    name: 'Heading Bar',
    data() {
        return {
            store: headingbarStore(),
            wWidth: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.wWidth = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.heading__bar {
    width: 100%;
    background: var(--main-purple);
    padding: 10px 0;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .bar__contacts {
        max-width: max-content;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 35px;

        &-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--main-white);
            font-size: 16px;
            transition: .4s;

            &:hover {
                color: var(--main-pink);
            }

        }
    }

    .user__links {
        max-width: max-content;
        width: 100%;
        display: flex;
        gap: 20px;
        align-items: center;

        &-item {
            text-transform: capitalize;
            color: var(--main-white);
            display: flex;
            align-items: center;
            gap: 5px;
            transition: .4s;

            &:hover {
                color: var(--main-pink);
            }
        }
    }
}

</style>