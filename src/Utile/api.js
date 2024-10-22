import axios from "axios";

export class Api {
    static baseUrl='http://localhost:3001/'
    static async getAllItems(){
        const response = await axios.get(this.baseUrl+'items')
        return response.data
    }
    static async getAllFromCart(){
        const response = await axios.get(this.baseUrl+'carts')
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
    static async getAllFavorites(){
        const response = await axios.get(this.baseUrl+'favorites')
        return response.data
    }

    static async addItemToFavorites(item){
        const response = await axios.post(this.baseUrl+'favorites',{...item})
        return response
    }
    static async deleteItemFromFavorites(id){
        const response = await axios.delete(this.baseUrl+'favorites/'+id)
        return response
    }

    static async getAllOrders(){
        const response = await axios.get(this.baseUrl+'orders')
        return response.data
    }
    static async addOrder(item){
        const response = await axios.post(this.baseUrl+'orders',{...item})
        return response.data
    }
    static async deleteOrder(id){
        const response = await axios.delete(this.baseUrl+'orders/'+id)
        // if(!response.ok){ return Promise.reject(`Что-то пошло не так. Обратитесь к разработчику`);}
        return response
    }
}