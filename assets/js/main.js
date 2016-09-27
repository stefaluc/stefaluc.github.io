window.onload = function() {
	setTimeout(function() {
		document.querySelectorAll('.link')[0].style.opacity = '1';
		document.querySelectorAll('.link')[1].style.opacity = '1';
		document.querySelectorAll('.link')[2].style.opacity = '1';
		document.querySelectorAll('.link')[3].style.opacity = '1';
		document.getElementById('photo').style.opacity = '1';
		document.getElementById('divider').style.width = '50%';
	}, 1000);
}

var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	getInitialState: function() {
		console.log('reached');
		return {
			progression: 0
		};
	},

	next: function() {
		this.setState({
			progression: this.state.progression++
		});
	},

	prev: function() {
		this.setState({
			progression: this.state.progression++
		});
	},

	render: function() {
		var components;
		var state = this.state.progression;

		if(state === 0) {
			components = (
				<div>
				<div className='arrow-container'>
				</div>

				<div id='container'>
					<div id='photo'>
						<img src="../images/me.jpg" />
					</div>
					<h1>Lucas Stefanski</h1>
					<div id="divider"></div>
					<div id="description">
						Studying Computer Science with a Certificate in Mathematics at the University of Wisconsin - Madison. Lover of all things technology, science, and math. Get to know me better at the links below.
					</div>
					<div id="links">
						<div className="link">
					        <a href="../resume.pdf" target="blank"><i className="ion-android-document custom-icon resume"></i></a>
					      	<span className="tooltiptext">Resume</span>
						</div>
						<div className="link">
							<a href="https://github.com/stefaluc" target="blank"><i className="ion-social-github custom-icon github"></i></a>
							<span className="tooltiptext">Github</span>
						</div>
						<div className="link">
					        <a href="mailto:stefaluc000@gmail.com" target="top"><i className="ion-email custom-icon email"></i></a>
					      	<span className="tooltiptext">Email</span>
						</div>
						<div className="link">
							<a href="https://www.linkedin.com/in/lucas-stefanski-364889126" target="blank"><i className="ion-social-linkedin custom-icon linkedin"></i></a>
							<span className="tooltiptext">LinkedIn</span>
						</div>
					</div>
				</div>

				<div className='arrow-container'>
					<div className='arrow-next'></div>
				</div>
				</div>
			);
		}
		console.log(components);
		return components;
	}
});

ReactDOM.render(<Main />, function() {
	console.log('reached');
	document.body;
});
