import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  getAverageGrade() {
    const { grades } = this.state;
    let gradesAdded = 0;
    for (let k = 0; k < grades.length; k++) {
      gradesAdded += grades[k].grade;
    }
    return gradesAdded / grades.length;
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
        <Header />
        <div className='row'>
          <GradeTable grades={ this.state.grades }/>
        </div>
      </div>
    );
  }
}

export default App;
