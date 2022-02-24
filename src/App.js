import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

// commit inicial
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
