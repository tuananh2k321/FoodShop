import AxiosIntance from "./AxiosIntance";


export const getList = async () => {
    const res = await AxiosIntance().get('food');
    return res
}

export const getListFoodFruits = async () => {
    const res = await AxiosIntance().get('product/api/fruit')
    return res
}

export const getListFoodMeat = async () => {
    const res = await AxiosIntance().get('product/api/meat')
    return res
}

export const getListFoodFish = async () => {
    const res = await AxiosIntance().get('product/api/fish')
    return res
}

export const getListFoodVegetable = async () => {
    const res = await AxiosIntance().get('product/api/vegetable')
    return res
}