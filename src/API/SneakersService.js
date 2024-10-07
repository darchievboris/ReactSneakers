import axios from "axios";

export class SneakersService{
    static baseUrl='https://66bc659924da2de7ff6a5625.mockapi.io/'
    static async getAll(){
        const response = await axios.get(this.baseUrl+'sneakerItems')
        return response.data
    }
}