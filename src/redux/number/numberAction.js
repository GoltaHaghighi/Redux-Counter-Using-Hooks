const x2 = () => {
    //Write actions in capital letters
    return { type: "X2_NUMBER" }
    //by using this, we can tell reducer to do "increace" action 
    //that in reducer we describe : by having "increace" action 
    // add 1 to the counter in store
};
const x3 = () => {
    return { type: "X3_NUMBER" }
};

export { x2, x3 };