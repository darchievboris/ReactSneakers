import axios from "axios";

export class SneakersService{
    static baseUrl='https://66bc659924da2de7ff6a5625.mockapi.io/'
    static async getAll(){
        const response = await axios.get(this.baseUrl+'sneakerItems')
        return response.data
    }
    static async getAllInCart(){
        const response = await axios.get(this.baseUrl+'sneakerItemsCart')
        return response.data
    }
    static async addItemToCart(item){
        const response = await axios.post(this.baseUrl+'sneakerItemsCart',{...item})
        return response
    }
    static async deleteItemFromCart(id){
        const response = await axios.delete(this.baseUrl+'sneakerItemsCart',id)
        return response
    }
}