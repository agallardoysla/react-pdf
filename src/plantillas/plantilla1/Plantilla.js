import React from 'react';

function Plantilla({ curriculum, View, Text, Image, size = {}, StyleSheet }) {
	const styles = StyleSheet.create({
		container: { width: '100%', height: '100%', backgroundColor: 'green' },
	});
	return (
		<View style={[styles.container, size]}>
			<View style={styles.section}>
				<Text style={{ fontSize: '5vw' }}>{curriculum.nombre}</Text>
				<Text style={{ fontSize: '5vw' }}>Section #2</Text>
				<Text style={{ fontSize: '5vw' }}>Section #2</Text>
				<Text style={{ fontSize: '5vw' }}>Section #2</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</View>
	);
}

export default Plantilla;
