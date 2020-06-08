import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header className='mt-4 row align-items-center justify-content-between'>
        <h1 className='col-8'>Student Grade Table</h1>
        <h3 className='col-4'>
          Average Grade<span className="badge badge-secondary ml-2">
            { this.props.avgGrade }
          </span>
        </h3>
      </header>
    );
  }
}

export default Header;
