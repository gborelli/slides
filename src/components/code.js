import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';


const Code = (props) => {
  const { language, children } = props;
  return (
    <Highlight className={language || 'javascript'}>
      {children}
    </Highlight>
  );
};

Code.propTypes = {
  language: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Code.defaultProps = {
  language: 'javascript',
};

export default Code;

