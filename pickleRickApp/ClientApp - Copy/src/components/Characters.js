import React, {Component} from 'react';
//import * as CharactersService from '../../src/services/CharactersService';
import Card from './Card';
import SearchBox from './SearchBox';
import swal from 'sweetalert';
import {connect} from 'react-redux';
import {
  getCharachters,
  searchCharacter,
  deleteCharacter,
  handelUpdate,
  handleCancel,
} from '../components/state/charachter/actions';

class Characters extends Component {
  state = {
    selectedCharacter: {
      name: '',
      origin: '',
      status: '',
      type: '',
      location: '',
      image: '',
      gender: '',
      species: '',
    },
  };

  componentDidMount () {
    this.props.getCharachters ();
  }

  mapList = item => {
    return (
      <Card
        Characters={item}
        key={item.id}
        delete={this.deleteCharacter}
        onInputChange={this.onInputChange}
        handelUpdate={this.handelUpdates}
        handelModify={this.handelModify}
        handleCancel={this.props.handleCancel}
        selectedProfile={this.state.selectedCharacter}
      />
    );
  };

  handelUpdates = id => {
    debugger;
    console.log ('my state', this.state.selectedCharacter);
    this.props.handelUpdate (id, this.state.selectedCharacter);
  };

  deleteCharacter = id => {
    this.props.deleteCharacter (id);
  };

  onInputChange = e => {
    let name = e.target.name;
    let key = e.target.value;

    // const editChar = {
    //   ...this.state.selectedCharacter,
    //   [name]:key
    // }
    this.setState (() => {
      return {
        selectedCharacter: {
          [name]: key,
        },
      };
    });
  };

  onUpdateError = () => {
    swal ('Oh no!', 'please check your inputs', 'error');
  };

  handelModify = id => {
    let resultsCopy = [...this.props.character.results];
    let index = resultsCopy.findIndex (item => item.id === Number (id));
    resultsCopy[index].isSelected = true;
    console.log (resultsCopy[index]);
    this.setState (
      () => {
        return {selectedCharacter: resultsCopy[index]};
      },
      () => console.log ('my new state', this.state.selectedCharacter)
    );
  };

  addCharacter = () => {
    this.props.history.push (`/characters/add`);
  };

  render () {
    return (
      <div>
        <div className="pa2 fr">
          <button
            onClick={this.addCharacter}
            className=" pa3 ba b--green bg-lightest-blue"
          >
            Add your own Rick!
          </button>
        </div>
        <h1>LoopUp Character</h1>
        <SearchBox searchField={this.props.searchCharacter} />
        {this.props.character.resultsComp.map (this.mapList)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.character,
  };
};

const mapDispatchToProps = {
  getCharachters,
  searchCharacter,
  deleteCharacter,
  handleCancel,
  handelUpdate,
};

export default connect (mapStateToProps, mapDispatchToProps) (Characters);
