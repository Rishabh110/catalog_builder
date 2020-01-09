import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
  border: 'solid 1px rgba(0,0,0,.2)',
  borderRadius: '6px',
  boxShadow: 'none',
  backgroundColor: '#f2f2f2',
  color: '#2e2e2e',
  padding: '4px 10px',
  margin: '16px',
  fontSize: '18px',
};

const Input = (props) => (
  //<input style={styles} value={props.color} onChange={props.handleChange} />
  <TextField
    id="colorInput"
    label="color"
    value={props.color}
    onChange={props.handleChange}
  />
);
export default Input;
