import React from 'react';
import { Touchable, Text, View } from 'react-native-web';

function DescargarBoton({ url }) {
	return (
		<View
			onClick={() => {
				window.open(url);
			}}
			style={{
				height: 35,
				width: 100,
				backgroundColor: 'green',
				margin: 10,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 5,
			}}
		>
			<Text
				style={{
					color: 'white',
					textDecoration: 'none',
				}}
			>
				Hola
			</Text>
		</View>
	);
}

export default DescargarBoton;
