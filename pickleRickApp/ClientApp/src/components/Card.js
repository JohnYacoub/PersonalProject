import React from 'react';
const Card = props => {
    console.log('my props',props)
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div

      >
        <div >
          <img
            src={props.Characters.image}
            style={{width:"200px",height:"200px"}}
            alt="Riq IV"
            className="ba"
          />

        </div><div >
          <h2 >{props.Characters.name}</h2>
          <p >
            {props.Characters.id}
          </p>
        </div>
      </div>
      <div className="tc"
        data="card info"
      >
        <div>
          <span>STATUS</span><p>{props.Characters.status}</p>
        </div>
        <div>
          <span>SPECIES</span><p>{props.Characters.species}</p>
        </div>
        <div >
          <span>GENDER</span><p>{props.Characters.gender}</p>
        </div>
        <div >
          <span>ORIGIN</span><p>{props.Characters.origin.name}</p>
        </div>
        <div>
          <span>LAST LOCATION</span><p>{props.Characters.location.name}</p>
        </div>
        <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black">Modify</button>
        <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black">Delete</button>
      </div>
    </div>
  );
};

export default Card;
