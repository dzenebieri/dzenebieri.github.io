import html from '../imgs/html.png';
import css from '../imgs/css.png';
import JS from '../imgs/JS.png';
import React from '../imgs/React.png';

function Dev() {
  return (
    <div className='dev'>
      <div>
        <p>HTML</p>
        <img src={html} alt='html' />
      </div>

      <div>
        <p>CSS</p>
        <img src={css} alt='css' />
      </div>

      <div>
        <p>JavaScript</p>
        <img src={JS} alt='JS' />
      </div>

      <div>
        <p>React JS</p>
        <img src={React} alt='React' />
      </div>

      <span> Front-End Web Developer </span>
    </div>
  );
}

export default Dev;
