import React, { Component } from 'react';
import './Aboutme.css';


class About extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.left = React.createRef();
        this.right = React.createRef();
        this.container = React.createRef();
    }
    componentDidMount() {
		console.dir(this.left)
		console.log(this.right)
		console.log(this.container)
        this.left.current.addEventListener("mouseenter", () => {
			this.container.current.classList.add("hover-left");
		  });
		  
		  this.left.current.addEventListener("mouseleave", () => {
			this.container.current.classList.remove("hover-left");
		  });
		  
		  this.right.current.addEventListener("mouseenter", () => {
			this.container.current.classList.add("hover-right");
		  });
		  
		  this.right.current.addEventListener("mouseleave", () => {
			this.container.current.classList.remove("hover-right");
		  });
     }
	render() {
		return (
			<div className="body" >
			<div className="container" ref={this.container}>
				<div className="split left" ref={this.left}>
					<h1>Colorful Side</h1>
					<a href="./projects " className="button">
						Look Closely
					</a>
				</div>
				<div className="split right" ref={this.right}>
					<h1 id="demo">The Dark Side</h1>
					<a href="./resume " className="button">
						Dig Dipper
					</a>
				</div>
			</div>
			</div>
		);
	}
}

export default About;
