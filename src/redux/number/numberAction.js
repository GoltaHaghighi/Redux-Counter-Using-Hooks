const pow2 = () => {
    //Write actions in capital letters
    return { type: "POW2" }
    //by using this, we can tell reducer to do "increace" action 
    //that in reducer we describe : by having "increace" action 
    // add 1 to the counter in store
};
const sqrt3 = () => {
    return { type: "SQRT3" }
};

export { pow2, sqrt3 };