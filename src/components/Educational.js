import React from 'react';

export default class Educational extends React.Component {
  render() {
    return (
      <div className="field is-grouped">
        <div className="control">
          <input type="text" placeholder="Title of study" className="title-study input" required/>
        </div>
        <div className="control is-expanded">
          <input type="text" placeholder="School name" className="school-name input" required/>
        </div>
        <div className="control">
          <input type="text" placeholder="Date of study" className="study-date input" required/>
        </div>
      </div>
    );
  };
};
