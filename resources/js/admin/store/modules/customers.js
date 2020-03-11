const state = {
    customers: JSON.parse(localStorage.getItem('customers')) || [],
};

const mutations = {
    'SET_CUSTOMERS' (state, customers) {
        state.customers = customers;
    }
};

const actions = {
    initCustomers: ({commit},c) => {
        commit('SET_CUSTOMERS', c);
    },
};

const getters = {
    customers: state => {
        return state.customers;
    },
    customersCount: state => {
        return state.customers.length;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};