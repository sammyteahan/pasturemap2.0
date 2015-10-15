import React from 'react';


class PaddockForm extends React.Component {
  handleSubmit() {
    console.log('submit');
    console.log(this.props.points);
    // console.log(this.refs.x0.getDOMNode().value);
  }
  add() {
    this.props.addPoint();
  }
  // <input type="text" className="form-control" ref={"x"+index} />
  // <input type="text" className="form-control" ref={"y"+index} />
  /**
  *<input type="text" key={index} className="form-control" ref="three" />
                    <input type="text" key={index} className="form-control" ref="four" />
                    <input type="text" key={index} className="form-control" ref="five" />
                    <input type="text" key={index} className="form-control" ref="six" />
  *
  */
  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            {
              this.props.points.map(function(point, index) {
                return (
                  <span>
                    <input type="text" key={"x"+index} className="form-control" ref="one" />
                    <input type="text" key={"y"+index} className="form-control" ref="two" />
                  </span>
                )
              })
            }
          </div>
        </form>
        <div>
          <button className="btn btn-primary" onClick={this.add.bind(this)}>Add</button>
          <button className="btn btn-primary" style={{marginLeft: 10}} onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
};


PaddockForm.propTypes = {
  addPoint: React.PropTypes.func.isRequired,
  count: React.PropTypes.number.isRequired,
  points: React.PropTypes.array.isRequired
};

export default PaddockForm;