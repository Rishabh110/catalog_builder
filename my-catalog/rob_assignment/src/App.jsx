import React, { useState } from 'react';
import './App.css';
import Box from './Box';
import Input from './input';
import MySlider from './slider';

const App = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [opacity, setOpacity] = useState(1);

  const handleChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleOpacity = (e, value) => {
    setOpacity(value);
  };

  return (
    <div className="App">
      <Input color={backgroundColor} handleChange={handleChange}></Input>
      <MySlider opacity={opacity} handleOpacity={handleOpacity} />
      <Box backgroundColor={backgroundColor} opacity={opacity}>
        {backgroundColor}
      </Box>
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleOpacity = this.handleOpacity.bind(this);
//     this.state = { backgroundColor: '', opacity: 1 };
//   }
//   handleChange(e) {
//     this.setState({ backgroundColor: e.target.value });
//   }

//   handleOpacity(e, value) {
//     this.setState({ opacity: value });
//   }

//   render() {
//     const color = this.state.backgroundColor;
//     const opacity = this.state.opacity;
//     return (
//       <div className="App">
//         <Input color={color} handleChange={this.handleChange}></Input>
//         <MySlider opacity={opacity} handleOpacity={this.handleOpacity} />
//         <Box backgroundColor={color} opacity={opacity}>
//           {color}
//         </Box>
//       </div>
//     );
//   }
// }
export default App;
