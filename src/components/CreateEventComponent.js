'use strict';

import React from 'react';
import withStyles from '../decorators/withStyles';

const s = require('styles/components/CreateEvent.scss');

class CreateEventComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Hello!' };
  }

  nameChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const value = this.state.value;
    return (
      <div className={s.createevent}>
        <input type="text" value={value} onChange={this.nameChange.bind(this)} />
        <b>{value}</b>
      </div>
    );
  }
}

CreateEventComponent.displayName = 'ComponentsCreateEventComponent';

// Uncomment properties you need
// CreateEventComponent.propTypes = {};
// CreateEventComponent.defaultProps = {};

export default withStyles(s)(CreateEventComponent);
