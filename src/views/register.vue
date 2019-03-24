<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-5">
        <register-form />
      </div>
    </div>
  </section>
</template>

<script>
import registerForm from '@/components/registerForm'

export default {
  name: 'Register',
  components: {
    registerForm
  }
}
</script>
