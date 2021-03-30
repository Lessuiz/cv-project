import React from 'react';

export default class Address extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const { id } = this.props;
    return (
        <div className="control">
          <input type="text" placeholder={`Address ${id + 1}:`} className="address input"/>
        </div>
    );
  };
};
