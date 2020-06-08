import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  render() {
    const { grades, removeGrade } = this.props;
    const gradeList = grades.length ? grades.map(item => {
      return (
        <Grade
          key={item.id}
          name={item.name}
          course={item.course}
          grade={item.grade}
          id={item.id}
          deleteGrade={ removeGrade }
        />
      );
    })
      : <tr className='table-light'>
        <td>
          <h3>No grades recorded</h3>
        </td>
      </tr>;
    return (
      <table className='table table-striped col-8'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          { gradeList }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
