import AxiosIntance from "../contants/AxiosIntance";


export const getList = async () => {
    const res = await AxiosIntance().get('food');
    return res
}