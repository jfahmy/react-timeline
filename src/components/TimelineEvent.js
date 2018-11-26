import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
// import timeline from '../data/timeline.js'

const getTimestamp = (props) => {
  return <Timestamp
    time = {props}
  />
}

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <h3 className="event-person">{props.person}</h3>
      <p className="event-status">{props.status}</p>
      <p className="event-time">{getTimestamp(props.timeStamp)}</p>
    </section>
  )
}
export default TimelineEvent;
