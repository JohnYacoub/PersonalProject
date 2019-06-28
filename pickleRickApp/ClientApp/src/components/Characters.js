import React, {Component} from 'react';
import * as CharactersService from '../../src/services/CharactersService';
import Card from './Card';

class Characters extends Component {
  state = {
    info: '',
    infoComp: '',
    results: '',
    resultsComp: '',
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
        results: resp.results,
        resultsComp: resp.results.map (this.mapList),
      };
    }, console.log (resp));
  };

  mapList = item => {
    return <Card Characters={item} key={item.id} />;
  };

  render () {
    return (
<div>{this.state.resultsComp}</div>
    );
  }
}

export default Characters;
