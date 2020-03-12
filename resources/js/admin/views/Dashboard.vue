<template>
  <div class="row">
    <div class="card" style="width: 18rem;">
  <div class="card-body text-center">
    <h5 class="card-title">Customers</h5>
    <router-link to="/customers"><span class="fs-28">{{ customersCount }}</span></router-link>
  </div>
</div>
 <div class="ml-15">
    <h3>Save By</h3>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      customersCount:0
    }
  },
  mounted(){
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
