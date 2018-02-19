import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button 
          onClick={props.deleteAllOptions}
          className="button button--link"
          >
            Remove All
          </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to begin.</p>}
        
          {
            props.options.map((option, index) => {
              return (
                <Option 
                  key={ index } 
                  index={ index } 
                  option={option} 
                  count={index + 1}
                  deleteOneOption={props.deleteOneOption}
                />
              )
            })
          }
       
      </div>
);
 

export default Options;