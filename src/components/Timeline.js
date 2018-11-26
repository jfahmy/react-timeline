import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const eventData = (props) =>
  props.events.map((person, index) => {
    return <TimelineEvent
    person={person.person}
    status={person.status}
    timeStamp={person.timeStamp}
    key={index}
    />
})

const Timeline = (props) => {
  console.log(eventData(props))
  return (
    <section className="timeline">
    {eventData(props)}
    </section>
  )
}

export default Timeline;
