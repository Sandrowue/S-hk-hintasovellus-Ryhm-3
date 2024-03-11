# Sähkövahti sähköhintaseuranta ja -ennustamisen sovelluksen dokumentaatio

## Tekijäryhmä
Sovelluksen kehittäjinä on tomiminnut:
- Karoliina Bollströn - Ryhmävetäjä käyttöliittymän suunittelu, Figma luonnos ja suunnittelu, käyttöliittymän toteutus Bootstrap Studiolla, CSS, Pgadmin, kokousten kirjanpito
- Dildora Brabova - Figma luonnos, käyttöliittymän toteutus Bootstrap Studiolla, Node Scheduler, SQL taulukkojen kehitys
- Jukka Prami - Figma luonnos, SQL taulukkojen kehitys, Sääasemien kartoittaminen QGIS Desktopilla, ilmatietelaitoksen kysellyt, tekoälyn soveltaminen
- Lotta Hakala - Diagrammikirjaston valinta, valitun Chart.js diagrammien ja kaavioiten soveltaminen käyttöliittymään, käyttöliittymän ulkoasun testaus ja ideointi (parannusehdotuksia)
- Timo Kuukka - Figma luonnos ja suunnittelu, Node Scheduler, Pgadmin, kokousten kirjanpito
- Sandro Wüthrich - Ryhmävetäjä backend ohjelma, Figma luonnos, SQL taulukkojen kehitys, ilmatietelaitoksen kysellyt, tietokannan ja ohjelman välinen yhteys, Dynaamisen Datan renderöinti käyttöliitymään
  Hanldebarsin avulla, kokousten puheenjohtaja

## Sovelluksen luonnosvaihe
- Ryhmän jäsenet tekivät Figmalla erillaisia käyttöliittymän luonnoksia. Luonnokset esitettiin ja vertailtiin. Kokouksessa valittiin mitkä luonnokset jatkokehitetään, ja mitä muutoksia 
  niihin tehdään.
- Luotiin priceService.js Javascript tiedoston lukkoonlyötyjen sähköhintojen hakemiseen.
- Asennettiin PostgresSQL ja kehitettiin sähköhintatietoille sopivia taulukoita ja näkymiä. Alustettiin myös näkymiä sähkön keskihintan laskemiseen, päivältä, viikolta, kuukaudelta tai vuodelta.
- Jäsenet tutustuivat erillaisiin Time Schedulereihin sähköhintojen ja säätietojen hakuun. Node-cron valittiin sovelluksen käyttöön.
- Jäsenet tutustuivat erillaisiin kirjastoihin, jotka mahtollistavat postresSQL tietokannan ja NodeJS ohjelman välisen yhteyden. Pgadmin valittiin sovelluksen käyttöön.
- Luotiin microservice.js Javascript tiedoston joka tallentaa alustavasti sähköhintoja tietokantaan. Tähän tarkoitukseen käytetään Pgadminin PgPoolia. Tämä funktio toimii Crone Schedulen alla.
- Postmanilla testattiin erillaisie api-rajapinta hakuja Ilmantietolaitokselta jotka esittelevät erillaisia säätietoja xml muodossa.
- Kartoitettiin eri sääasemoita jotka tarjoavat säätietoa ympäri suomea ja varsinkin meren rannikkoseudulla.

## Sovelluksen jatkokehitys
- Valitun Figma luonnoksen tarkennettiin ja parannettiin. Eri värivaihtoehtoja testattiin. Lopulliset luonnokset otettiin Bootstrap Studion tuottovaiheen malliksi.
- Kehitettiin ja lisättiin postgresSQL tietokantaan sopivia taulukoita säätiedoille.
- Luotiin getFmiObservationListData.js Javascript tiedoston jonka funktio hakee tämänhetkiset säätiedot yhteenvetossa haluttavalta sääasemalta ja muodostaa niistä objektin, ja lisää ojektin arvot tietokantaan.
- Luotiin getFmiForecastData.js nimisen tiedoston jonka funktio hakee tulevien tuntien ja päivien sääennusteet avainarvoparina ja lisää arvot tietokantaan.
- Importoitiin getFmiObservationListData.js ja getFmiForecastData.js microservice.js tiedostoon, jossa kyseiset funktiot toimii erillisen säätieto-Crone-Schedulen alla.
- Lopullisen Figma luonnosten persusteella kehitettiin Bootstrap Studion avulla graafisen käyttöliittymän koodin.
- Luotiin getPageData.js nimisen Tietoston jonka funktioiden SQL kyselyjen avulla haetaan tietokannasta kukin sivun osion tarvittavat dynaamiset tiedot renderöintiin.
- Valmiit Bootstrap sivunosat exportoitiin VisualStudioCoden, muutettiin ne Handlebars tiedostoksi, ja lisättiin tarvittavat Hanlebarit kohteisin, missä näytetään dynaamista Data.
