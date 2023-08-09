<template>
  <nav class="nav">
    <div class="container">
      <div class="row">
        <router-link to="/" class="logo-brand">{{ store.logo }}</router-link>

        <ul class="nav__list">
          <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
            <router-link :to="link.url" class="nav__list-link">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
  name: 'Navigation',
  data() {
    return {
      store: navStore(),
      navVisible: false,
      wWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', () => this.wWidth = window.innerWidth)
  }
}

</script>

<style lang="scss" scoped>

.nav {
  width: 100%;
  height: 100%;
  background: var(--nav-bg);
  padding: 20px 0;
  box-shadow: 0 5px 15px rgba($color: #000000, $alpha: .1);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2023;

  .row {
    justify-content: space-between;
  }

  &__list {
    max-width: 300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-link {
      font-size: calc(14px + 3 * (100vw / 1920));
      text-transform: capitalize;
      font-weight: 500;
      transition: .3s;

      &:hover {
        color: var(--main-pink);
      }

      &.router-link-exact-active {
        color: var(--main-pink);
      }
    }
  }
}

@media (min-width: 1920px) {
  .nav {
    &__list {
      &-link {
        font-size: 17px !important;
      }
    }
  }
}

@media (max-width: 992px) {
  .nav {
    .row {
      flex-wrap: unset;
      gap: 15px;
    }
  
    &__list {
      &-link {
        font-size: calc(14px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920)) !important;
      }
    }
  }
}

</style>