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
      padding: 3,
    },
    text: {
      fontSize: 25,
    },
    subtitle: {
      fontSize: 18,
      margin: 10,
    },
    text2: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
    },
  });

  //TODO
  //Kokeile tiedon välitystä samalla tavalla kuin testi sivulle.

  let tiedot = props.tiedot;
  const teksti1 = tiedot.tiedot0.kenttä1;
  const teksti2 = tiedot.tiedot0.kenttä2;
  const teksti3 = tiedot.tiedot0.kenttä3;
  const teksti4 = tiedot.tiedot0.kenttä4;
  const boxteksti1 = tiedot.tiedot0.box1;
  const boxteksti2 = tiedot.tiedot0.box2;
  const boxteksti3 = tiedot.tiedot0.box3;
  const boxteksti4 = tiedot.tiedot0.box4;
  const textarea = tiedot.tiedot0.textarea;

  //Lomakkeen tiedot
  const perehdytettävä = tiedot.tiedot1.perehdytettävä;
  const perehdyttäjä = tiedot.tiedot1.perehdyttäjä;
  const yrityksen_nimi = tiedot.tiedot1.yrityksen_nimi;
  const yrityksen_osoite = tiedot.tiedot1.yrityksen_osoite;
  const yrityksen_num = tiedot.tiedot1.yrityksen_num;
  const yrityksen_faksi = tiedot.tiedot1.yrityksen_faksi;
  const yrityksen_sposti = tiedot.tiedot1.yrityksen_sposti;
  const yrityksen_verkko = tiedot.tiedot1.yrityksen_verkko;
  const työpaikan_nimi = tiedot.tiedot1.yrityksen_nimi;
  const työpaikan_katuosoite = tiedot.tiedot1.työpaikan_katuosoite;
  const työpaikan_num = tiedot.tiedot1.työpaikan_num;
  const työpaikan_sposti = tiedot.tiedot1.työpaikan_sposti;
  const kuvaus = tiedot.tiedot1.kuvaus;
  const alkupvm = tiedot.tiedot1.alkupvm;
  const loppupvm = tiedot.tiedot1.loppupvm;

  //Lomakkeen1 tiedot
  //1 on organisaatio ja henkilöstö, 2 on yrityksen toimintavat
  const organisaatio1 = tiedot.tiedot2.kenttä1;
  const organisaatio2 = tiedot.tiedot2.kenttä2;

  //Lomakkeen2 tiedot // HUOM MONI VALINTA BOXIT PITÄÄ VAIHTAA RADIOBUTTONIEN TYYPPISIKSI TAI AINAKIN TIEDON MERKITSEMINEN VAIN YHDELLE MUUTTUJALLE
  const tunnit = tiedot.tiedot3.tunnit;
  const palkka = tiedot.tiedot3.palkka;
  const työsuhde = tiedot.tiedot3.työsuhde;
  const työterveys = tiedot.tiedot3.työterveys;
  const box1 = tiedot.tiedot3.box1;
  const box2 = tiedot.tiedot3.box2;
  const box3 = tiedot.tiedot3.box3;
  const box4 = tiedot.tiedot3.box4;
  const box5 = tiedot.tiedot3.box5;
  const alkupvm_lomake2 = tiedot.tiedot3.alkupvm;
  const loppupvm_lomake2 = tiedot.tiedot3.loppupvm;

  //Lomakkeen9 tiedot
  const työpaikan_tilat = tiedot.tiedot4.työpaikan_tilat;
  const Turvallisuusasiat = tiedot.tiedot4.Turvallisuusasiat;

  //Lomakkeen3 tiedot
  const nimike = tiedot.tiedot5.nimike;
  const tehtävat = tiedot.tiedot5.tehtävat;
  const suunnittelu = tiedot.tiedot5.suunnittelu;
  const merkitys = tiedot.tiedot5.merkitys;
  const työvalineet = tiedot.tiedot5.työvalineet;
  const ergonomia = tiedot.tiedot5.ergonomia;
  const elpyminen = tiedot.tiedot5.elpyminen;
  const kehitys = tiedot.tiedot5.kehitys;
  const viat = tiedot.tiedot5.viat;
  const muutTilat = tiedot.tiedot5.muutTilat;
  const lisätiedot = tiedot.tiedot5.lisätiedot;

  //Lomakkeen4 tiedot
  const aineisto = tiedot.tiedot6.aineisto;
  const keskustelut = tiedot.tiedot6.keskustelut;
  const koulutus = tiedot.tiedot6.koulutus;
  const ilmoitukset = tiedot.tiedot6.ilmoitukset;
  const tes = tiedot.tiedot6.tes;
  const kirjallisuus = tiedot.tiedot6.kirjallisuus;

  //Lomakkeen5 tiedot
  const virkistys = tiedot.tiedot7.virkistys;
  const työkyky = tiedot.tiedot7.työkyky;
  const vakuutus = tiedot.tiedot7.vakuutus;
  const henkilöstoedut = tiedot.tiedot7.henkilöstoedut;
  const asuminen = tiedot.tiedot7.asuminen;

  //Viimestely sivua ei lisätty

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Kirjoitetut tekstit</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">{teksti1}</Text>
          <Text wrap="true">{teksti2}</Text>
          <Text wrap="true">{teksti3}</Text>
          <Text wrap="true">{teksti4}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Laatikko valinnat</Text>
        </View>
        <View style={styles.section}>
          <Text>{boxteksti1}</Text>
          <Text>{boxteksti2}</Text>
          <Text>{boxteksti3}</Text>
          <Text>{boxteksti4}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Tekstialue</Text>
        </View>
        <View style={styles.section}>
          <Text>{textarea}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 1: Perustiedot</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Perehdytettävä</Text>
          <Text wrap="true">{perehdytettävä}</Text>
          <Text wrap="true">Perehdyttäjä</Text>
          <Text wrap="true">{perehdyttäjä}</Text>
          <Text wrap="true">Perehdystys alkaa</Text>
          <Text wrap="true">{alkupvm}</Text>
          <Text wrap="true">Perehdystys päättyy</Text>
          <Text wrap="true">{loppupvm}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Yrityksen tiedot:</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Nimi</Text>
          <Text wrap="true">{yrityksen_nimi}</Text>
          <Text wrap="true">Katuosoite</Text>
          <Text wrap="true">{yrityksen_osoite}</Text>
          <Text wrap="true">Puhelin</Text>
          <Text wrap="true">{yrityksen_num}</Text>
          <Text wrap="true">Faksi</Text>
          <Text wrap="true">{yrityksen_faksi}</Text>
          <Text wrap="true">Sähköposti:</Text>
          <Text wrap="true">{yrityksen_sposti}</Text>
          <Text wrap="true">Verkkosivut</Text>
          <Text wrap="true">{yrityksen_verkko}</Text>
          <Text wrap="true">Kuvaus</Text>
          <Text wrap="true">{kuvaus}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Työpaikan tiedot:</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Nimi</Text>
          <Text wrap="true">{työpaikan_nimi}</Text>
          <Text wrap="true">Katuosoite</Text>
          <Text wrap="true">{työpaikan_katuosoite}</Text>
          <Text wrap="true">Puhelin</Text>
          <Text wrap="true">{työpaikan_num}</Text>
          <Text wrap="true">Sähköposti</Text>
          <Text wrap="true">{työpaikan_sposti}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>
            LOMAKE 2: Yrityksen organisaatio ja toimintatavat
          </Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Yrityksen organisaatio ja henkilöstö</Text>
          <Text wrap="true">{organisaatio1}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Toimintatavat yrityksessä</Text>
          <Text wrap="true">{organisaatio2}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 3: Työsopimus</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Sopimuksen tyyppi:</Text>
          <Text wrap="true">{box1}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Kesto</Text>
          <Text wrap="true">
            {alkupvm_lomake2} - {loppupvm_lomake2}
          </Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Tuntien määrä/viikko</Text>
          <Text wrap="true">{tunnit}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työaika:</Text>
          <Text wrap="true">{box4}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Palkka-asiat</Text>
          <Text wrap="true">{palkka}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työsuhteen päättyminen</Text>
          <Text wrap="true">{työsuhde}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Terveyshuolto</Text>
          <Text wrap="true">{työterveys}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 9: Työympäristö</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työpaikan tilat, työskentely-ympäristö</Text>
          <Text wrap="true">{työpaikan_tilat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Turvallisuusasiat, omaisuuden suojaus</Text>
          <Text wrap="true">{Turvallisuusasiat}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 3: Työtehtävät</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Nimike</Text>
          <Text wrap="true">{nimike}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Keskeiset tehtävät ja vastuualueet</Text>
          <Text wrap="true">{tehtävat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työnsuunnittelu, tavoitteet ja laatu</Text>
          <Text wrap="true">{suunnittelu}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Työn merkitys kokonaisuuteen, sisäinen yhteistyö
          </Text>
          <Text wrap="true">{merkitys}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Koneet, laitteet, työvälineet, huolto</Text>
          <Text wrap="true">{työvalineet}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työergonomia</Text>
          <Text wrap="true">{ergonomia}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Elpyminen, työn vastaliikkeet</Text>
          <Text wrap="true">{elpyminen}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Tehtävän kehittäminen ja riskitekijät</Text>
          <Text wrap="true">{kehitys}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Epäkohdista ja viosta ilmoittaminen</Text>
          <Text wrap="true">{viat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Työskentely asiakkaan tai toisen työnantajan tiloissa
          </Text>
          <Text wrap="true">{muutTilat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Mistä ja/tai keneltä lisätietoa tehtävästä ja tukea työskentelyyn
          </Text>
          <Text wrap="true">{lisätiedot}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 4: Tehtävään haku</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Perehdyttämisaineisto ja sen käyttö</Text>
          <Text wrap="true">{aineisto}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Palautekeskustelut perehdyttäjän ja/tai esimiehen kanssa ja
            perehdyttämisen arviointi
          </Text>
          <Text wrap="true">{keskustelut}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Koulutusmahdollisuudet</Text>
          <Text wrap="true">{koulutus}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Ilmoitustaulu, palaverit, tiedotteet, intranet
          </Text>
          <Text wrap="true">{ilmoitukset}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työehtosopimus, lait, asetukset ja ohjeet</Text>
          <Text wrap="true">{tes}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Ammattikirjallisuus ja -lehdet</Text>
          <Text wrap="true">{kirjallisuus}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 5: Muut asiat</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Harrastus- ja virkistysmahdollisuudet</Text>
          <Text wrap="true">{virkistys}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työ- ja toimintakyvyn ylläpito</Text>
          <Text wrap="true">{työkyky}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Vakuutus- ja eläkeasiat</Text>
          <Text wrap="true">{vakuutus}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Muut henkilöstöpalvelut ja edut</Text>
          <Text wrap="true">{henkilöstoedut}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työsuhdeasuminen</Text>
          <Text wrap="true">{asuminen}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;