import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <div className='container'>
        <Header />

      </div>
    );
  }
}

export default App;
