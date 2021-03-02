import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,

    wordWrap: "break-word",
  },
});

const tekstiosa = "Tämä on testiä";

// Create Document Component
//Hae tiedot ja aseta ne tekstiksi funktiolla?
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text wrap="true">{tekstiosa}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default class PdfCreator extends Component {
  constructor(props) {
    super(props);

    const tiedot = props.array;
    console.log("Tiedot: ", tiedot);
    this.state = { teksti: tiedot };
    //console.log("Teksti: ", props.array);
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <button onClick={() => console.log("Nappi: ", this.state.teksti)}>
          Paina
        </button>
        <PDFViewer height="600" width="400">
          <MyDocument />
        </PDFViewer>
      </div>
    );
  }
}