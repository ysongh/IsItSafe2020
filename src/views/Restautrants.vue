<template>
    <div class="container">
        <div class="row">
            <div v-bind:key="restautrant.id" v-for="restautrant in restautrants">
                <div class="col s12 m6">
                    <div class="card mt-2">
                        <div class="card-image waves-effect waves-block waves-light">
                            <router-link to="/restautrantDetail">
                                <img class="activator" :src=restautrant.imgsrc>
                            </router-link>
                        </div>
                        <div class="card-content grey lighten-3">
                            <span class="card-title activator grey-text text-darken-4">
                                <h5 class="center-align">{{restautrant.name}}</h5><i class="material-icons blue-text right">location_on</i>
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
    </div>
  
</template>

<script>
export default {
  name: 'Restautrants',
  data(){
    return{
      restautrants: [
        {
          id: 1,
          name: "Restautrants 1",
          imgsrc: require("../assets/restautrant1.svg")
        },
        {
          id: 2,
          name: "Restautrants 2",
          imgsrc: require("../assets/restautrant2.svg")
        },
        {
          id: 3,
          name: "Restautrants 3",
          imgsrc: require("../assets/restautrant3.svg")
        },
        {
          id: 4,
          name: "Restautrants 4",
          imgsrc: require("../assets/restautrant4.svg")
        }
      ]
    }
  }
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