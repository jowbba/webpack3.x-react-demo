import React from 'react'
import testImage from 'Image/test.jpg'
class Two extends React.Component {
  constructor() {
    super()
    this.state = {
			number: 'two'
		}
	}
	
	render() {
		return (
			<div>
				<h2 className='title'>1this is test component {this.state.number}</h2>
				<img src={testImage} alt="" width='600'/>
			</div>
		)
	}

}

export default Two