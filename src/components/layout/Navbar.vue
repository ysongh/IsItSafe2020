<template>
  <div>
    <div class="navbar-fixed">
      <nav class="light-blue darken-4">
        <div class="container">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">Logo</a>
            <a to="#" data-target="mobile-nav" class="sidenav-trigger">
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
                    <router-link to="/customer">Customer</router-link>
                </li>
                <li>
                    <router-link to="/restaurants">Restaurants</router-link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <ul class="sidenav" id="mobile-nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/manager/login">Manager Login</router-link>
      </li>
      <li>
        <router-link to="/customer">Customer</router-link>
      </li>
      <li>
        <router-link to="/restaurants">Restaurants</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>