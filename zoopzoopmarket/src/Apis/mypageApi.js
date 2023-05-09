import { Axios } from "./@core";

const PATH = '/api/user/my-page';

const MyInfoApi = {

    // /api/user/my-page/account-book?category=seller&start=2023-04-01&end=2023-05-02&page=1
    getAccountInfo({page, category, start, end}) {
        return Axios.get(PATH + '/account-book', { 
        params: {
            page: page,
            category: category, // 키&값이 같으며 category로 표현 가능? (강의 시간에 설명 들은듯)
            start: start,
            end: end,
        }})
    }
}

export default MyInfoApi;