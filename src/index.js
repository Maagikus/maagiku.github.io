import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Quize from './components/Quize/Quize';
import Header from './components/Header/Header'
import Learn from './components/Learn/Learn'
import {
	Route,
	Routes,
	BrowserRouter as Router
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
// 	<Route exact path="/" element={<App />} />
// ]);

root.render(
	<React.StrictMode>

		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Learn />} />
				<Route path="/quize" element={<Quize />} />
			</Routes>
		</Router>



	</React.StrictMode>
);
