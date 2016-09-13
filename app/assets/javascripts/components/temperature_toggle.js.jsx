var TemperatureToggle = React.createClass({
  propTypes:{
    minTempC: React.PropTypes.array,
    minTempF: React.PropTypes.array,
    maxTempC: React.PropTypes.array,
    maxTempF: React.PropTypes.array,
  },

  handleClick: function(){
    alert("Clicked");
  },

  render: function() {
    return(
     <div>
       <p>units: F</p>
       <label className="switch" >
         <input type="checkbox" value="test" onMouseUp= {this.handleClick()}/>
         <div className="slider" ></div>
       </label>
       <p>C</p>
    </div>
  )}
});
