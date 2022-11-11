import axios from "axios";

const api = 'https://gnk.onm.mybluehost.me/products_api/';

export const getProducts = () => 
    axios.get(`${api}`).then((res) => {
        console.log(res);
        return res.data;
    });

