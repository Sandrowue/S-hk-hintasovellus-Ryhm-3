# Kokemuksia eri Time Schedule työkaluista

## node-cron

Node ohjelmointiin kehitetty aika-scheduli työkalu. Käyttää samantapaista kaaviota kuin cron. 
Kun kirjaston asennus ja importti on tehty, cron.schedule kommennon jälkeen on sulussa viisi tähtiä, 
josta 1. minuutti, 2.päivän tunti, 3. kuukauden päivä, 4. kuukausi, 5. viikon päivä. 
Jos haluaa voi lisäta alkuun 6. tähden, joka merkitsee sitten sekuntia.

Hyviä puolia
- yksinkertainen scheduli on helppo koodata
- selkeä dokumentaatio ajastamiseen löytyy

Haasteita
- Ei koske välttämättä meidän projektia. Mutta huomasin että jos haluu käyttää samalla tiedostolla
  useampia shedulia ja ne osittain osuu samaan aikaan, sitten silloin kun ne osuu samaan aikaan
  jälkimmäinen sheduli ylikirjoitta ensimmäisen, eikä molemmat suoritu. Voi olla että ongelma olisi
  ratkaistava jos perehtyisi asiaan.

## bree

Bree on suhteellisen uusi js-node schedule kirjasto, mikä on saanut huomioon ottavan vastaanoton.
Kirjasto vaatii asennusta ja importtia(require). Saadakseen kirjaston monipuolisella tavalla toimimaan
kannattaa tehdä juureen jobs nimisen kansion. Jobs kansion alle lisätään tiedosto(-ja) tehtävistä,
jotka voi tulostaa jotain tai suorittaa muita toimintoja.
Toisessa tiedostossa tämän kansion ulkopuolella kutsutaan sitten importin jälkeen muuttujan sisällä
new Bree, ja määritellään siinä minkä jobs kansion tehtävän Bree suorittaa, ja millä aikavälillä.
Key `name:` jälkeen kirjoitetaan sisennysmerkeissä tiedoston nimi mikä on jobs kansion alla, ja sisältää
suorittavaa koodia. Key `interval:` jälkeen kirjoitetaan toivotun aikavälin milloin suoritus tapahtuu.
Breellä pitäisi myös pystyä käyttämään cron muotoa `cron` key avulla, mitä en ole viellä kokeillut.

Hyviä puolia
- schedulit toimivat luetettavasti myös jos on määritelty monta erillisiä tehtäviä perkäkkäin
- kun kerran kansiorakenteen ymmärtää, schedulit ovat suhteellisen helposti ja nopeasti koodattu käyttövalmiiksi.

Haasteita
- Kokeillun console.log in lisäksi ohjelma tulostaa huomautuksia kuten:
  'Worker for job "next" online undefined' ja 'Worker for job "process" exited with code 0 undefined',
  mistä en vielä tiedä mihin ne viittaavat ja miten niitä saadaan pois. Voisin kuvitella että ylimääräiset
  lauseet voisivat jossain tapauksissa saada ohjelman sekaisin.
