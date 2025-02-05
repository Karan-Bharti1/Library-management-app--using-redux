import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBook, calculateTotal, removeBook } from "./actions"

const Library=()=>{
    const [book,setBook]=useState({
        title:"",
        author:"",
        ISBN:""
    })
    const dispatch=useDispatch()
    const books=useSelector(state=>state.books)
    const total=useSelector(state=>state.total)
    const handleChange=(key,value)=>{
setBook({...book,[key]:value})
    }
const addBookHandler=()=>{
    if(book.title && book.author && book.ISBN){
        dispatch(addBook(book))
        setBook({title:"",author:"",ISBN:""})
        dispatch(calculateTotal())
    }
}
const removeHandler=(ISBN)=>{
    dispatch(removeBook(ISBN))
    dispatch(calculateTotal())
}
const displayBooks=books.map(book=><li key={book.ISBN}>{book.title} by {book.author}(ISBN:{book.ISBN}) <button onClick={()=>removeHandler(book.ISBN)}>Remove</button></li>)
return(
    <>
    <h1>Library Management</h1>
    <input type="text" onChange={(event)=>handleChange("title",event.target.value)} value={book.title} placeholder="Title"/>
    <input type="text" onChange={(event)=>handleChange("author",event.target.value)} value={book.author}  placeholder="Author" />
    <input type="text" onChange={(event)=>handleChange("ISBN",event.target.value)} value={book.ISBN} placeholder="ISBN"/>
    <button onClick={addBookHandler}>Add Book</button>
    <h2>Library Summary</h2>
    <p>Total Books:{total}</p>
{displayBooks}
    </>
)
}
export default Library