<template>
    <div class="container">
        <div class="row mt-2">
             <div v-bind:key="catergory.id" v-for="catergory in catergories">
                <div class="col s6 m4 l3">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title activator center-align">{{catergory.name}}</span>
                        </div>
                        <div class="card-image waves-effect waves-block waves-light">
                            <router-link to="/restautrants">
                                <i class="material-icons green-text">{{catergory.icon}}</i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'Customer',
  data(){
    return{
      catergories: [
        {
          id: 1,
          name: "Restautrants",
          icon: "local_dining"
        },
        {
          id: 2,
          name: "Bars",
          icon: "local_bar"
        },
        {
          id: 3,
          name: "Finance",
          icon: "attach_money"
        },
        {
          id: 4,
          name: "Retail",
          icon: "shopping_cart"
        },
        {
          id: 5,
          name: "Salon",
          icon: "content_cut"
        }
      ]
    }
  }
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