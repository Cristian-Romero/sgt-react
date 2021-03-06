import React from 'react';

class Grade extends React.Component {

  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.course }</td>
        <td>{ this.props.grade }</td>
        <td>
          <button
            type='button'
            className='btn btn-danger'
            onClick={ () => {
              this.props.deleteGrade(this.props.id);
            }}
          >Delete</button>
        </td>
      </tr>
    );
  }
}

export default Grade;
