<template>
  <div class="navbar has-shadow">
    <div class="container">
      <div class="navbar-end">
        <router-link
          class="navbar-item"
          :to="{ name: 'preferredShops' }"
        >
          preferred Shops
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
