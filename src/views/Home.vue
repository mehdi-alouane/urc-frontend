<template>
  <section class="section">
    <navbar />

    <div class="section" />
    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="nearbyShop in nearbyShops"
          :key="nearbyShop.id"
          class="column is-3"
        >
          <shop-card
            is-in-nearby-shops="true"
            :shop-name="nearbyShop.name"
            :shop-location="nearbyShop.city"
            :shop-picture="nearbyShop.picture"
            :shop-id="nearbyShop._id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import shopCard from '@/components/shopCard'
import navbar from '@/components/navbar'

export default {
  name: 'Home',
  components: {
    shopCard,
    navbar
  },
  data: () => ({
    coordinates: null,
    nearbyShops: [],
    page: 1
  }),
  created () {
    this.getNearbyShops()
    this.$store.dispatch('setUser')
  },
  methods: {
    async getNearbyShops () {
      const coordinates = await this.$getLocation()
      this.coordinates = [coordinates.lat, coordinates.lng].join(',')

      const api = `/shops/nearby/${this.coordinates}?page=${this.page}`
      const { data } = await this.axios.get(api)

      // console.log(data)
      this.nearbyShops = data.nearByShops
    }
  }
}
</script>
