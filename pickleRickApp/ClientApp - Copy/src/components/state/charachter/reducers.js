import {TYPES} from './actions';

export const character = (state = {}, action) => {
  switch (action.type) {
    case TYPES.CHARACHTER_RECEIVE_CHARACHTERS: {
      let characters = {
        ...state,
        results: [...action.payload],
        resultsComp: [...action.payload],
      };
      return characters;
    }

    case TYPES.CHARACHTER_SEARCH_CHARACHTERS: {
      const search = action.payload;
      const filterChar = state.results.filter (char => {
        return char.name.toLowerCase ().includes (search.toLowerCase ());
      });
      let characters = {
        ...state,
        searchField: [search],
        resultsComp: [...filterChar],
      };
      return characters;
    }

    case TYPES.CHARACHTER_ADD_CHARACHTERS: {
      // let copy = [...state.results]
      let characters = {
        ...state,
        results: state.results.concat (...action.payload),
        resultsComp: state.resultsComp.concat (...action.payload),
      };

      return characters;
    }

    case TYPES.CHARACHTER_DELETE_CHARACHTERS: {
      const char = [...state.resultsComp];
      const index = char.findIndex (item => item.id === action.payload);
      char.splice (index, 1);
      let characters = {
        ...state,
        results: char,
        resultsComp: char,
      };

      return characters;
    }

    // case TYPES.CHARACHTER_EDIT_CHARACHTERS: {
    //   let resultsCopy = [...state.results];
    //   let index = resultsCopy.findIndex (
    //     item => item.id === Number (action.payload)
    //   );
    //   resultsCopy[index].isSelected = true;
      
      
    //   let characters = {
    //     ...state,
    //     results: resultsCopy,
    //     resultsComp: resultsCopy,
    //     selectedProfile:resultsCopy[index]
    //   };
    //   return characters;
    // }
    case TYPES.CHARACHTER_CANCEL_CHARACHTERS: {
      let resultsCopy = [...state.results];
      let index = resultsCopy.findIndex (
        item => item.id === Number (action.payload)
      );
      resultsCopy[index].isSelected = false;
      
      
      let characters = {
        ...state,
        results: resultsCopy,
        resultsComp: resultsCopy,
        selectedProfile:resultsCopy[index]
      };

      return characters;
    }

    case TYPES.CHARACHTER_UPDATE_CHARACHTERS: {
debugger
        let id = action.payload.target.id;
        let name = action.payload.target.name;
        let resultsCopy = [...state.results];
        let index = resultsCopy.findIndex (item => item.id === Number (id));
        resultsCopy[index][name] = action.payload.target.value;
        //console.log(index,name)
        let characters = {
            ...state,
            results: resultsCopy,
            resultsComp: resultsCopy,
          };
        return characters;  
      }

    default:
      return state;
  }
};
