import * as charactersService from '../../../services/CharactersService';

export const TYPES = {
    CHARACHTER_RECEIVE_CHARACHTERS: 'CHARACHTER_RECEIVE_CHARACHTERS',
    CHARACHTER_SEARCH_CHARACHTERS :'CHARACHTER_SEARCH_CHARACHTERS',
    // CHARACHTER_LOOKUP_CHARACHTERS :  'CHARACHTER_LOOKUP_CHARACHTERS'

}

function receiveCharacters(characters){
    return {
        type:TYPES.CHARACHTER_RECEIVE_CHARACHTERS,
        payload:characters,
    }
}

function onSearch (characters){
    return {
        type:TYPES.CHARACHTER_SEARCH_CHARACHTERS,
        payload:characters,
    }
}

export function getCharachters (){
    return dispatch =>{
        charactersService.getAllCharacters()
        .then(response => dispatch(receiveCharacters(response)))
    }
}

export function searchCharacter (e){
    return dispatch => dispatch((onSearch(e.target.value)))
    // return dispatch =>{console.log("click target",e.target.value).then(dispatch(onSearch)(e))}
}