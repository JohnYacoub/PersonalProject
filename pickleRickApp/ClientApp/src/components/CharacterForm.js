import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import * as CharactersService from '../../src/services/CharactersService';

class CharacterForm extends React.Component {
  state = {
    name: '',
    image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/07/28/recaps/28-rick-and-morty-302.w700.h700.jpg',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    type:''
  };

  updateInput = e => {
    let name = e.target.name;
    let key = e.target.value;
    this.setState ({[name]: key});
  };
  handleSubmit = () => {
    let data = this.state;
    console.log (data);
    CharactersService.addCharacter (data)
      .then (this.onSubmitSuccess)
      .catch (this.onSubmitError);
  };

  onSubmitSuccess =()=>{
    this.props.history.push(`/characters`)
  }

  render () {
    const {name, status, species, gender, origin, location, type} = this.state;
    return (
      <div className="bg-light-green dib br3 pt3 pb3 pr4 pl3 ma2 bw2 shadow-5">
        <div>
          <FormGroup>
            <Label labelfor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            />
          </FormGroup>
          <FormGroup>
            <Label labelfor="status">Status</Label>
            <Input
              type="text"
              name="status"
              value={status}
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            />
          </FormGroup>
          <FormGroup>
            <Label labelfor="species">Species</Label>
            <Input
              type="text"
              name="species"
              value={species}
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            />
          </FormGroup>
          <FormGroup>
            <Label labelfor="name">Type</Label>
            <Input
              type="text"
              name="type"
              value={type}
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            />
          </FormGroup>
          <FormGroup>
            <Label labelfor="gender">Gender</Label>
            <Input
              type="select"
              value={gender}
              name="gender"
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label labelfor="origin">Origin</Label>
            <Input
              type="text"
              name="origin"
              value={origin}
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            />
          </FormGroup>
          <FormGroup>
            <Label labelfor="location">Location</Label>
            <Input
              type="text"
              name="location"
              value={location}
              className="br3 pr5 ma2 bw2"
              onChange={this.updateInput}
            />
          </FormGroup>
          <button
            className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-red"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default CharacterForm;
