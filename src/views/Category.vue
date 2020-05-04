<template>
    <div class="container">
        <div class="row mt-2">
            <div class="col s6 m4 l3">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title activator center-align">Restautrants</span>
                    </div>
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrants">
                            <img class="activator" src="../assets/type1.svg">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s6 m4 l3">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title activator center-align">Bars</span>
                    </div>
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrants">
                            <img class="activator" src="../assets/type2.svg">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s6 m4 l3">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title activator center-align">Finance</span>
                    </div>
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrants">
                            <img class="activator" src="../assets/type3.svg">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s6 m4 l3">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title activator center-align">Retail</span>
                    </div>
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrants">
                            <img class="activator" src="../assets/type4.svg">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col s6 m4 l3">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title activator center-align">Salon</span>
                    </div>
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrants">
                            <img class="activator" src="../assets/type5.svg">
                        </router-link>
                    </div>
                </div>
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
    img{
        padding: 0 1rem 1rem 1rem;
    }
    
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