<template>
  <div>
    <div class="navbar-fixed">
      <nav class="light-blue darken-4">
        <div class="container">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-nav" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/customer">Customer</a>
                </li>
                <li>
                    <a href="/restaurants">Restaurants</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <ul class="sidenav" id="mobile-nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/customer">Customer</a>
      </li>
      <li>
        <a href="/restaurants">Restaurants</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>