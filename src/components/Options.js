import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
        <button 
        onClick={props.deleteAllOptions}
        className="button button--link"
        >
          Remove All
        </button>
        {props.options.length === 0 && <p>Please add an option to begin.</p>}
        <ul>
          {
            props.options.map((option, index) => {
              return (
                <Option 
                  key={ index } 
                  index={ index } 
                  option={option} 
                  deleteOneOption={props.deleteOneOption}
                />
              )
            })
          }
        </ul>
      </div>
);
 

export default Options;