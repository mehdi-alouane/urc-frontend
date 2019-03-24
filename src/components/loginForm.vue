<template>
  <div class="box">
    <h1 class="title">
      Please Login:
    </h1>
    <div class="field">
      <div class="control">
        <input
          v-model="user.email"
          type="text"
          class="input"
          placeholder="Email"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Password"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button
          class="button
          is-primary
          is-fullwidth"
          @click.prevent="loginUser"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    user: {
      email: null,
      password: null
    }
  }),
  methods: {
    loginUser () {
      this.$store.dispatch('setToken', this.user)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
