import React from 'react';
import PaddockForm from './paddockForm';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [{x: 0, y: 0}],
      counter: 2
    }
  }
  init() {
    this.state.points.push({x: 0, y: 0});
  }
  handleAddPoint() {
    this.state.points.push({x: 0, y:0});
    this.state.counter++;
    // console.log(this.state.points);
    this.forceUpdate();
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillUnmount() {
    //remove bindings
  }
  componentWillReceiveProps() {

  }
  componentWillUpdate() {
    console.log('component will update');
    console.log(this.state.points);
    console.log(this.state.counter);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <h4>Add Paddock Points</h4>
          <div>
            <PaddockForm 
              addPoint={this.handleAddPoint.bind(this)} 
              count={this.state.counter} 
              points={this.state.points} />
          </div>
        </div>
        <div className="col-md-8">
          <h4>column 2</h4>
        </div>
      </div>
    )
  }
};

export default Home;