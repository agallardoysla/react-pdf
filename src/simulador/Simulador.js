/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import { View, Text } from 'react-primitives';
import { TextInput, StyleSheet, View, Text } from 'react-native-web';

import PlantillaReact from '../plantillas/PlantillaReact';
import PlantillaPDF from '../plantillas/PlantillaPDF';

import { actions } from '../redux/reducers';
import Plantilla from '../plantillas/plantilla1/Plantilla';
import { setCurriculum } from '../redux/reducers/Curriculum';

function Simulador(props) {
	const { curriculum } = props;

	useEffect(() => {
		//setCurriculum({ nombre: 'fasdf' });
	}, []);

	const setCurriculum = (state) => {
		props.dispatch(actions.setCurriculum(state));
	};

	return (
		<View
			style={{ justifyContent: 'space-between', paddingHorizontal: '5%', flexDirection: 'row', paddingTop: 50 }}
		>
			<View>
				<Text>Hola</Text>
				<TextInput
					onChangeText={(text) => {
						setCurriculum({ ...curriculum, nombre: text });
					}}
					style={{ backgroundColor: 'red', width: 100, height: 100 }}
				/>
			</View>
			<View>
				<PlantillaReact Plantilla={Plantilla} />
				<PlantillaPDF Plantilla={Plantilla} />
			</View>
		</View>
	);
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Simulador);
