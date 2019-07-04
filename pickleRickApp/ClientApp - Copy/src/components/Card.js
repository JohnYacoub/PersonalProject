import React from 'react';
const Card = props => {
  const handleDelete = () => {
    props.delete (props.Characters.id);
  };

  const handelUpdate = () => {
    props.handelUpdate (props.Characters.id);
  };

  const handelModify = () => {
    props.handelModify (props.Characters.id);
  };

  const handleCancel = () => {
    props.handleCancel (props.Characters.id);
  };
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {props.Characters.isSelected
        ? <div>
            <div className="" data="card info">
              <dl className="lh-title pa4 mt0">
                <div>
                  <img
                    src={props.Characters.image}
                    style={{width: '200px', height: '200px'}}
                    alt="Riq IV"
                    name="image"
                    className="ba"
                  />
                </div>
                <br />
                <dt className="f6 b">Name</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.name}
                    name="name"
                    className="tc ml0"
                  />
                </dd>
                <dt className="f6 b">Status</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.status}
                    name="status"
                    className="tc"
                  />
                </dd>
                <dt className="f6 b">Type</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.type}
                    name="type"
                    className="tc"
                  />
                </dd>
                <dt className="f6 b">Species</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.species}
                    name="species"
                    className="tc"
                  />
                </dd>
                <dt className="f6 b">Gender</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.gender}
                    name="gender"
                    className="tc"
                  />
                </dd>
                <dt className="f6 b">Origin</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.origin}
                    name="origin"
                    className="tc"
                  />
                </dd>
                <dt className="f6 b">Last Location</dt>
                <dd className="ml0">
                  <input
                    id={props.selectedProfile.id}
                    onChange={props.onInputChange}
                    value={props.selectedProfile.location}
                    name="location"
                    className="tc"
                  />
                </dd>
              </dl>

              <button
                className="f6 link dim br1 ph3 pv2 mb2 dib white bg-gold"
                onClick={handelUpdate}
              >
                Change
              </button>
              <button
                className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-red"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        : <div>
            <div className="" data="card info">
              <dl className="lh-title pa4 mt0">
                <div>
                  <img
                    src={props.Characters.image}
                    style={{width: '200px', height: '200px'}}
                    alt="Riq IV"
                    className="ba"
                  />
                </div>
                <br />
                <h3 className="b tc">{props.Characters.name}</h3>
                <dt className="f6 b">Status</dt>
                <dd className="ml0">{props.Characters.status}</dd>
                <dt className="f6 b">Type</dt>
                <dd className="ml0">{props.Characters.type}</dd>
                <dt className="f6 b">Species</dt>
                <dd className="ml0">{props.Characters.species}</dd>
                <dt className="f6 b">Gender</dt>
                <dd className="ml0">{props.Characters.gender}</dd>
                <dt className="f6 b">Origin</dt>
                <dd className="ml0">{props.Characters.origin}</dd>
                <dt className="f6 b">Last Location</dt>
                <dd className="ml0">{props.Characters.location}</dd>
              </dl>
              <button
                className="f6 link dim br1 ph3 pv2 mb2 dib white bg-gold"
                onClick={handelModify}
              >
                Modify
              </button>
              <button
                className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-red"
                onClick={handleDelete}
              >
                Delete
              </button>

            </div>
          </div>}
    </div>
  );
};

export default Card;
