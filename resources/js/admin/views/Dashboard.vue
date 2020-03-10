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
  <modal></modal>
  </div>
</template>
<script>
export default {
  data(){
    return {
      rows:[
      {id:'id',value:'ID'},
      {id:'name',value:'Name'},
      {id:'age',value:'Age'},
      {id:'email',value:'Email'},
      {id:'skills',value:'Skills'},
    ],
    details:
    [
        {
         data:{
          id:1,
          name:'Solayman',
          age:26,
          email:'slieman2001@hotmail.com',
          skills:'Angular/ Vue'
         }
        },
      {
        data:
        {
          id:2,
          name:'Ahmed',
          age:22,
          email:'ahmed@hotmail.com',
          skills:'Angular'
        }
      }
    ],
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
      console.log('add started');
    }
  }
}

</script>
