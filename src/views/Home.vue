<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-4" v-for="nearbyShop in nearbyShops" :key="nearbyShop.id">
          <div class="box">
            <p>{{ nearbyShop.name }} , {{ nearbyShop.city }}</p>
            <figure class="image">
              <img :src="nearbyShop.picture">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '@/services/axios'

export default {
  name: 'home',
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
