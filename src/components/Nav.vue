<template>
  <nav class="nav">
    <div class="container">
      <div class="row">
        <router-link to="/" class="logo-brand">{{ store.logo }}</router-link>

        <div class="nav__collapse">
          <ul class="nav__list">
            <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
              <router-link :to="link.url" class="nav__list-link">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

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
      store: navStore()
    }
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

  .logo-brand {
    font-size: 34px;
    font-weight: 700;
    text-transform: capitalize;
    user-select: none;
  }

  &__collapse {
    max-width: max-content;
    width: 100%;
    display: grid;
    place-items: center;
  }

  &__list {
    max-width: max-content;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 25px;

    &-link {
      font-size: 16px;
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

</style>