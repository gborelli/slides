import React from 'react';
import PropTypes from 'prop-types';

import Bad from 'react-icons/lib/md/mood-bad';
import Good from 'react-icons/lib/md/mood';


const Level = (props) => {
  const { num } = props;
  const colors = [
    { level: 1, color: '#7d9b4d', type: Good },
    { level: 2, color: '#b5b55a', type: Good },
    { level: 3, color: '#ddbD5a', type: Good },
    { level: 4, color: '#dd9a5a', type: Bad },
    { level: 5, color: '#dd5539', type: Bad },
  ];

  const icons = colors.map(i => (
    React.createElement(i.type, {
      key: i.level,
      style: {
        fill: i.level <= num ? i.color : 'currentColor',
      },
    })
  ));

  return <div>{icons}</div>;
};

Level.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Level;
