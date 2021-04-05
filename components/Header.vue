<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" to="/">
        <img src="../assets/logo.webp" alt="logo" class="logo"/>
        buy me a cake
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit">
                <img src="../assets/search-icon.svg" style="color: white" alt="search-icon" height="20" width="20"/>
            </button>
        </form>
        <div v-if="!$store.getters['users/isLogged']">
            <button class="btn btn-outline-dark btn_nav" style="margin-left: 12px" @click="$router.push('/signin')">Sign in</button>
            <button class="btn btn-dark btn_nav" style="margin-left: 5px" @click="$router.push('/signup')">Sign up</button>
        </div>
        <div v-else>
            <button class="btn btn-outline-dark btn_nav" style="margin-left: 12px" @click="signOut">Sign out</button>
        </div>
    </div>
  </div>

    </header>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
    // computed: {
    //     searchIcon() {
    //         return faSearch
    //     }
    // },
    // components: {
    //     FontAwesomeIcon
    // },
    methods: {
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    toastr.warning("Sign out");
                })
                .catch(err => {
                    toastr.error(err);
                })
        }
    }
}
</script>

<style>
.navbar {
    border-bottom: 1px solid #ccc;
    background-color: #fff !important;
}

.header__logo {
    width: 200px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.header__rightSide {
    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.logo {
    width: 45px;
    height: 45px;
}

@media (max-width: 992px) {
    .btn_nav {
        width: 100%;
        margin-top: 6px;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
}

</style>