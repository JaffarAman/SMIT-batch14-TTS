import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack } from "@mui/material";

function App() {
  const [name, setName] = useState("Jaffar");

  return (
    <>
      <h1
        //  className='
        // bg-[#579bcf] hello flex justify-center text-white  font-bold italic      '
        className="hello flex justify-center text-white  font-bold italic "
      >
        HELLO WORLD
      </h1>

      {/* <TextField
        label="Enter Name"
        placeholder="enter user name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // disabled
        color="warning"
      />

      <Button variant="contained" color="warning">
        Contained
      </Button> */}

      {/* <Box
        sx={{
          color: "red",
          display: "flex",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <p>PARA 1</p>
        <p>PARA 2</p>
        <p>PARA 3</p>
      </Box> */}

      <Stack flexDirection={"row"}  sx={{}} >
        <p>PARA 1</p>
        <p>PARA 2</p>
        <p>PARA 3</p>
      </Stack>
    </>
  );
}

export default App;
