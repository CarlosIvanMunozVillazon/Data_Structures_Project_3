//In orther to hit our base api URL we must import it to the files that handldes that section of the API.
import { instance } from "./base.api"

//This word hits the endpoint that directs to the character section of the API.
const endpoint = "character"

//Now we declare an object for calling the character section. Within this object we can have different functions.
export const characters = {
    getAll : function({page} : {page : number}){
        //get method. asks for endpoint info 
        return instance.get(endpoint, {params : { //because it is a get method we parse to it parameters.
            page
        }})
    }

    //after this we proceed to use this object within our products page, in order to see the informatiom
}