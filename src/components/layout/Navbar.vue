<template>
  <div>
    <div class="navbar-fixed">
      <nav class="lime darken-3">
        <div class="container">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">
              <span>IsItSafe2020</span>
            </a>
            <a to="" data-target="mobile-nav" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/manager/login">Manager Login</router-link>
                </li>
                <li>
                    <router-link to="/category">Category</router-link>
                </li>
                <li>
                    <router-link to="/restautrants">Restaurants</router-link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <ul class="sidenav" id="mobile-nav">
      <li class="sidenav-close">
        <router-link to="/">Home</router-link>
      </li>
      <li class="sidenav-close">
        <router-link to="/manager/login">Manager Login</router-link>
      </li>
      <li class="sidenav-close">
        <router-link to="/category">Category</router-link>
      </li>
      <li class="sidenav-close">
        <router-link to="/restautrants">Restaurants</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  span{
    font-size: 2.25rem;
  }

  .logo{
    width: 2.1rem;
  }
</style>