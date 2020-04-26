<template>
  <div class="container">
    <img class="logo center-align" src="../assets/logo.svg" alt="">
    <h1 class="title center-align">GetSafe</h1>
    
    <h5>Manager Login</h5>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">person</i>
            <input id="icon_person" type="text" class="validate">
            <label for="icon_person">Manager ID</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">vpn_key</i>
            <input id="icon_key" type="password" class="validate">
            <label for="icon_key">Password</label>
          </div>
          <div class="input-field col s12">
            <router-link class="waves-effect waves-light btn light-blue darken-4" to="/customer">
              Login
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerLogin',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
    display: block;
    margin: auto;
    margin-top: 3.5rem;
    margin-bottom: .5rem;
  }

  .title{
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #2FA2D4;
  }

  .btn{
    display: block;
  }
</style>
