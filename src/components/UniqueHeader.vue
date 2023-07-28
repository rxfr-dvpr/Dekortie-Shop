<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header__title">{{ title }}</h1>
            <p class="pages__list-txt">
                <router-link :to="`/`" v-for="(page, idx) in pagesList" 
                :key="idx" :class="`${pagesList.length - 1 == idx ? 'page-name last-one' : 'page-name'}`" >{{ page }} {{ pagesList.length - 1 == idx ? '' : '. ' }}</router-link>
            </p>
        </div>
    </div>
  </header>
</template>

<script>

export default {
    name: 'Unique Header',
    props: {
        title: {
            type: String,
            required: true,
            default: 'header'
        },
        pagesList: {
            type: Array,
            required: true,
            default: ['home', 'pages', 'default']
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 95px 0;
    background: var(--header-bg);

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    }

    &__title {
        font-size: calc(24px + 12 * (100vw / 1920));
        color: var(--primary-color);
        text-transform: capitalize;
    }

    .pages__list-txt {
        text-transform: capitalize;
        font-size: 16px;
                
        .page-name {
            font-weight: 600;
            color: var(--dark-color);

            &.last-one {
                color: var(--main-pink);
            }
        }
    }
}

@media (max-width: 992px) {
    .header {
        .row {
            align-items: center;
            text-align: center;
        }

        &__title {
            font-size: calc(24px + (12 + 12 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

</style>