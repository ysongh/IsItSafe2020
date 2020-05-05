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
                            <i class="material-icons green-text">local_dining</i>
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
                            <i class="material-icons green-text">local_bar</i>
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
                            <i class="material-icons green-text">attach_money</i>
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
                            <i class="material-icons green-text">shopping_cart</i>
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
                            <i class="material-icons green-text">content_cut</i>
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
    i{
        width: 100%;
        font-size: 10rem;
        text-align: center;
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