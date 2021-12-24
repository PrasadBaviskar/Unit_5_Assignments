import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (n) => {
    if (n === 2) {
      setCount(count * n);
    } else {
      setCount(count + n);
    }
  };

  return (
    <div className="App">
     <Typography component="div" variant="body1">
      <Box sx={{ color: 'primary.main' }}>
          <h1> Counter {count} </h1>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={() => {handleCount(1)}}>Increament</Button>
            <Button variant="outlined" onClick={() => {handleCount(-1)}}>Decreament</Button>
            <Button variant="outlined" onClick={() => {handleCount(2)}}>Double</Button>
          </Stack>
        </Box>
      </Typography>
    </div>
  );
}

export default App;
