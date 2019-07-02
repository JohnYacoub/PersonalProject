import {TYPES} from './actions';


export const character = (state={}, action)=>{
    switch(action.type){
        case TYPES.CHARACHTER_RECEIVE_CHARACHTERS:{
            let characters =  {
                ...state,
                results:[...action.payload],
                resultsComp:[...action.payload]
            };
            return characters
        }

        case TYPES.CHARACHTER_SEARCH_CHARACHTERS:{

         const search = action.payload
         const filterChar = state.results.filter (char => {
            return char.name.toLowerCase ().includes (search.toLowerCase ());
      });
            let characters =  {
                ...state,
                searchField:[search],
                resultsComp:[...filterChar]
            };
            return characters
        }

        default:
            return state;
    }
}