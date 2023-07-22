import { useState } from 'react';
import './listTraining.scss';
import classNames from 'classnames';

export default function ListTraining(props) {
  const [active, setActive] = useState();
  return (
    <div className='list-training'>
      {props.textModal?.map((text, index) => {
        return (
          <h5
            onClick={() => setActive(index)}
            className={classNames({ active: index === active })}
            key={index}>
            {text.primaryText} {text?.secondaryText}
          </h5>
        );
      })}
    </div>
  );
}
