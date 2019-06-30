import React, {Component} from 'react';
import * as CharactersService from '../../src/services/CharactersService';
import Card from './Card';
import SearchBox from './SearchBox';
import swal from 'sweetalert';

class Characters extends Component {
  state = {
    results: '',
    resultsComp: '',
    searchField: '',
    toggle: false,
  };

  componentDidMount () {
    CharactersService.getAllCharacters ()
      .then (this.onGetSuccess)
      .catch (this.onGetError);
  }

  onGetSuccess = resp => {
    this.setState (() => {
      return {
        info: resp.info,
        results: resp,
        resultsComp: resp.map (this.mapList),
      };
    });
  };

  mapList = item => {
    return (
      <Card
        Characters={item}
        key={item.id}
        delete={this.deleteChar}
        toggle={this.state.toggle}
        onIputChange={this.onIputChange}
        selectedProfile={this.state.selectedProfile}
      />
    );
  };

  deleteChar = id => {
    swal ({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover your character.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then (willDelete => {
      if (willDelete) {
        CharactersService.deleteCharacter (id)
          .then (this.onDeleteSuccess (id))
          .catch (this.onDeleteError);
        swal ('Your character has been deleted.', {
          icon: 'success',
        });
      } else {
        swal ('Your character is safe.');
      }
    });
  };

  onDeleteSuccess = id => {
    this.setState (prevState => {
      const char = [...prevState.resultsComp];
      const index = char.findIndex (item => item.props.Characters.id === id);
      char.splice (index, 1);
      return {
        resultsComp: char,
      };
    });
  };

  onSearchChange = e => {
    this.setState ({searchField: e.target.value}, () => {
      const filterChar = this.state.results.filter (
        char => {
          return char.name
            .toLowerCase ()
            .includes (this.state.searchField.toLowerCase ());
        }
      );
      this.setState (prevState => {
        return {
          ...prevState,
          resultsComp: filterChar.map (this.mapList),
        };
      });
    });
  };

  onIputChange = e => {
    let id = e.target.id;
    let resultsCopy = [...this.state.results];
    let index = resultsCopy.findIndex (item => item.id === Number (id));
    resultsCopy[index].origin = e.target.value;
    this.setState (prevState => {
      return {
        ...prevState,
        results: resultsCopy,
        resultsComp: resultsCopy.map (this.mapList),
      };
    });
  };
  addCharacter = () => {};

  render () {
    return (
      <div>
        <h1>LoopUp Character</h1>
        <button onClick={this.addCharacter} className="pa3 ba b--green bg-lightest-blue">Add your own Rick!</button>
        <SearchBox searchField={this.onSearchChange} />
        {this.state.resultsComp}
      </div>
    );
  }
}

export default Characters;
