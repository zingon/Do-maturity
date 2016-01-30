import React from 'react';

 class Time extends React.Component {

  render() {
    return (
    	<div>
	    	<div>
		    	<strong>{this.props.time.days}</strong>
		    	<span>dnů</span>
	    	</div>
    	<div>
    		<div>
		    	<strong>{this.props.time.hours}</strong>
		    	<span>hodin</span>
	    	</div>
    	</div>
    	<div>
    		<div>
		    	<strong>{this.props.time.minutes}</strong>
		    	<span>minut</span>
	    	</div>
    	</div>
    	<div>
    		<div>
		    	<strong>{this.props.time.seconds}</strong>
		    	<span>vteřin</span>
	    	</div>
    	</div>
    	</div>
    );
  }
}

Time.propTypes = { time: React.PropTypes.object };
export default Time