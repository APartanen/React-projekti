import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

//TODO
// - PDF tiedoston tyylittely
// - kaiken tiedon mukaan ottaminen.

const MyDocument = (props) => {
  console.log("props:", props);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    text: {
      fontSize: 25,
    },
  });

  const tekstiosa = "Tämä on testiä";

  let tiedot = props.tiedot;
  const teksti1 = tiedot[0].kenttä1;
  const teksti2 = tiedot[0].kenttä2;
  const teksti3 = tiedot[0].kenttä3;
  const teksti4 = tiedot[0].kenttä4;
  const boxteksti1 = tiedot[0].box1;
  const boxteksti2 = tiedot[0].box2;
  const boxteksti3 = tiedot[0].box3;
  const boxteksti4 = tiedot[0].box4;
  const textarea = tiedot[0].textarea1;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Kirjoitetut tekstit</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">{teksti1}</Text>
          <Text wrap="true">{teksti2}</Text>
          <Text wrap="true">{teksti3}</Text>
          <Text wrap="true">{teksti4}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Laatikko valinnat</Text>
        </View>
        <View style={styles.section}>
          <Text>{boxteksti1}</Text>
          <Text>{boxteksti2}</Text>
          <Text>{boxteksti3}</Text>
          <Text>{boxteksti4}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Tekstialue</Text>
        </View>
        <View style={styles.section}>
          <Text>{textarea}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;