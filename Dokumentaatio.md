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
- Jäsenet tutustuivat erillaisiin Time Schedulereihin sähköhintojen ja säätietojen hakuun. Node-cron valittiin sovelluksen käyttöön.
- Jäsenet tutustuivat erillaisiin kirjastoihin, jotka mahtollistavat postresSQL tietokannan ja NodeJS ohjelman välisen yhteyden. Pgadmin valittiin sovelluksen käyttöön.
- Luotiin microservice.js Javascript tiedoston joka tallentaa alustavasti sähköhintoja tietokantaan. Tähän tarkoitukseen käytetään Pgadminin PgPoolia.
- Postmanilla testattiin erillaisie api-rajapinta hakuja Ilmantietolaitokselta jotka esittelevät erillaisia säätietoja xml muodossa.

## Sovelluksen jatkokehitys
- Valitun Figma luonnoksen tarkennettiin ja parannettiin. Eri värivaihtoehtoja testattiin. Lopulliset luonnokset otettiin Bootstrap Studion tuottovaiheen malliksi.
- Luotiin getFmiObservationListData.js Javascript tiedoston
