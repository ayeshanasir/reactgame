import React from 'react';

import './option.styles.scss';

function Option({name}) {
    return (
      <div className="option-div" id={name}>
          <div className="img-div">
            <img src={require(`../../assets/images/icon-${name}.svg`)} alt="{name}" />
          </div>
      </div>
    );
}

export default Option;