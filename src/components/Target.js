import React from 'react';

class Target extends React.Component {

  constructor() {
  super()
  // this.state = {
  //   knightPosition: [1,7]
  // }
}
render() {

  let color = this.props.backgroundColor
  console.log('color: ', color)

  return (
    <div className="target" style={{backgroundColor:color}}>
      Target
    </div>
  );
}
}

export default Target;
