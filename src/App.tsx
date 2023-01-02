import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {routerElements} from './pages/routes';

function App() {
	return (
		<RouterProvider router={routerElements} />
	);
}

export default App;
