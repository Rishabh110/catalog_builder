import React from 'react';
import Slider from '@material-ui/core/Slider';

const MySlider = (props) => (
  <div style={{ width: 200 }}>
    <Slider
      //defaultValue={30}
      //getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={0.01}
      min={0}
      max={1}
      value={props.opacity}
      onChange={props.handleOpacity}
      width={200}
    />
  </div>
);
export default MySlider;
