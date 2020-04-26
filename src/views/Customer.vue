<template>
    <div class="container">
        <div class="card mt-2">
            <div class="card-content light-blue darken-4">
                <span class="card-title activator white-text center-align">Restautrants</span>
            </div>
            <div class="card-image waves-effect waves-block waves-light">
                <router-link to="/restautrants">
                    <img class="activator" src="../assets/type1.svg">
                </router-link>
            </div>
        </div>
        <div class="card">
            <div class="card-content light-blue darken-4">
                <span class="card-title activator white-text center-align">Bars</span>
            </div>
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/type2.svg">
            </div>
        </div>
        <div class="card">
            <div class="card-content light-blue darken-4">
                <span class="card-title activator white-text center-align">Finance</span>
            </div>
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/type4.svg">
            </div>
        </div>
        <div class="card">
            <div class="card-content light-blue darken-4">
                <span class="card-title activator white-text center-align">Retail</span>
            </div>
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/type3.svg">
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'Customer',
}
</script>

<style scoped>
    .card{
        margin: 1.5rem 0;
    }

    .card-content{
        padding: 3px;
    }

    .card-title{
        font-size: 1.5rem;
        font-weight: 100 !important;
    }
    
    .mt-2{
        margin-top: 2rem;
    }
</style>