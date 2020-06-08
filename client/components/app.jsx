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

  addGrade(newGrade) {
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

  deleteGrade(id) {
    let index;
    for (var k = 0; k < this.state.grades.length; k++) {
      if (id === this.state.grades[k].id) {
        index = k;
      }
    }

    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('./api/grades', req)
      .then(data => data.json)
      .this(() => {
        const updated = this.state.grades.splice();
        updated.splice(index, 1);
        this.setState({
          grades: updated
        });
      })
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
          <GradeTable grades={ this.state.grades }
            removeGrade={ this.deleteGrade }/>
          <GradeForm addNewGrade={ this.addGrade } />
        </div>
      </div>
    );
  }
}

export default App;
