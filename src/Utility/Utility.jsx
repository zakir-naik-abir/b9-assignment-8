import { toast } from "react-toastify";

const getStoredBook = () =>{
  const storedbook = localStorage.getItem('Read-Book')
  if(storedbook){
    return JSON.parse(storedbook);
  }
  return [];
}

// save 
const saveBook = id =>{
  const storedBooks = getStoredBook();
  const exists = storedBooks.find(bookId =>bookId === id);
  if(!exists){
    storedBooks.push(id);
    localStorage.setItem('Read-Book', JSON.stringify(storedBooks))
    return toast.success('Add to read book')
  }
  return toast.error("All ready added")
}

export { getStoredBook, saveBook};