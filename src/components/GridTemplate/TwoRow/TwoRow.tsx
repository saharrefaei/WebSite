import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Context from '../ColumnContext/Context'
import './TwoRow.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#EBDDE2' : '#FFF5EE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: 'fit-content',
  color: theme.palette.text.secondary,
}));
export default function ColumnsGrid() {
  return (
    <div className='TwoRow'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={9} columns={16}>
        <Grid item xs={8}>
          <Item>
            <Context/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Context/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Context/>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Context/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Context/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Context/></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}