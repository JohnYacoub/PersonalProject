import React, {Component} from 'react';
import * as CharactersService from '../../src/services/CharactersService';
import Card from './Card';
import SearchBox from './SearchBox';
import swal from 'sweetalert';
import { connect } from "react-redux";
import {getCharachters,searchCharacter} from '../components/state/charachter/actions'

class Characters extends Component {
  state = {
    results: '',
    resultsComp: '',
    searchField: '',
    toggle: false,
  };

  componentDidMount () {
    this.props.getCharachters()
  }


  mapList = item => {
    return (
      <Card
        Characters={item}
        key={item.id}
        delete={this.deleteChar}
        toggle={this.state.toggle}
        onIputChange={this.onIputChange}
        handelUpdate={this.handelUpdate}
        handelModify={this.handelModify}
        handleCancel={this.handleCancel}
      />
    );
  };

  handleCancel =()=>{
    this.setState({toggle:false},()=>{
      CharactersService.getAllCharacters ()
      .then (this.onGetSuccess)
      .catch (this.onGetError);
    })

  }

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

  // onSearchChange = e => {
  //   this.setState ({searchField: e.target.value}, () => {
  //     const filterChar = this.state.results.filter (char => {
  //       return char.name
  //         .toLowerCase ()
  //         .includes (this.state.searchField.toLowerCase ());
  //     });
  //     this.setState (prevState => {
  //       return {
  //         ...prevState,
  //         resultsComp: filterChar.map (this.mapList),
  //       };
  //     });
  //   });
  // };

  onIputChange = e => {
    let id = e.target.id;
    let name = e.target.name;
    let resultsCopy = [...this.state.results];
    let index = resultsCopy.findIndex (item => item.id === Number (id));
    resultsCopy[index][name] = e.target.value;
    //console.log(index,name)
    this.setState (prevState => {
      return {
        ...prevState,
        results: resultsCopy,
        resultsComp: resultsCopy.map (this.mapList),
      };
    });
  };

  handelUpdate =(id) => {
    let resultsCopy = [...this.state.results];
    let data = resultsCopy.filter (item => item.id === Number (id));
    CharactersService.editCharacter (id, data[0])
      .then (this.onUpdateSuccess)
      .catch (this.onUpdateError);
  };


  onUpdateSuccess = resp=>{
    this.setState({toggle:false},()=>{
      CharactersService.getAllCharacters ()
      .then (this.onGetSuccess)
      .catch (this.onGetError);
    })

    console.log(resp)
  }
  onUpdateError = () =>{
    swal("Oh no!", "please check your inputs", "error");
  }

  handelModify =id =>{
    this.setState({toggle:true},()=>{
      let resultsCopy = [...this.state.results];
      let data = resultsCopy.filter (item => item.id === Number (id));
      this.setState (prevState => {
        return {
          ...prevState,
          results: data,
          resultsComp: data.map (this.mapList),
        };
      });
    })
  }
  addCharacter = () => {
    this.props.history.push(`/characters/add`)
  };

  render () {
    return (
      <div>
        <div className ='pa2 fr'>
        <button
          onClick={this.addCharacter}
          className=" pa3 ba b--green bg-lightest-blue"
          >
          Add your own Rick!
        </button>
        </div>
          <h1>LoopUp Character</h1>
        <SearchBox searchField={this.props.searchCharacter} />
        {this.props.character.resultsComp.map(this.mapList)}
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    character:state.character
  }
}

const mapDispatchToProps = {
  getCharachters,searchCharacter
};

export default connect(mapStateToProps,mapDispatchToProps)(Characters);
