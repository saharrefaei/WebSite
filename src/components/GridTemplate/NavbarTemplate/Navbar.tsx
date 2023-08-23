import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function ButtonAppBar(label: string) {
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:"black"}} >
    <AppBar position="static">
      <Toolbar>
      <IconButton
       size="small"
       aria-label="add"
       sx={{display: "flex", justifyContent: "unset",width:"10rem"}}>
       <MenuIcon />
       </IconButton>
       <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
       {label}
       </Typography>
        <Button color="inherit" style={{display: "flex", justifyContent: "unset" , width :"10rem"}}>Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#FFF5EE',
    },
  },
});
export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {ButtonAppBar('50Hertz')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}