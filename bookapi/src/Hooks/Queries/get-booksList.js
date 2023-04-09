import { useQuery } from "@tanstack/react-query"
import BooksApi from "../../Apis/booksApi"
import { queryConfig } from "./@config"



export const useBookList = params => {
    const { data } = useQuery(
        ['GET_LIST'],
        () => BooksApi.getBooks(params),
        queryConfig,
    );
    return { data };
}