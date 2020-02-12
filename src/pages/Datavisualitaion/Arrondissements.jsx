import React from 'react';
import PropTypes from 'prop-types';

function Arrondissements({ arrondissements }) {
  return (
    <div className="container__graphe">
      <div className="graphes">
        <div className="background__number"><span>3</span></div>
        <span>
          <h1 className="title">
            {`Paris, ${arrondissements.number} th`}
          </h1>
        </span>
        <div className="barres" />
      </div>
    </div>
  );
}

export default Arrondissements;


Arrondissements.propTypes = {
  arrondissements: PropTypes.shape({
    number: PropTypes.string,
  }),
};


Arrondissements.defaultProps = {
  arrondissements: {
    number: null,
  },
};
