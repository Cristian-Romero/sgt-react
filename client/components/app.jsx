import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  getAverageGrade() {
    const { grades } = this.state;
    let gradesAdded = 0;
    if (grades.length > 0) {
      for (let k = 0; k < grades.length; k++) {
        gradesAdded += grades[k].grade;
      }
      return Math.ceil(gradesAdded / grades.length);
    }
  }

  addGrade(grade) {
    const newGrade = {
      name: grade.name,
      course: grade.course,
      grade: grade.grade
    };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', req)
      .then(data => data.json())
      .then(grade => this.setState({
        grades: this.state.grades.concat(grade)
      }))
      .catch(err => {
        console.error(err.message);
      });
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(data => data.json())
      .then(grades => this.setState({
        grades
      }))
      .catch(err => {
        console.error(err.message);
      });
  }

  render() {
    return (
      <div className='container'>
        <Header avgGrade={ this.getAverageGrade() }/>
        <div className='row'>
          <GradeTable grades={ this.state.grades }/>
          <GradeForm />
        </div>
      </div>
    );
  }
}

export default App;
