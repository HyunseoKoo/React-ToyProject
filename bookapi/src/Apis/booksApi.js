import { Axios } from "./@core"

const BooksApi = {
    getBooks(books) {
        return Axios.get({params: {
            sort: books.sort,
            page: books.page,
            size: books.size,
            query: books.query
        }})
    }
}

export default BooksApi;

