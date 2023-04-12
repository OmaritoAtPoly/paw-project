/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {useKeycloak} from '@react-keycloak/web';
import {setContext} from '@apollo/link-context';
import {AnimatePresence} from 'framer-motion';
import {RouterProvider} from 'react-router-dom';
import {routerElements} from './pages/routes';

const httpLink = new HttpLink({
	uri: 'http://localhost:8089/graphql',
});

const authLink = setContext((_, {headers}) => {
	const token = localStorage.getItem('userToken');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	const {keycloak} = useKeycloak();
	const {token} = keycloak;

	if (token) localStorage.setItem('userToken', token);

	return (
		<AnimatePresence mode='wait'>
			<ApolloProvider client={client}>
				<RouterProvider router={routerElements} />
			</ApolloProvider>
		</AnimatePresence>
	);
}

export default App;
