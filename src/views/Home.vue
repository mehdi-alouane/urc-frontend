<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-4" v-for="nearbyShop in nearbyShops" :key="nearbyShop.id">
          <shop-card
          :shopName=nearbyShop.name
          :shopLocation=nearbyShop.city
          :shopPicture=nearbyShop.picture />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '@/services/axios'
import shopCard from '@/components/shopCard'

export default {
  name: 'home',
  components: {
    shopCard
  },
  data: () => ({
    coordinates: null,
    nearbyShops: [],
    page: 1
  }),
  methods: {
    async getNearbyShops () {
      const coordinates = await this.$getLocation()
      this.coordinates = [coordinates.lat, coordinates.lng].join(',')

      const api = `/shops/nearby/${this.coordinates}?page=${this.page}`
      const { data } = await axios.get(api)

      // console.log(data)
      this.nearbyShops = data.nearByShops
    }
  },
  created () {
    this.getNearbyShops()
  }
}
</script>
