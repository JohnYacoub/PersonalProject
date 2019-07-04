import * as charactersService from '../../../services/CharactersService';

export const TYPES = {
  CHARACHTER_RECEIVE_CHARACHTERS: 'CHARACHTER_RECEIVE_CHARACHTERS',
  CHARACHTER_SEARCH_CHARACHTERS: 'CHARACHTER_SEARCH_CHARACHTERS',
  CHARACHTER_ADD_CHARACHTERS: 'CHARACHTER_ADD_CHARACHTERS',
  CHARACHTER_DELETE_CHARACHTERS: 'CHARACHTER_DELETE_CHARACHTERS',
  CHARACHTER_EDIT_CHARACHTERS: 'CHARACHTER_EDIT_CHARACHTERS',
  CHARACHTER_UPDATE_CHARACHTERS: 'CHARACHTER_UPDATE_CHARACHTERS',
  CHARACHTER_CANCEL_CHARACHTERS:'CHARACHTER_CANCEL_CHARACHTERS'
};

function receiveCharacters (characters) {
  return {
    type: TYPES.CHARACHTER_RECEIVE_CHARACHTERS,
    payload: characters,
  };
}

function onSearch (characters) {
  return {
    type: TYPES.CHARACHTER_SEARCH_CHARACHTERS,
    payload: characters,
  };
}

function addChar (data) {
  return {
    type: TYPES.CHARACHTER_ADD_CHARACHTERS,
    payload: data,
  };
}

function onDeleteChar (id) {
  return {
    type: TYPES.CHARACHTER_DELETE_CHARACHTERS,
    payload: id,
  };
}


function onUpdate(id,data){
  return {
    type:TYPES.CHARACHTER_UPDATE_CHARACHTERS,
    payload: data,id
  }
}

function cancel (id){
  return {
    type: TYPES.CHARACHTER_CANCEL_CHARACHTERS,
    payload: id,
  }
}


export function handelUpdate(id,data){
  return dispatch => {
    charactersService.editCharacter(id,data).then(() => dispatch(onUpdate(id,data)))
  }
}

export function handleCancel (id){
  return dispatch => dispatch(cancel(id))
}



export function getCharachters () {
  return dispatch => {
    charactersService
      .getAllCharacters ()
      .then (response => dispatch (receiveCharacters (response)));
  };
}

export function searchCharacter (e) {
  return dispatch => dispatch (onSearch (e.target.value));
}

export function addCharacter (data) {
  return dispatch => {
    return charactersService
      .addCharacter (data)
      .then (item => dispatch (addChar (data, item)));
  };
}

export function deleteCharacter (id) {
  return dispatch => {
    return charactersService
      .deleteCharacter (id)
      .then (item => dispatch (onDeleteChar (id,item)));
  };
}
