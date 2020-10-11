import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Simulador from '../src/simulador/Simulador';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

export default function Home() {
	return (
		<Provider store={store}>
			<div className={{ width: '100%' }}>
				<Head>
					<title>Amazing Cv</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Simulador />
			</div>
		</Provider>
	);
}
