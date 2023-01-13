import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import './counter.css'

function Counter() {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 50,
    duration: 2,
  });

  return (
    <div className='counter'>
      <div className="boxes">
        <div className="box box1">{<CountUp end={100} duration={2} />}</div>
        <div className="box box2" ref={countUpRef}>0</div>
        <div className="box box3"><CountUp
          start={0}
          end={18.01}
          duration={2.75}
          separator=" "
          decimals={3}
          decimal=","
          prefix="₺"
          onEnd={() => console.log('Ended! 👏')}
          onStart={() => console.log('Started! 💨')}>
        </CountUp></div>
      </div>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause & Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(120)}>Update</button>
      </div>
    </div>
  )
}

export default Counter