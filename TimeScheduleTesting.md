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

