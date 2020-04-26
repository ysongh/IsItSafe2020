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
                    <div class="card-content grey lighten-3">
                        <span class="card-title activator grey-text text-darken-4">
                            <h5 class="center-align">Restautrants 1</h5><i class="material-icons blue-text right">location_on</i>
                        </span>
                        <div class="card-info">
                            <span class="card-p mr-5">Report</span><img src="../assets/icon2.svg" alt="Face">
                        </div>
                        <div class="card-info">
                            <span class="card-p mr-2">Public opinion</span><img src="../assets/icon3.svg" alt="Face">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card mt-2">
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrantDetail">
                            <img class="activator" src="../assets/restautrant2.svg">
                        </router-link>
                    </div>
                    <div class="card-content grey lighten-3">
                        <span class="card-title activator grey-text text-darken-4">
                            <h5 class="center-align">Restautrants 2</h5><i class="material-icons blue-text right">location_on</i>
                        </span>
                        <div class="card-info">
                            <span class="card-p mr-5">Report</span><img src="../assets/icon2.svg" alt="Face">
                        </div>
                        <div class="card-info">
                            <span class="card-p mr-2">Public opinion</span><img src="../assets/icon3.svg" alt="Face">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card mt-2">
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrantDetail">
                            <img class="activator" src="../assets/restautrant3.svg">
                        </router-link>
                    </div>
                    <div class="card-content grey lighten-3">
                        <span class="card-title activator grey-text text-darken-4">
                            <h5 class="center-align">Restautrants 3</h5><i class="material-icons blue-text right">location_on</i>
                        </span>
                        <div class="card-info">
                            <span class="card-p mr-5">Report</span><img src="../assets/icon2.svg" alt="Face">
                        </div>
                        <div class="card-info">
                            <span class="card-p mr-2">Public opinion</span><img src="../assets/icon3.svg" alt="Face">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card mt-2">
                    <div class="card-image waves-effect waves-block waves-light">
                        <router-link to="/restautrantDetail">
                            <img class="activator" src="../assets/restautrant4.svg">
                        </router-link>
                    </div>
                    <div class="card-content grey lighten-3">
                        <span class="card-title activator grey-text text-darken-4">
                            <h5 class="center-align">Restautrants 4</h5><i class="material-icons blue-text right">location_on</i>
                        </span>
                        <div class="card-info">
                            <span class="card-p mr-5">Report</span><img src="../assets/icon2.svg" alt="Face">
                        </div>
                        <div class="card-info">
                            <span class="card-p mr-2">Public opinion</span><img src="../assets/icon3.svg" alt="Face">
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
        font-size: 2.5rem;
    }

    img{
        width: 1.5rem;
    }

    h5{
        margin-top: .5rem;
        margin-bottom: 1rem;
    }

    .card{
        margin: 1.5rem 0;
    }

    .card-content{
        padding: 3px 7px 1.6rem 7px;
    }

    .card-title{
        font-size: 1.5rem;
        font-weight: 100 !important;
    }

    .card-info{
        display: flex;
        padding: 3px 0;
    }

    .card-p{
        font-size: 16px;
        font-weight: 100;
    }
    
    .mt-2{
        margin-top: 2rem;
    }
    .mr-2{
        margin-right: 38px;
    }

    .mr-5{
        margin-right: 90px;
    }
</style>