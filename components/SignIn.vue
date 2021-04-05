<template>
  <div class="form-signin">
    <form @submit.prevent="Login">
      <img class="mb-4" src="../assets/logo.webp" alt="" width="72" height="72">
      <h1 class="h3 mb-3 fw-normal">
        Please sign in
      </h1>

      <div class="form-floating">
        <input id="floatingInput" v-model="user.email" type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input id="floatingPassword" v-model="user.password" type="password" class="form-control" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <input class="w-100 btn btn-lg btn-primary mb-2" type="submit" value="Sign in">
    </form>
    <p class="text-muted mb-2">
      <em>or if you dont have account.</em>
    </p>
    <NuxtLink to="/signup" class="w-100 btn btn-secondary">
      Sign up
    </NuxtLink>
    <p class="mt-5 mb-3 text-muted">
      whoyoux &copy; 2021
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
import toastr from 'toastr'

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-bottom-center',
  preventDuplicates: true,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
}

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    Login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          toastr.success('Logged!')
          console.log('Sign up!')
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err.message)
          toastr.error(err.message)
        })
    }
  }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

</style>
