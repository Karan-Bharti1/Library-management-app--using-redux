const loggerMiddleware=(store)=>(next)=>(action)=>{
console.log("Current State: ", store.getState())
console.log("Action: ",action)
next(action)
console.log("Updated State: ",store.getState())
}
export default loggerMiddleware;