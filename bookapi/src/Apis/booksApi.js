import { Axios } from "./@core"

const BooksApi = {
    getBooks(params) {
        return Axios.get({params: {
            sort: params.sort,
            page: params.page,
            size: params.size,
            query: params.query
        }})
    }
}

export default BooksApi;

