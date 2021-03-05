import React from 'react';
import '../../styles/Header.css';

const index = ({ userPhoto }) => {
	return (
		<div className='header'>
			<div className='header__logo'>
				<span>Extra Drive</span>
			</div>

			<div className='header__icons'>
				<img src={userPhoto} alt='User Pic' />
			</div>
		</div>
	);
};

export default index;
