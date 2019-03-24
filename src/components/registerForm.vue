<template>
  <div class="box">
    <div class="field">
      <div class="control">
        <input
          v-model="user.email"
          type="text"
          class="input"
          placeholder="Enter your email"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter your password"
        >
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button
          class="button is-info is-fullwidth"
          @click="regiserUser"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data: () => ({
    user: {
      email: null,
      password: null
    }
  }),
  methods: {
    async regiserUser () {
      const req = await this.axios.post('/user/register', this.user)
      if (req) {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>
