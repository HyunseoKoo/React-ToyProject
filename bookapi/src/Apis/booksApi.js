import { Axios } from "./@core"

const BooksApi = {
    getBooks(param) {
        return Axios.get('', {params: {
            sort: 'accuracy',
            page: 1,
            size: 1,
            target: 'title',
            query: param
        }})
    }
}

export default BooksApi;

