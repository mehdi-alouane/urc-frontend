<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Preferred Shops
      </h1>

      <div class="columns is-multiline">
        <div
          v-for="shop in $store.state.preferredShops"
          :key="shop.key"
          class="column is-3"
        >
          <shop-card
            :shop-name="shop.name"
            :shop-location="shop.city"
            :shop-picture="shop.picture"
            :shop-id="shop._id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import shopCard from '@/components/shopCard'

export default {
  name: 'PreferredShops',
  components: {
    shopCard
  },
  created () {
    this.getPreferredShops()
  },
  methods: {
    async getPreferredShops () {
      const userId = this.$store.state.user._id
      this.$store.dispatch('getPreferredShops', userId)
    }
  }
}
</script>
