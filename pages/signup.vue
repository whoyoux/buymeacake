<template>
  <div class="text-center login-wrapper">
    <SignUp />
  </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue'
export default {
  components: {
    SignUp
  }
}
</script>

<style scoped>
.login-wrapper {
    margin-top: 5vh;
    display: flex;
    align-items:flex-end;
    padding-top: 20px;
    padding-bottom: 40px;
}

img {
    width: 500px;
}

.row {
    max-width: 100%;
}
</style>
