import AxiosIntance from "./AxiosIntance";


export const getList = async () => {
    const res = await AxiosIntance().get('food');
    return res
}

export const getListFoodFruits = async () => {
    const res = await AxiosIntance().get('product/api/fruit')
    return res
}