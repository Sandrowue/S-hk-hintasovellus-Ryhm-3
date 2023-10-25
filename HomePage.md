# HomePage branch
Tässä haarassa on kotisivun mockup-suunnitlemat kuvina ja figma-tiedostona.

## Tietotarpeet
| Tieto | Syöttötapa | Lähde |
|---|---|---|
Sähkön nykyinen tuntihinta | Automaattinen, API | https://porssisahko.net
Tuulen nopeus | Automaattinen | (fiktiivinen esimerkki) https://fmi.fi
Lämpotila | Automaattinen, API | (fiktiivinen esimerkki) https://fmi.fi

Tietovarasto sivun suunnittelun aikana on javascript-sanakirja, jossa arvot on kirjoitettu
suoraan ohjelmakoodiin `app.js`:n reititys-osaan.

> 💡 porssisahko.net- palvelun api palauttaa aikatiedot ISO-standardin mukaisessa muodossa `VVVV-KK-PPTHH:MM:SS:tttZ` kertoo,
> että aikavyöhyke on 0-meridiaanin aika (London Greenwich). Nykyisin vyöhykkeestä käytetään nimitystä UTC (Universal Time Coordinated).
> Aiemmin käytettiin termiä GMT (Greenwich Mean Time). Suomen aika on talvella 2 tuntia edellä ja kesäaikaa käytettäessä 3 tuntia edellä.
> Suomen aikavyöhykkeestä käytetään lyhenne EET (East European Standard Time). Käyttöjärjestelmissä viitataan usein pääkaupunkeihin
> tyylin Helsinki, Vilna, Tallinna, Kiova jne.

# Haarat ja moduulit
Sivujen silällön luomiseksi je renderöimiseksi luodaan omat muduulit. Moduulien nimet ja käyttötarkoitukset ilmenevät seuraavasta taulukosta:

| Tiedosto | Tarkoitus | Tekijä / tekijät |
|---|---|---|
getHomePageData.js | Lukee tietokannasta nykyisen sähkön tuntihinnan, tuulen nopeuden ja lämpötilan. Lämpötila ja tuulli lisätään myöhemmin. | ''
hourlyPageData.js | Lukee tietokannasta päivän tuntihinnat | ''
createGraphics.js | Lukee tietokannasta dataa ja muodostaa kaaviot: päivä, edellinenen viikko, hintakehitys viikko ja kuukausi taaksepäin | ''
