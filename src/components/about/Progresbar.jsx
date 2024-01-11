import React from 'react'

const Progress_bar = ({progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '150px',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		// margin: 50
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor:'#49b5e7',
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'white',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
