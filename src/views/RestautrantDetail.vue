<template>
    <div class="container">
        <div class="card mt-2">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/restautrant1.svg">
            </div>
            <div class="light-blue darken-4">
                <div class="card-content card-content-header">
                    <div>
                        <p><i class="material-icons yellow-text">star</i><span class="white-text">120</span></p>
                    </div>
                    <div>
                        <p><i class="material-icons white-text">location_on</i><span class="white-text">3rd Street, Road</span></p>
                    </div>
                </div>
                <hr />
                <p class="white-text card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
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

    .card{
        margin: 1.5rem 0;
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
    
    .mt-2{
        margin-top: 2rem;
    }
</style>