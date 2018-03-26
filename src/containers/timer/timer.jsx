import React, {Component} from 'react';
import './timer.css';
import { subscribeToTimer } from '../../api';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

class Timer extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer(1000, (err, timestamp) => this.setState ({
      timestamp
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  };

  componentDidUpdate () {
      console.log(moment(this.state.timestamp).format('LTS'));
  }

  // console.log(this.state.timestamp);

  render () {
    return (
      <div className='timer'>
        <p>Timer: {moment.tz(this.state.timestamp, "America/Chicago").format('LTS')}</p>
      </div>
    );
  }
}

export default Timer;
