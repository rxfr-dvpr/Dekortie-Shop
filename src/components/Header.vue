<template>
    <header class="header">
        <div class="container">
            <div class="row">

                <div class="header__descr">
                    <p class="header__descr-subtitle">{{ store.subtitle }}</p>
                    <h1 class="header__descr-title">{{ store.title }}</h1>
                    <p class="header__descr-txt">{{ store.text }}</p>
                    <button class="shop-btn pink-btn">{{ store.btnTxt }}</button>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 40px 0;
    background: var(--header-bg);

    .row {
        justify-content: space-between;
    }

    &__descr {
        max-width: 645px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        &-subtitle {
            text-transform: capitalize;
            color: var(--main-pink);
            font-weight: 700;
        }

        &-title {
            color: var(--dark-color);
            text-transform: capitalize;
            font-size: 53px;
        }

        &-txt {
            font-size: 16px;
            color: var(--txt-purple);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

</style>