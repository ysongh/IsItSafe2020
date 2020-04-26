<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card mt-2">
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrantDetail">
                            <img class="activator" src="../assets/restautrant1.svg">
                        </router-link>
                    </div>
                    <div class="card-content grey lighten-2">
                        <span class="card-title activator grey-text text-darken-4">
                            <h5 class="center-align">Restautrants 1</h5><i class="material-icons blue-text right">location_on</i>
                        </span>
                        <div>
                            <span>Report</span><img src="../assets/icon2.svg" alt="Face">
                        </div>
                        <div>
                            <span>Public opinion</span><img src="../assets/icon3.svg" alt="Face">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  
</template>

<script>
export default {
  name: 'Restautrants',
}
</script>

<style scoped>
    span{
        font-size: 1.4rem;
    }

    i{
        font-size: 1.8rem;
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