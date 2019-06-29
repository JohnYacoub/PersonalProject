import React, {Component} from 'react';
import * as CharactersService from '../../src/services/CharactersService';
import Card from './Card';
import SearchBox from './SearchBox';
import swal from 'sweetalert';

class Characters extends Component {
  state = {
    info: '',
    infoComp: '',
    results: '',
    resultsComp: '',
    searchField: '',
    test: '',
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
    return <Card Characters={item} key={item.id} delete={this.deleteChar} />;
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
    this.setState ({searchField: e.target.value});
    const filterChar = this.state.results.filter (
      char => {
        return char.name
          .toLowerCase ()
          .includes (this.state.searchField.toLowerCase ());
      },
      () => {
        this.setState ({resultsComp: filterChar});
      }
    );
  };

  render () {
    return (
      <div>
        <h1>LoopUp Character</h1>
        <SearchBox searchField={this.onSearchChange} />
        {this.state.resultsComp}
      </div>
    );
  }
}

export default Characters;
