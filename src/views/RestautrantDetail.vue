<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card mt-2">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="../assets/restautrant1.svg">
                    </div>
                    <div class="card-content grey lighten-3">
                        <span class="card-title activator grey-text text-darken-4">
                            <h5 class="center-align">Restautrants 1</h5><i class="material-icons blue-text right">location_on</i>
                        </span>
                        <div class="card-info">
                            <p class="card-p">Report</p>
                            <div class="card-sub">
                                <p class="mr-2">Sanitizing facilities</p>
                                <i class="material-icons">check</i>
                            </div>
                            <div class="card-sub">
                                <p class="mr-2">Customer distancing</p>
                                <i class="material-icons">check</i>
                            </div>
                        </div>
                        <div class="card-info">
                            <p class="card-p">Public opinion</p>
                            <div class="card-sub">
                                <p class="mr-2">Feel safe</p>
                                <i class="material-icons">check</i>
                            </div>
                            <div class="card-sub">
                                <p class="mr-2">Feel clean</p>
                                <i class="material-icons">clear</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="mt-2">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="question1" type="text" class="validate">
                            <label for="question1">Did you enjoy the service?</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="question2" type="text" class="validate">
                            <label for="question2">Was the environment clean?</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="question3" type="text" class="validate">
                            <label for="question3">Did you feel safe?</label>
                        </div>
                    </div>
                    <router-link class="waves-effect waves-light btn lime darken-3" to="/restautrants">
                        Submit
                    </router-link>
                </div>
                
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'RestautrantDetail',
}
</script>

<style scoped>
    span{
        font-size: 1.4rem;
    }

    i{
        font-size: 1.8rem;
    }

    h5{
        margin-top: 0rem;
        margin-bottom: 1rem;
    }

    .row{
        margin-bottom: 0;
    }

    .card{
        margin: 1.5rem 0;
        padding:
    }

    .card-content-header{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-title{
        font-size: 1.5rem;
        font-weight: 100 !important;
    }

    .btn{
        margin-top: 1.5rem;
        margin-bottom: 3rem;
        width: 100%;
    }

    .card-title{
        font-size: 1.5rem;
        font-weight: 100 !important;
    }

    .card-info{
        padding: 3px 0;
    }
    
    .card-sub{
        display: flex;
        margin-left: 1.5rem;
    }

    .card-p{
        font-size: 16px;
    }
    
    .mt-2{
        margin-top: 2rem;
    }

    .mr-2{
        margin-right: 1rem !important;
    }

    .iconLabel{
        display: flex;
        align-items: center;
    }

</style>