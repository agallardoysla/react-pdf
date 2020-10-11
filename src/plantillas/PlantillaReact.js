import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native-web';
import { connect } from 'react-redux';

import { useWindowSize } from '../hooks/useWindowSize';
//import Plantilla from './plantilla1/Plantilla';

const MyDocumentViewer = ({ Plantilla, curriculum }) => {
	let { size, width } = useWindowSize(0.0005);

	//size = width < 500 ? width : size;

	size = { width: size, height: (size * 297) / 210 };

	return (
		<Plantilla curriculum={curriculum} View={View} Text={Text} Image={Image} StyleSheet={StyleSheet} size={size} />
	);
};
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(MyDocumentViewer);
