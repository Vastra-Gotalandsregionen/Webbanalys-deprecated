# Prestandabudget och mätbar webbkvalitet för www.vgregion.se
Detta är en överenskommelse kring förvaltningen av Episerver CMS för gränssnittet som utvecklades 2016. [Prestandabudgeten som beslutat dokument lever också ett liv som en bilaga i den regionala stilguiden](http://vastra-gotalandsregionen.github.io/vgr-styleguide/guidelines/prestandabudget/).

Läs nedan krav som att de mäts med representativt innehåll på testsidor utvecklarna tar fram inför avstämning med projektets utsedda webbanalytiker. Dessa testsidor ska inte kunna påverkas nämnvärt av VGR:s redaktörer mellan testtillfällena, de ska vara jämförbara över tid.

En leverans som misslyckas med dessa krav ska inte sättas i produktion och ska inte accepteras av VGR.

## Värderingar, prioriteringar och prestation för hela webbplatsen
 1. Följa designkonventionerna [universell design](https://sv.wikipedia.org/wiki/Universell_design), [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) samt mobile first. Det vill säga fokusera på tillgänglighet först och finess sen, samt att det är det mobila scenariot som sätter behoven kring design och funktion. Det innebär att stödja att användaren ibland tappar anslutning till nätet (så kallad _offline first_).
 2. Form följer funktion, och upplevelsen är viktigare än teknikaliteter. Det vill säga inkluderande design, både för funktionsnedsattas möjlighet att delta men också för att nå så många sorters utrustning som möjligt.
 3. Vid design- eller arkitekturella beslut trumfar W3C:s rekommendation, praxis och framgångskriterier, samt PTS [webbriktlinjer.se](http://webbriktlinjer.se), samtliga av regionens och leverantörernas överväganden och förslag. Nationell och internationell konvention ska agera standard internt.

## Mätbar prestandabudget
1. Max 399kb för en sidvisning.
2. Under 3 sekunder för komplett laddning av sida, mätt från gynnsam trådad uppkoppling. 
3. Under 10 sekunder för komplett laddning av sida mätt på 3G-uppkoppling. 
4. Svarstid på under 0,5 sekunder (definierat som [TTFB](https://en.wikipedia.org/wiki/Time_To_First_Byte)).
5. Speed Index under 2500 _first view_ enligt [WebPagetest.org](https://www.webpagetest.org/), samt under 1500 _repeat view_.
6. Vara snabbare än 80% av sajter testade på [Pingdom Website Speed Test](https://tools.pingdom.com) (mätt från Stockholm), samt endast **Grade A** och **B** i _Performance Insights_.

### Lägstanivå på webb
Dessa punkter beskriver den lägsta accepterade nivå för www.vgregion.se, den nivån får inte försämras under kommande uppdateringar, snarare ska dessa krav skärpas till löpande i samråd med utvecklarna.

Alla mallar/vyer/komponenter i webbplatsen skall som allra minst:

1. Vara testade och säkrade mot WCAG 2 nivå AA.
2. Anses vara mobilvänliga enligt Googles mobilvänlighetstest.
3. Med exempelinnehåll uppvisa minst 85 av 100 i Google Pagespeed med mobila inställningar, och minst 90 för dator.
4. Max 2 CSS-filer laddas in.
5. Max 3 Javascript-filer laddas in.
6. Använda CSS/SVG-sprites (eller motsvarande teknik) för att minska antalet bildfiler att ladda ner.
7. Strukturell CSS-kod inkluderas i HTML-koden enligt god prestanda-praxis för snabb initial visning av innehållet.
8. Fungera utan antagandet att all Javascript nådde fram till användaren. Se värdering om progressive enhancement. Allt väsentligt ska fungera utan Javascript, inte nödvändigtvis på ett identiskt sätt. 

---------------------------------------------------------------
Föreslagen revidering 2016-11-08,
inte beslutad ännu