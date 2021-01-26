import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <p>Hello, World</p>
        <form>
          <TextField id="standard-basic" label="What's your location?" required />
          <br></br>
          <Button variant="outlined">Search</Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
