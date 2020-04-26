<template>
  <div class="container">
    <img class="icon center-align" src="../assets/icon1.svg" alt="Disk Icon">
    
    <h5>Your Business Information</h5>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" class="validate" value="Burger King">
            <label class="active" for="name">Name</label>
          </div>
          <div class="input-field col s12">
            <input id="city" type="text" class="validate" value="New York">
            <label class="active" for="city">City</label>
          </div>
          <div class="input-field col s12">
            <input id="city" type="text" class="validate" value="123 Wall St">
            <label class="active" for="city">Address</label>
          </div>
          <div class="input-field col s12">
            <router-link class="waves-effect waves-light btn light-blue darken-4" to="/manager/selfreport">
              Update Self Report
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerBusiness',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon{
    display: block;
    margin: auto;
    margin-top: 3.5rem;
    margin-bottom: 3rem;
  }

  .btn{
    display: block;
  }
</style>
