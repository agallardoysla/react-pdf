import React from 'react';
import ReactPDF, {
	Page,
	Text,
	View,
	Image,
	Document,
	StyleSheet,
	PDFDownloadLink,
	BlobProvider,
} from '@react-pdf/renderer';

import DescargarBoton from '../generales/DescargarBoton';
import { connect } from 'react-redux';

//import Plantilla from './plantilla1/Plantilla';

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: 'red',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const Plantilla2 = ({ Plantilla, curriculum }) => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<Plantilla
					curriculum={curriculum}
					View={View}
					Text={Text}
					Image={Image}
					ReactPDF={ReactPDF}
					StyleSheet={StyleSheet}
				/>
			</Page>
		</Document>
	);
};

// Create Document Component
const MyDocument = ({ type = 'blob', Plantilla, curriculum }) => {
	if (type != 'blob') {
		return (
			<BlobProvider style={{}} document={<Plantilla2 Plantilla={Plantilla} />} fileName="somename.pdf">
				{({ blob, url, loading, error }) => {
					return <DescargarBoton url={url} />;
				}}
			</BlobProvider>
		);
	} else {
		return (
			<PDFDownloadLink
				style={{}}
				document={<Plantilla2 curriculum={curriculum} Plantilla={Plantilla} />}
				fileName="somename.pdf"
			>
				{({ blob, url, loading, error }) => {
					return <DescargarBoton url={url} />;
				}}
			</PDFDownloadLink>
		);
	}
};

const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(MyDocument);
