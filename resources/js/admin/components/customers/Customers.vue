<template>
  <div class="page">
      <h1>Customers</h1>
      <ul>
        <li v-for="(customer,index) in customers" :key="index">
          {{customer.firstName}} {{customer.lastName}}
          <i @click="removeCustomer(index)" class="fa fa-trash"></i>
        </li>
        
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      customers:[],
    }
  },
  methods:{
    removeCustomer(index){
      this.customers.splice(index,1)
      console.log(this.customers)
      localStorage.setItem('customers',JSON.stringify(this.customers))
    }
  },
  created(){
    this.customers = JSON.parse(localStorage.getItem('customers'))
  },
}
</script>

<style>
.fa-trash:hover{
  cursor: pointer;
  color: red;
}
</style>