<template>
  <div class="box">
    <p>{{ shopName }} , {{ shopLocation }}</p>
    <figure class="image">
      <img :src="shopPicture">
    </figure>

    <div class="buttons is-centered">
      <div
        v-if="isInNearbyShops"
        class="control"
      >
        <button
          class="button is-link is-inverted"
          @click="addToPrefferredShops"
        >
          <span class="icon">
            <i class="fa fa-thumbs-up" />
          </span>
          <span>like</span>
        </button>
      </div>

      <div class="control">
        <button
          class="button is-danger is-inverted"
          @click="removeFromPreferredShops"
        >
          <span class="icon">
            <i class="fa fa-thumbs-down" />
          </span>
          <span>Dislike</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCard',
  props: {
    isInNearbyShops: {
      type: Boolean,
      default: false
    },
    shopId: {
      type: String,
      default: ''
    },
    shopName: {
      type: String,
      default: ''
    },
    shopLocation: {
      type: String,
      default: ''
    },
    shopPicture: {
      type: String,
      default: ''
    }
  },
  methods: {
    async addToPrefferredShops () {
      const req = await this.axios.post('/shops/preferred-shops', {
        shopId: this.shopId,
        userId: this.$store.state.user._id
      })
      console.log(req)
    },
    async removeFromPreferredShops () {
      const req = await this.axios.post('/shops/preferred-shops', {
        shopId: this.shopId,
        userId: this.$store.state.user._id
      })

      console.log(req)
    }
  }
}
</script>
