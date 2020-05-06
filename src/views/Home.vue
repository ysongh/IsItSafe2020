<template>
  <div class="hello">
    <h1 class="title center-align">Is it safe 2020?</h1>
    <img src="../assets/landingHero.svg" alt="Landing">
    <router-link class="waves-effect waves-light btn-large lime darken-3" to="/manager/login">
      Manager
    </router-link>
    <br />
    <router-link class="waves-effect waves-light btn-large lime darken-3" to="/category">
      Category
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    display: block;
    margin: auto;
    margin-bottom: 1rem;
  }

  .logo{
    display: block;
    margin: auto;
    margin-top: 3.5rem;
    margin-bottom: .5rem;
  }

  .title{
    font-size: 2rem;
    color: #76b118;
  }

  .btn-large{
    display: block;
    width: 60%;
    margin: auto;
    margin-bottom: .5rem;
  }
</style>
