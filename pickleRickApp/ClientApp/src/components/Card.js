import React from 'react';
const Card = props => {
    console.log('my props',props)
  return (
    <article className="characterCard__Wrapper-sc-1ejywvi-0 lkWhZH">
      <div
        data="card header"
        className="characterCard__ImgWrapper-sc-1ejywvi-1 eUyUcB"
      >
        <div className="card-image">
          <img
            src={props.Characters.image}
            alt="Riq IV"
          />

        </div><div className="characterCard__Title-sc-1ejywvi-3 dfWCUu">
          <h2 className="characterCard__Name-sc-1ejywvi-4 ieUvkm">{props.Characters.name}</h2>
          <p className="characterCard__Description-sc-1ejywvi-5 dSyDU">
            {props.Characters.id}
          </p>
        </div>
      </div>
      <div
        data="card info"
        className="characterCard__InfoWrapper-sc-1ejywvi-2 XgbIp"
      >
        <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
          <span>STATUS</span><p>{props.Characters.status}</p>
        </div>
        <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
          <span>SPECIES</span><p>{props.Characters.species}</p>
        </div>
        <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
          <span>GENDER</span><p>{props.Characters.gender}</p>
        </div>
        <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
          <span>ORIGIN</span><p>{props.Characters.origin.name}</p>
        </div>
        <div className="characterCard__TextWrapper-sc-1ejywvi-6 jCIRLJ">
          <span>LAST LOCATION</span><p>{props.Characters.location.name}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
