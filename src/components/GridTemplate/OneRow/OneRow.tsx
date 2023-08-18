import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Socialmedia from './ThirdColumn/SocialMedia'
import './OneRow.css';
import Context from "../ColumnContext/Context"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#EBDDE2' : '#FFF5EE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: 'fit-content',
  width : 'fit-content',
  color: theme.palette.text.secondary,
}));
export default function VariableWidthGrid(props:any) {
  return (
  <div className='Context'> 
    <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={{ xs: 13, md: 5}} columns={{ xs: 1, sm: 8, md: 12 }} direction="row" justifyContent="center" alignItems="center" >
        <Grid item md={8} >
          <Item>
            hagshgsadhgh
          <Context/>
          </Item>
        </Grid>
        <Grid item md={6} >
          <Item><Context/></Item>
        </Grid>
        <Grid item md={12}>
          <Item> <Socialmedia/> </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}