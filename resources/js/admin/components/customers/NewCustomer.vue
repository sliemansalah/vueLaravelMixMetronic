<template>
  <div class="page">
    <!--begin::Portlet-->
    <div class="m-portlet">
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <span class="m-portlet__head-icon m--hide">
              <i class="la la-gear"></i>
            </span>
            <h3 class="m-portlet__head-text">Add New Customer</h3>
          </div>
        </div>
      </div>

      <!--begin::Form-->
      <form class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed">
        <div class="m-portlet__body">
          <div class="form-group m-form__group row">
            <label class="col-lg-2 col-form-label">First Name:</label>
            <div class="col-lg-6">
              <input
                v-model="customer.firstName"
                type="string"
                class="form-control m-input"
                placeholder="Enter first name"
              />
              <span class="m-form__help">Please enter your first name</span>
            </div>
          </div>
          <div class="form-group m-form__group row">
            <label class="col-lg-2 col-form-label">Last Name:</label>
            <div class="col-lg-6">
              <input
                v-model="customer.lastName"
                type="string"
                class="form-control m-input"
                placeholder="Enter last name"
              />
              <span class="m-form__help">Please enter your last name</span>
            </div>
          </div>
          <div class="form-group m-form__group row">
            <label class="col-lg-2 col-form-label">Email address:</label>
            <div class="col-lg-6">
              <input
                v-model="customer.email"
                type="email"
                class="form-control m-input"
                placeholder="Enter email"
              />
              <span class="m-form__help">We'll never share your email with anyone else</span>
            </div>
          </div>

          <div class="form-group m-form__group row">
            <label class="col-lg-2 col-form-label">Age:</label>
            <div class="col-lg-6">
              <input
                v-model="customer.age"
                type="number"
                class="form-control m-input"
                placeholder="Enter age"
              />
            </div>
          </div>
          <div class="m-form__group m-form__group--last form-group row">
            <label class="col-lg-2 col-form-label">Skills:</label>
            <div class="col-lg-6">
              <div class="m-checkbox-list">
                <label class="m-checkbox">
                  <input v-model="customer.skills.vue" type="checkbox" /> Vue JS
                  <span></span>
                </label>
                <label class="m-checkbox">
                  <input v-model="customer.skills.angular" type="checkbox" /> Angular JS
                  <span></span>
                </label>
                <label class="m-checkbox">
                  <input v-model="customer.skills.node" type="checkbox" /> Node JS
                  <span></span>
                </label>
                <label class="m-checkbox">
                  <input v-model="customer.skills.react" type="checkbox" /> React JS
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>

	    <div class="m-portlet__foot m-portlet__no-border m-portlet__foot--fit">
          <div class="m-form__actions m-form__actions--solid">
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-6 mb-30">
                <button @click.prevent="Submit()" class="btn btn-primary">Submit</button>
                <button class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>

      <!--end::Form-->
    </div>

    <!--end::Portlet-->
  </div>
</template>

<script>
export default {
  data() {
    return {
	  customers:[],
      customer: {
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        skills: {
          vue: false,
          angular: false,
          node: false,
          react: false
        }
      }
    };
  },
  methods: {
    Submit() {
	 
	  this.customers.push(this.customer);
	  localStorage.setItem('customers',JSON.stringify(this.customers));
    }
  },
  computed: {
    fullName() {
      return this.customer.firstName + " " + this.customer.lastName;
    }
  }
};
</script>

<style>
.mb-30 {
	margin-bottom: 30px;
}
</style>