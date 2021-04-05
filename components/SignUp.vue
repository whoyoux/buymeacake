<template>
<div class="form-signin">
<form @submit.prevent="Register">
    <img class="mb-4" src="../assets/logo.webp" alt="" width="72" height="72">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

    <div class="form-floating">
      <input type="text" class="form-control bottom-without-border" id="floatingInputUsername" v-model="user.username">
      <label for="floatingInputUsername">Username</label>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control bottom-without-border top-without-border" id="floatingInputEmail" v-model="user.email">
      <label for="floatingInputEmail">Email address</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control bottom-without-border top-without-border" id="floatingInputFirstName" v-model="user.firstName">
      <label for="floatingInputFirstName">First name</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control bottom-without-border top-without-border" id="floatingInputLastName" v-model="user.lastName">
      <label for="floatingInputLastName">Last name</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control bottom-without-border top-without-border margin-bottom" id="floatingPassword1" v-model="user.password">
      <label for="floatingPassword1">Password</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control top-without-border" id="floatingPassword2" v-model="user.secondPassword">
      <label for="floatingPassword2">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" v-model="user.agree" value="user-agreement"> I agree to the user agreement.
      </label>
    </div>

    <input type="submit" value="Sign up" class="w-100 btn btn-lg btn-primary mb-2"/>
</form>
    <p class="text-muted mb-2"><em>or if you have account.</em></p>
    <button class="w-100 btn btn-secondary" type="submit" @click="$router.push('/signin')">Sign in</button>
    <p class="mt-5 mb-3 text-muted">whoyoux &copy; 2021</p>
</div>
    
</template>

<script>
import firebase from 'firebase';
import toastr from 'toastr';

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-bottom-center",
  "preventDuplicates": true,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export default {
    name: 'Register',
    data() {
      return {
        user: {
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          secondPassword: '',
          agree: false
        }
      }
    },
    methods: {
        Register() {
          if(this.user.password !== this.user.secondPassword) {
            toastr.error("Passwords aren't identical!");
            return;
          }

          if(!this.user.agree) {
            toastr.error("You must accept the user agreement!");
            return;
          }

          firebase
            .auth()
            .createUserWithEmailAndPassword(this.user.email, this.user.password)
            .then(data => {
              data.user
                .updateProfile({
                  displayName: this.user.username,
                  firstName: this.user.firstName,
                  lastName: this.user.lastName,
                  createdAt: Date.now()
                })
                .then(() => {
                  toastr.success("Created new account!");
                  this.$router.push('/');
                })
            })
            .catch(err => 
              toastr.error(err.message)
            )
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

input {
  cursor:text;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
}
.form-signin input[type="password"] {
  margin-bottom: -1px;
}

.bottom-without-border {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.top-without-border {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.margin-bottom {
  margin-bottom: -1px !important;
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