import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const url = "http://localhost:50000/api/characters/"
const getAllCharacters = ()=>{
    const config = {
        method:'GET',
        url:`${url}all`,
        withCredintails:true,
        crossDomain:true
    }
    return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

const addCharacter = (payload)=>{
    const config = {
        method:'POST',
        url:`${url}add`,
        data:payload,
        withCredintails:true,
        crossDomain:true
    }
    return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

const deleteCharacter = id =>{
    const config = {
        method:'DELETE',
        url:`${url}${id}`,
        withCredintails:true,
        crossDomain:true
    }
    return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}


const editCharacter = (id,payload)=>{
    const config ={
        method:"PUT",
        url:`${url}${id}`,
        data:payload,
        withCredintails:true,
        crossDomain:true
    }
    return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);

    }

    const GetCharacterById = id => {
        const config ={
            method:"GET",
            url:`${url}/${id}`,
            withCredintails:true,
            crossDomain:true
        }
        return axios(config)
        .then(serviceHelper.onGlobalSuccess)
        .catch(serviceHelper.onGlobalError);
    }

export {getAllCharacters,addCharacter,deleteCharacter,editCharacter,GetCharacterById}