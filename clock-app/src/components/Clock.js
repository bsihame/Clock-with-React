import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleDateString()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(new Date().toLocaleString());
      this.setState({time: new Date ().toLocaleTimeString()})
      
    }, 1000)
  }
  componentWillMount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className="clock">
        {this.state.time}
      </div>
    )
  }
}
export default Clock;