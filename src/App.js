import { useState } from 'react';
import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar/index';
import FilesView from './components/filesView/FilesView';

import Patience from './media/patience.jpg';
import { auth, provider } from './firebase';

function App() {
	const [user, setUser] = useState();

	const handleLogin = () => {
		if (!user) {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					setUser(result.user);
					console.log(result.user);
				})
				.catch((error) => {
					alert(error.message);
				});
		} else if (user) {
			auth
				.signOut()
				.then(() => {
					setUser(null);
				})
				.catch((err) => alert(err.message));
		}
	};

	return (
		<div className='App'>
			{user ? (
				<>
					<Header userPhoto={user.photoURL} />
					<div className='app__main'>
						<SideBar />
						<FilesView />
					</div>
				</>
			) : (
				<div className='app__login'>
					<img src={Patience} alt='Patience' style={{ height: '200px' }} />
					<button onClick={handleLogin}>Log into Drive</button>
				</div>
			)}
			{/* header */}

			{/* auth = true */}
			{/* sidebar 
            filesview
            sideicons */}
			{/* no auth */}
		</div>
	);
}

export default App;
