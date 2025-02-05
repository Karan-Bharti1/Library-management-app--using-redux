export const ADD_BOOKS="books/added"
export const REMOVE_BOOKS="books/remove"
export const CALCULATE_TOTAL="books/calculateTotal"
export const addBook=(book)=>({type:ADD_BOOKS,payload:book})
export const calculateTotal=()=>({type:CALCULATE_TOTAL})