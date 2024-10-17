import axios from "axios";

export class SneakersService{
    static baseUrl='http://localhost:3001/'
    static async getAll(){
        const response = await axios.get(this.baseUrl+'items')
        return response.data
    }
    static async getAllFromCart(){
        const response = await axios.get(this.baseUrl+'carts')
        console.log(response.data)
        return response.data
    }
    static async addItemToCart(item){
        const response = await axios.post(this.baseUrl+'carts',{...item})
        return response
    }
    static async deleteItemFromCart(id){
        const response = await axios.delete(this.baseUrl+'carts/'+id)
        return response
    }
}