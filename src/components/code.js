import React from 'react';
import PropTypes from 'prop-types';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/light';
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import { railscasts } from 'react-syntax-highlighter/styles/hljs';


registerLanguage('javascript', js);

const Code = (props) => {
  const { language, children } = props;
  return (
    <SyntaxHighlighter language={language || 'javascript'} style={railscasts} >
      {children}
    </SyntaxHighlighter>
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

