import Dashboard from "../views/Dashboard";
import Index from "../views/customers/Index";
import Customers from "../views/customers/View";
// import NewCustomer from "../views/customers/New";

export default  [
    { path: '/', component: Dashboard },
    { path: '/customers', component: Index, children:[
        { path: '', component: Customers },
        // { path: 'new', component: NewCustomer },
    ] },
]
