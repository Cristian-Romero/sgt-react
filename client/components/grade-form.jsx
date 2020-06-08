import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit() {
    const newEntry = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };
    this.props.addNewGrade(newEntry);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleChange(event) {
    const newAddOn = {};
    newAddOn[event.target.name] = event.target.value;
    this.setState(newAddOn);
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className='col-4'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-user' />
            </span>
          </div>
          <input
            type='text'
            value={ this.state.name }
            name='name'
            placeholder='Name'
            onChange={this.handleChange}
            className='form-control'/>
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-list-alt' />
            </span>
          </div>
          <input
            type='text'
            value={ this.state.course }
            name='course'
            placeholder='Course'
            onChange={ this.handleChange }
            className='form-control' />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-graduation-cap' />
            </span>
          </div>
          <input
            type='number'
            value={ this.state.grade }
            name='grade'
            placeholder='Grade'
            onChange={this.handleChange}

            className='form-control' />
        </div>
        <div>
          <button
            type='submit'
            className='btn btn-success'
            onClick={ this.handleSubmit}>Add</button>
          <button type='reset'
            className='btn ml-2 border'
            onClick={ this.handleCancel }>Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
