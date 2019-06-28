import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const url = "https://rickandmortyapi.com/api/"
const getAllCharacters = ()=>{
    const config = {
        method:'GET',
        url:`${url}character`,
        withCredintails:true,
        crossDomain:true
    }
    return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

export {getAllCharacters}