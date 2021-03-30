import React from 'react';

export default class Job extends React.Component {
  render() {
    return (
      <div className="field">
        <div className="field is-grouped">
          <div className="control">
            <input type="text" placeholder="Role" className="job-title input" required/>
          </div>
          <div className="control is-expanded">
            <input type="text" placeholder="Company name" className="company-name input" required/>
          </div>
          <div className="control">
            <input type="text" placeholder="Date" className="job-date input" required/>
          </div>
        </div>
        <label className="label">Tasks in the job:</label>
        <div className="control">
          <textarea className="tasks textarea" placeholder="What tasks did you do in this job?" required></textarea>
        </div>
      </div>
    );
  };
};
