import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';
import RightPane from './RightPane';
import Title from './Title';

class Info extends React.PureComponent {
  static propTypes = {
    cta: PropTypes.string,
    onCtaClick: PropTypes.func.isRequired,
    title: PropTypes.string
  };

  render() {
    const { cta, onCtaClick, title } = this.props;

    return (
      <RightPane>
        <Title>{title || 'Hunted Horse'}</Title>
        {cta && <Link onClick={onCtaClick}>{cta}</Link>}
      </RightPane>
    );
  }
}

export default Info;
