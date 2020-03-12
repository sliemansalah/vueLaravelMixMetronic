<template>
  <div class="row">
    <div class="card" style="width: 18rem;">
  <div class="card-body text-center">
    <h5 class="card-title">Customers</h5>
    <router-link to="/customers"><span class="fs-28">{{ customersCount }}</span></router-link>
  </div>
</div>
 <form class="ml-15">
              <div class="form-group">
                <label for="save" class="form-control-label">Save:</label>
                	<div class="m-form__group form-group">
                      <label for="">Default Radios</label>
                      <div class="m-radio-list">
                        <label class="m-radio">
                          <input @click="updateLocalSaveOption('true')" type="radio" name="save" :checked="local"> LocalStorage
                          <span></span>
                        </label>
                        <label class="m-radio">
                          <input @click="updateLocalSaveOption('false')" type="radio" name="save" :checked="!local"> API
                          <span></span>
                        </label>
                      </div>
                	</div>
  
              </div>
            </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      customersCount:0,
      local:true,
    }
  },
  methods:{
    updateLocalSaveOption(val){
      localStorage.setItem('local',val);
    }
  },
  mounted(){
    let local = localStorage.getItem('local');
    if(!local){
      localStorage.setItem('local','true');
    }
    local =='true'?this.local=true:this.local=false

 let customers =  localStorage.getItem('customers') ?
                        JSON.parse(localStorage.getItem('customers')) : 
                        []
  this.customersCount = customers.length
      console.log(this.customersCount);
  }
}
</script>

<style>
.fs-28{
  font-size: 28px;
}
.ml-15{
  margin-left: 15px;
}
</style>
