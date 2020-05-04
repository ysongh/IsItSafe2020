<template>
  <div class="container">
    <div class="mb-3">
      <h4>Your staff</h4>
      <p>Do you have soap and running water available for your staff?</p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
      <p>Do you have alcohol-based (>60%) hand rubs available for your staff?</p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
      <p>Do you ask your staff to stay home for two weeks if they have sick sympthoms?</p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
      <p>What safety facilities are available for your staff?</p>
      <p>
        <label>
          <input type="checkbox" />
          <span>Respiratory etiquette, including covering coughs and sneezes</span>
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" />
          <span>Gloves</span>
        </label>
      </p>
    </div>
    <div>
      <h4>Your customers</h4>
      <p>Do you have soap and running water available in your business for customers?</p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
      <p>Do you have alcohol-based (>60%) hand rubs available for your customers?</p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
      <p>Do you have the condition to keep the social distancing? (distant tables, cashiers, etc.) </p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
      <p>Are tissue and trash receptacles are accessable to everyone?</p>
      <div class="radio-group">
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>Yes</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>No</span>
          </label>
        </p>
      </div>
    </div>
    <div class="input-field col s12 mb-4">
      <router-link class="waves-effect waves-light btn lime darken-3" to="/restautrants">
        Submit
      </router-link>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'ManagerSelfReport',
}
</script>

<style scoped>
  p{
    margin-bottom: 0;
  }

  span{
    margin-right: 2rem;
  }

  .radio-group{
    display: flex;
  }

  .btn{
    display: block;
    margin-top: 2rem;
  }

  .mb-3{
    margin-bottom: 3rem;
  }

  .mb-4{
    margin-bottom: 4rem;
  }
</style>