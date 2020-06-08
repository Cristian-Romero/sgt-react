import React from 'react';

class GradeForm extends React.Component {
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
            type='text"'
            value=''
            id='name'
            name='name'
            placeholder='Name'
            className='form-control'/>
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-list-alt' />
            </span>
          </div>
          <input
            type='text"'
            value=''
            id='name'
            course='course'
            placeholder='Name'
            className='form-control' />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className='fas fa-graduation-cap' />
            </span>
          </div>
          <input
            type='text"'
            value=''
            id='name'
            course='course'
            placeholder='Name'
            className='form-control' />
        </div>
        <div>
          <button type='submit' className='btn btn-success'>Add</button>
          <button type='reset' className='btn ml-2 border'>Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
