import { Axios } from "./@core";


const PATH = '/api/user/my-page'

const MyPageApis = {
    getMyItem({page, category}) {
        return Axios.get(PATH + '/product-list', {
            params : {
                page: page,
                category: category,
            }
        })
    }

}

export default MyPageApis;