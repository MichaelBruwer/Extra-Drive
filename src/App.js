import { useState } from 'react';
import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar/index';

function App() {
	const [user, setUser] = useState({
		displayName: 'Peter Parker',
		email: 'spiderman@gmail.com',
		emailVerified: true,
		phoneNumber: null,
		photoURL:
			'https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
	});
	//auth

	return (
		<div className='App'>
			{/* header */}
			<Header userPhoto={user.photoURL} />
			<SideBar />
			{/* auth = true */}
			{/* sidebar 
            filesview
            sideicons */}
			{/* no auth */}
		</div>
	);
}

export default App;

// https://www.youtube.com/watch?v=ljuCH6_jrYE  1:42:31
