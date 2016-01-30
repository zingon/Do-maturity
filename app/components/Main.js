import React from 'react';
import Time from './Time'

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			},
			endtime: "2016-6-2 8:0:0 GMT+01:00"
		}
	}
	componentDidMount() {
		setInterval(this.changeTime.bind(this),1000)
	}
	changeTime() {
		let now = new Date();
		let date = Date.parse(this.state.endtime);

		let diff = date-now;
		this.setState({time: {
			seconds: Math.floor( (diff/1000) % 60 ),
			minutes:Math.floor( (diff/1000/60) % 60 ),
			hours:Math.floor( (diff/(1000*60*60)) % 24 ),
			days:Math.floor( diff/(1000*60*60*24) )
		}})
	}
	render() {
	    return (
	    <div id="time">
	    	<h1>Do maturity zbývá...</h1>
	      	<Time time={this.state.time}/>
	    </div>
	    );
	}
}
export default Main