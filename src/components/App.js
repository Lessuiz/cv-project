import React from 'react';
import ReactDOM from 'react-dom';

import Address from './Address';
import Educational from './Educational';
import Job from './Job';
import Curriculum from './Curriculum';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addresses: 1,
      education: 1,
      jobs: 1
    };

    this.onNewAddress = this.onNewAddress.bind(this);
    this.onRemoveAddress = this.onRemoveAddress.bind(this);
    this.onNewEducation = this.onNewEducation.bind(this);
    this.onRemoveEducation = this.onRemoveEducation.bind(this);
    this.onNewJob = this.onNewJob.bind(this);
    this.onRemoveJob = this.onRemoveJob.bind(this);
    this.onCVSubmit = this.onCVSubmit.bind(this);
  };

  onNewAddress() {
    this.setState({
      addresses: this.state.addresses + 1
    });
  };

  onRemoveAddress() {
    this.setState({
      addresses: this.state.addresses - 1
    });
  };

  onNewEducation() {
    this.setState({
      education: this.state.education + 1
    });
  };

  onRemoveEducation() {
    this.setState({
      education: this.state.education - 1
    });
  };

  onNewJob() {
    this.setState({
      jobs: this.state.jobs + 1
    });
  };

  onRemoveJob() {
    this.setState({
      jobs: this.state.jobs - 1
    });
  };

  validate() {
    let valid = false

    const name = document.querySelector('.name');
    if (name.validity.valid) {
      valid = true;
    } else {
      valid = false;
      return false;
    }

    const phone = document.querySelector('.phone-number');
    if (phone.validity.valid) {
      valid = true;
    } else {
      valid = false;
      return false;
    }

    const email = document.querySelector('.email');
    if (email.validity.valid) {
      valid = true;
    } else {
      valid = false;
      return false;
    }

    const addresses = document.querySelectorAll('.address');
    for(let i = 0; i < addresses.length; i++) {
      if (addresses[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };

    const eduTitles = document.querySelectorAll('.title-study');
    for(let i = 0; i < eduTitles.length; i++) {
      if (eduTitles[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };

    const schools = document.querySelectorAll('.school-name');
    for(let i = 0; i < schools.length; i++) {
      if (schools[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };

    const eduDates = document.querySelectorAll('.study-date');
    for(let i = 0; i < eduDates.length; i++) {
      if (eduDates[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };

    const workTitles = document.querySelectorAll('.job-title');
    for(let i = 0; i < workTitles.length; i++) {
      if (workTitles[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };


    const companies = document.querySelectorAll('.company-name');
    for(let i = 0; i < companies.length; i++) {
      if (companies[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };


    const workDates = document.querySelectorAll('.job-date');
    for(let i = 0; i < workDates.length; i++) {
      if (workDates[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };


    const tasks = document.querySelectorAll('.tasks');
    for(let i = 0; i < tasks.length; i++) {
      if (tasks[i].validity.valid) {
        valid = true;
      } else {
        valid = false;
        return valid;
      };
    };


    return valid;
  }

  onCVSubmit() {
    // push field values to an object and render it

    if (this.validate()) {
      const addresses = Array.from(document.querySelectorAll('.address'))
        .map((address) => address.value);

      // create education experience objects
      
      const eduTitles = document.querySelectorAll('.title-study');

      const schools = document.querySelectorAll('.school-name');

      const eduDates = document.querySelectorAll('.study-date');

      const educations = [];

      for(let i = 0; i < this.state.education; i++) {
        educations.push({
          title: eduTitles[i].value,
          date: eduDates[i].value,
          school: schools[i].value
        });
      };

      // create practical experiences object

      const workTitles = document.querySelectorAll('.job-title');

      const companies = document.querySelectorAll('.company-name');

      const workDates = document.querySelectorAll('.job-date');

      const tasks = document.querySelectorAll('.tasks');

      const experiences = [];
      for(let i = 0; i < this.state.education; i++) {
        experiences.push({
          title: workTitles[i].value,
          company: companies[i].value,
          date: workDates[i].value,
          tasks: tasks[i].value
        });
      };    

      const values = {
        name: document.querySelector('.name').value,
        email: document.querySelector('.email').value,
        phone: document.querySelector('.phone-number').value,
        addresses,
        educations,
        experiences
      };
      
      ReactDOM.render(<Curriculum values={values}/>, document.getElementById('root'));
    } else {
      alert('every field is required');
    };
  };

  /* componentDidMount() {
    this.onCVSubmit();
  } */

  render() {
    const { addresses, education, jobs } = this.state;

    // render address fields
    const addressFields = [];
    for(let i = 0; i < addresses; i++) {
      addressFields.push(
        <Address key={'ad'+i} id={i} onButtonClick={this.onNewAddress}/>
      );
    };

    // render education fields
    const eduExp = [];
    for(let i = 0; i < education; i++) {
      eduExp.push(
        <Educational key={'ed'+i}/>
      );
    };

    // render jobs
    const praExp = [];
    for(let i = 0; i < jobs; i++) {
      praExp.push(
        <Job key={'ex'+i}/>
      );
    };
    
    return (
      <div id="app" className="column is-half">
        <div className="project-title">Curriculum Project</div>

        <div className="form columns is-multiline">

          <div className="field column is-full">
            <label className="label">Full name</label>
            <div className="control">
              <input type="text" className="input name" placeholder="Full name" required/>
            </div>
          </div>

          <div className="field column is-half">
            <label className="label">Phone number:</label>
            <div className="control">
              <input type="number" className="input phone-number" placeholder="Phone number" required/>
            </div>
          </div>

          <div className="field column is-half">
            <label className="label">Email:</label>
            <input type="email" placeholder="Email" className="input email" required/>
          </div>
          
          <div className="field column is-full">
            <label className="label">Addresses:</label>
            {addressFields}
            {addresses < 2 ?
              <button className="button" onClick={this.onNewAddress}>+</button> :
              <button className="button" onClick={this.onRemoveAddress}>-</button> }
          </div>

          <div className="field column is-full">
            <label className="label">Educational experience:</label>
            {eduExp}
            {education === 1 ?
            <button className="button" onClick={this.onNewEducation}>+</button> :
            education === 4 ?
              <button className="button" onClick={this.onRemoveEducation}>-</button> :
              <div className="buttons">
                <button className="button" onClick={this.onNewEducation}>+</button>
                <button className="button" onClick={this.onRemoveEducation}>-</button>
              </div>
            }
          </div>

          <div className="field column is-full">
            <label className="label">Pratical experience:</label>
            {praExp}
            {jobs === 1 ?
            <button className="button" onClick={this.onNewJob}>+</button> :
            jobs === 3 ?
            <button className="button" onClick={this.onRemoveJob}>-</button> :
            <div className="buttons">
              <button className="button" onClick={this.onNewJob}>+</button>
              <button className="button" onClick={this.onRemoveJob}>-</button>
            </div>
            }
          </div>
        </div>
        <button className="button is-link" onClick={this.onCVSubmit}>Submit</button>
      </div>
    );
  };
};
