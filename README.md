# Recommender demo 

Repozitorij za frontback-end sustava za preporučavanje slika na temelju njihovog sadržaja. Poslužitelj je pisan u `JavaScript` programskom jeziku (`npm` verizije 5.6.0 i `node` verzije 8.11.1), a oslanja se na `Angular 5` (5.2.8) radni okvir. 

Razvijani sustav se sastoji od [SPA](https://en.wikipedia.org/wiki/Single-page_application "Single Page Application") klijenta,
[REST API](https://en.wikipedia.org/wiki/Representational_state_transfer "Representational state transfer") poslužitelja i [AWS S3](https://aws.amazon.com/s3/ "Amazon Web Services Simple Storage Service") usluge za pohranu i posluživanje podataka.

## Postavljanje

Instrukcije za postavljanje pisane su za Linux ( Ubuntu 16.04.4 LTS ). Korisnici drugih operacijskih sustava mogu pronaći ekvivalentne naredbe za svoja računala na webu.

### Preuzimanje 

Kod ovog poslužitelja može se preuzeti putem komandne linije na računalu koje ima postavljen git sustav za verzioniranje idućim naredbama: 

```
mkdir -p ~/Documents/gitrepos && cd "$_"
git clone https://github.com/vribic/recommender-demo.git && cd recommender-demo/
```

Alternativno kod je moguće preuzeti kao .zip datoteku pritiskom na gumb `Clone or download` te `Downlaod ZIP`.

### Konfiguracija

Nakon što je kod preuzet potrebno je instalirati pakete za razvoj koda i pokretanje finalne verzije. Radi lakšeg korištenja na ovom i drugim projektima par paketa instalirano je na globalnoj razini sustava. To su paketi:

```
@angular-devkit/core@0.4.5
@angular/cli@1.7.3
@angular/core@5.2.8
npm@5.6.0
rxjs@^5.5.0
typescript@2.7.2
webpack@4.1.1
zone.js@^0.8.4
```

Njih je moguće instalirati putem naredbe (npr. za prvi paket): 

`npm install -g @angular-devkit/core@0.4.5`

Zatim je potreno instalirati sve preostale pakete koji se nalaze u `package.json` datoteci pokretanjem: 

`npm init`

Prije nego što se aplikacija može pokrenuti potrebno je uvjeriti se da su ispravno postavljene adrese back-enda i Amazon servisa. Te se adrese mogu pronaći u `./src/app/appSettings.ts`. 

### Pokretanje

Jednom kad su svi paketi postavljeni i datoteke konfigurirane sve što preostaje je pokrenuti poslužitelja aplikacije. Iako je moguće koristiti node i naredbu `node serve.js`, za Angular aplikaciju preporuka je koristiti: 

```
ng serve
```

Odlaskom na adresu `localhost:4200/` možete pristupiti web stranici.

## O projektu

Repozitorij je dio projekta razvijanog za Rektorovu nagradu 2017./18 pod nazivom "Ekstrahiranje značajki slika pomoću dubokog učenja u svrhu poboljšanja sustava preporuke slika".

Autori projekta su [Toni Vlaić](https://github.com/Mungosin) i [Viran Ribić](https://github.com/vribic), pod vodstvom mentora prof. dr. [Marin Šilić](https://www.fer.unizg.hr/marin.silic). 

## Vanjski linkovi

Repozitorij back-end koda aplikacije : [link](https://github.com/vribic/recommender-demo-api)

Repozitorij teksta rada : [link](https://github.com/Mungosin/Rektorova)

Link na web aplikaciju posluženu na Heroku platformi : [demo aplikaicije](https://recommender-demo.herokuapp.com).
