import React from 'react';

export default class Curriculum extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { values } = this.props;
    console.log(values)

    const addresses = [];
    values.addresses.forEach((address, index) => {
      addresses.push(
        <div key={'adr'+index} className="cv-address column is-full"><i className="fa fa-home"></i>{address}</div>
      );
    });

    const educationList = [];
    values.educations.forEach((education, index) => {
      educationList.push(
        <div key={'edu'+index} className="column cv-edu is-full">
          {education.title}, {education.date} - {education.school} 
        </div>
      );
    });

    const experienceList = [];
    values.experiences.forEach((experience, index) => {
      experienceList.push(
        <div key={'exp'+index} className="column is-full cv-exp">
          {experience.title} at {experience.company} - {experience.date}
          <div className="job-task">
            {experience.tasks}
          </div>
        </div>
      )
    });

    return (
      <div id="app" className="column is-half">
        <div className="columns is-multiline">
          <div className="column is-full personal-info">
            <div className="columns is-vcentered">
              <div className="cv-name column is-half">{values.name}</div>

              <div className="column is-half">
                <div className="columns top-right is-multiline">
                  <div className="cv-phone column is-full">
                    <i className="fa fa-phone"></i>
                    {values.phone}
                  </div>

                  <div className="cv-email column is-full">
                    <i className="fa fa-envelope"></i>
                    {values.email}
                  </div>
                  {addresses}
                </div>
              </div>
            </div>
          </div>
          
          <div className="column is-full education-info">
            <div className="title is-4">Education:</div>
            <div className="columns is-multiline">
              {educationList}
            </div>
          </div>

          <div className="column is-full practical-info">
            <div className="title is-4">Experiences:</div>
            <div className="columns is-multiline">
              {experienceList}
            </div>
          </div>
        </div>
      </div>
    );
  };
};
