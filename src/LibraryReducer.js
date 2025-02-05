import { ADD_BOOKS, CALCULATE_TOTAL, REMOVE_BOOKS } from "./actions"

const initialState={books:[],total:0}

const libraryReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_BOOKS:
        return{
            ...state,books:[...state.books,action.payload]
        }
        case REMOVE_BOOKS:
            return {
            ...state,books:state.books.filter(book=>book.ISBN!=action.payload)
        }
        case CALCULATE_TOTAL:
            return{
                ...state,total:state.books.length
            }
        default :
        return state
}
}
export default libraryReducer;