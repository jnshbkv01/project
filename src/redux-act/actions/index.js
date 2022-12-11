import { FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_LOADING, REQUEST, ADDED_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART } from "../types";

export const booksLoaded = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};


export const booksLoading = (isLoading) => {
  return {
    type: FETCH_BOOKS_LOADING,
    payload: isLoading,
  }
}

export const booksError = (err) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: err,
  }
}

export const bookRequest = () => {
  return {
    type: REQUEST,
  }
}

export const fetchBooks = (storeService, dispatch) =>{
  dispatch(bookRequest());
  dispatch(booksLoading(true));
  storeService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err.massage)))
    .finally(() => dispatch(booksLoading(false)))
}

export const bookAddToCart = (id) => {
  return{
    type: ADDED_TO_CART,
    payload: id,
  }
}

export const bookRemovyFromCart = (id) => {
  return{
    type: REMOVE_FROM_CART,
    payload: id
  }
}


export const bookDeleteFromCart = (id) =>{
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
}

