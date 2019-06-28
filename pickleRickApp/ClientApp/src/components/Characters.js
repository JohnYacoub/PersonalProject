import React, { Component } from 'react';
import * as CharactersService from '../../src/services/CharactersService'



class Characters extends Component {

    state  = {
        count:'',

    }

componentDidMount(){
    CharactersService
    .getAllCharacters()
    .then(this.onGetSuccess)
    .catch(this.onGetError)
}

onGetSuccess =(resp)=>{

    console.log(resp);
}

    render(){
        return(
            <div></div>
        )
    }
}


export default Characters