import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  render() {
    return (
      <table className='table table-stripped'>
        <thead>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </thead>
        <tbody>
          <Grade />
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
