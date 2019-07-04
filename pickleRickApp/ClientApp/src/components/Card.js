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
    props.handleCancel ();
  };
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {props.toggle
        ? <div>
        <div>
          <div>
            <img
              src={props.Characters.image}
              style={{width: '200px', height: '200px'}}
              alt="Riq IV"
              className="ba ma5"
            />
        
          </div><div>
            <h2>    <input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.name}
                    name="name"
                    className="tc"
                  /></h2>
          </div>
        </div>
        <div className="tc" data="card info">
          <div>
            <span>STATUS</span><p><input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.status}
                    name="status"
                    className="tc"
                  /></p>
          </div>
          <div>
            <span>TYPE</span><p><input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.type}
                    name="type"
                    className="tc"
                  /></p>
          </div>
          <div>
            <span>SPECIES</span><p><input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.species}
                    name="species"
                    className="tc"
                  /></p>
          </div>
          <div>
            <span>GENDER</span><p><input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.gender}
                    name="gender"
                    className="tc"
                  /></p>
          </div>
          <div>
            <span>ORIGIN</span>
            <p>
              
                <input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.origin}
                    name="origin"
                    className="tc"
                  />
            </p>
          </div>
          <div>
            <span>LAST LOCATION</span><p><input
                    id={props.Characters.id}
                    onChange={props.onIputChange}
                    value={props.Characters.location}
                    name="location"
                    className="tc"
                  /></p>
          </div>
        
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
            <div>
              <div>
                <img
                  src={props.Characters.image}
                  style={{width: '200px', height: '200px'}}
                  alt="Riq IV"
                  className="ba"
                />

              </div><div>
                <h2>{props.Characters.name}</h2>
              </div>
            </div>
            <div className="tc" data="card info">
              <div>
                <span>STATUS</span><p>{props.Characters.status}</p>
              </div>
              <div>
                <span>TYPE</span><p>{props.Characters.type}</p>
              </div>
              <div>
                <span>SPECIES</span><p>{props.Characters.species}</p>
              </div>
              <div>
                <span>GENDER</span><p>{props.Characters.gender}</p>
              </div>
              <div>
                <span>ORIGIN</span>
                <p>
                  {props.Characters.origin}
                </p>
              </div>
              <div>
                <span>LAST LOCATION</span><p>{props.Characters.location}</p>
              </div>
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
