<template>
    <div class="text-center login-wrapper">
        <SignIn />
    </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue'
export default {
  beforeCreate() {
    //    if(this.$store.getters.users.isLogged) this.$router.push('/');
  },
  components: {
    SignIn
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