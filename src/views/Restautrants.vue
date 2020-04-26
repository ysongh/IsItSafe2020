<template>
    <div class="container">
        <div class="card mt-2">
            <div class="card-image waves-effect waves-block waves-light">
                <router-link to="/restautrantDetail">
                    <img class="activator" src="../assets/restautrant1.svg">
                </router-link>
            </div>
            <div class="card-content light-blue darken-4">
                <div>
                    <p><i class="material-icons yellow-text">star</i><span class="white-text">120</span></p>
                </div>
                <span class="card-title activator white-text center-align">Restautrants 1</span>
                <i class="material-icons white-text">location_on</i>
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/restautrant4.svg">
            </div>
            <div class="card-content light-blue darken-4">
                <div>
                    <p><i class="material-icons yellow-text">star</i><span class="white-text">80</span></p>
                </div>
                <span class="card-title activator white-text center-align">Restautrants 2</span>
                <i class="material-icons white-text">location_on</i>
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/restautrant3.svg">
            </div>
            <div class="card-content light-blue darken-4">
                <div>
                    <p><i class="material-icons yellow-text">star</i><span class="white-text">60</span></p>
                </div>
                <span class="card-title activator white-text center-align">Restautrants 3</span>
                <i class="material-icons white-text">location_on</i>
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/restautrant2.svg">
            </div>
            <div class="card-content light-blue darken-4">
                <div>
                    <p><i class="material-icons yellow-text">star</i><span class="white-text">45</span></p>
                </div>
                <span class="card-title activator white-text center-align">Restautrants 4</span>
                <i class="material-icons white-text">location_on</i>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-title{
        font-size: 1.5rem;
        font-weight: 100 !important;
    }
    
    .mt-2{
        margin-top: 2rem;
    }
</style>