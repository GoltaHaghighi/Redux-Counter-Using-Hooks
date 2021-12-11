const increase = (value) => {
    //Write actions in capital letters
    return { type: "INCREASE_COUNTER", payload: value }
    //by using this, we can tell reducer to do "increace" action 
    //that in reducer we describe : by having "increace" action 
    // add 1 to the counter in store
};
const decrease = (value) => {
    return { type: "DECREASE_COUNTER", payload: value  }
};

export { increase, decrease };