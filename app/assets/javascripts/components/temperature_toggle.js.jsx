var TemperatureToggle = React.createClass({
  propTypes:{
    minTempC: React.PropTypes.array,
    minTempF: React.PropTypes.array,
    maxTempC: React.PropTypes.array,
    maxTempF: React.PropTypes.array,
  },

  getInitialState: function(){
    return{ buttonName: "Farenheight"};
  },

  doTemps: function(){
    for (i=0;i<this.props.minTempC.length;i++){
      if (this.state.buttonName == "Farenheight"){
        $("#{i} .lo").text("lo "+this.props.minTempF[i]);
        $("#{i} .hi").text("hi "+this.props.maxTempF[i]);
      } else {
        $("#{i} .lo").text("lo "+this.props.minTempC[i]);
        $("#{i}+ .hi").text("hi "+this.props.maxTempC[i]);
      }

    }
  },

  handleClick: function(){
    if (this.state.buttonName == "Farenheight") {
    this.setState({
      buttonName: "Celsius"
    })} else {
      this.setState({
        buttonName: "Farenheight"
      })
    };
    this.doTemps();
  },



  render: function() {
    buttonValue = this.state.buttonName
    return(
     <div>
       <button onClick={this.handleClick}>{buttonValue}</button>
    </div>
  )}
});
