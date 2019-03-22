<template>
  <div class="box">
    <p>{{ shopName }} , {{ shopLocation }}</p>
      <figure class="image">
        <img :src="shopPicture">
      </figure>
  </div>
</template>

<script>
export default {
  name: 'shopCard',
  props: {
    shopName: String,
    shopLocation: String,
    shopPicture: String
  }
}
</script>
