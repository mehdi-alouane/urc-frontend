<template>
  <section class="section">
    <div class="section" />
    <div class="columns is-centered">
      <div class="column is-5">
        <login-form />
      </div>
    </div>
  </section>
</template>

<script>
import loginForm from '@/components/loginForm'

export default {
  components: {
    loginForm
  }
}
</script>
