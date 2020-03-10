<template>
  <div>
	<h3 class="m-subheader__title ">Dashboard</h3>
	<d-t 
      title="Customers" 
      addBtn="New Customer" 
      addBtnBgColor="#00f"
      addBtnColor="#fff"
      :rows="rows" 
      :details="details"
      @add="add"
      @edit="edit" 
      @del="del">
  </d-t>
  <customer-form ref="customerForm" @save="addNewCustomer"></customer-form>
  </div>
</template>
<script>
var _ = require('lodash');
export default {
  data(){
    return {
      customers:[],
      rows:[
      {id:'id',value:'ID'},
      {id:'name',value:'Name'},
      {id:'age',value:'Age'},
      {id:'email',value:'Email'},
      {id:'skills',value:'Skills'},
    ],
    details:[],
    }
  },
  methods:{
    edit(data){
      console.log(data);
    },
    del(data){
      console.log(data);
    },
    add(){
      console.log('add started')
     this.$refs.customerForm.clear()
    },
    addNewCustomer(data){
       let skills_filter = this.skillsFilter(data.skills);
       let customer_add = {
         data:{
          id:1,
          name:data.name,
          age:data.age,
          email:data.email,
          skills:skills_filter
         }
        };
      this.customers =  localStorage.getItem('customers') ?
                        JSON.parse(localStorage.getItem('customers')) : 
                        []
        this.customers.push(customer_add)
        localStorage.setItem('customers',JSON.stringify(this.customers))
            this.details = this.customers
          swal("Add Customer!", "Customer Added Successfully!", "success")
    },
    skillsFilter(skills){
      let data="";
  _.forEach(skills, function(value,key) {
    if(value){
      data+=key +"/"
    }
});
data=data.substring(0,data.length -1)
    return data
    }
  },
  mounted(){
     this.customers =  localStorage.getItem('customers') ?
                        JSON.parse(localStorage.getItem('customers')) : 
                        []
    this.details = this.customers
  }
}
</script>

<style>

</style>
