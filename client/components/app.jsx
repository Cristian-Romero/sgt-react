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
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  getAverageGrade() {
    const { grades } = this.state;
    let gradesAdded = 0;
    if (grades.length > 0) {
      for (let k = 0; k < grades.length; k++) {
        gradesAdded += grades[k].grade;
      }
      return Math.ceil(gradesAdded / grades.length);
    } else {
      return 'N/A';
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

  deleteGrade(gradeId) {
    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`api/grades/${gradeId}`, req)
      .then(data => data.json())
      .then(() => this.setState({
        grades: this.state.grades.filter(item => gradeId !== item.id)
      }));

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
