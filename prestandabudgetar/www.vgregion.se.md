# Prestandabudget och mätbar webbkvalitet för www.vgregion.se
Detta är inledande dokumentation och överenskommelse kring projektet för uppgradering till Episerver CMS samt det nya gränssnittet.

Läs nedan krav som att de mäts med representativt innehåll på testsidor utvecklarna tar fram inför avstämning med projektets utsedda webbanalytiker. Dessa testsidor ska inte kunna påverkas nämnvärt av VGR:s redaktörer mellan testtillfällena, de ska vara jämförbara över tid.

En leverans som misslyckas med dessa krav ska inte sättas i produktion och ska inte accepteras av VGR.

## Värderingar, prioriteringar och prestation för hela webbplatsen
 1. Följa designkonventionerna [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) samt mobile first, det vill säga fokusera på tillgänglighet först och finess sen, samt att det är det mobila scenariot som sätter behoven kring design och funktion.
 2. Funktion före form, och upplevelsen framför teknikaliteter. Det vill säga inkluderande design, både för funktionsnedsattas möjlighet att delta men också för att nå så många sorters utrustning som möjligt.

## Mätbar prestandabudget
1. Max 399kb för en sidvisning.
2. Under 3 sekunder för komplett laddning av sida, mätt från gynnsam trådad uppkoppling. 
3. Under 10 sekunder för komplett laddning av sida mätt på 3G-uppkoppling. 

### Lägstanivå på webb
Dessa punkter beskriver den lägsta accepterade nivå för första iterationen av www.vgregion.se, den nivån får inte försämras under kommande uppdateringar, snarare ska dessa krav skärpas till löpande i samråd med utvecklarna.

Alla mallar/vyer/komponenter i webbplatsen skall som allra minst:

1. Vara testade och säkrade mot WCAG 2 nivå AA.
2. Anses vara mobilvänliga enligt Googles mobilvänlighetstest.
3. Med exempelinnehåll uppvisa minst 85 av 100 i Google Pagespeed med mobila inställningar, och minst 90 för dator.
4. Max 2 CSS-filer laddas in.
5. Max 3 Javascript-filer laddas in.
6. Använda CSS Sprites (eller motsvarande teknik) för att minska antalet bildfiler att ladda ner.
7. Strukturell CSS-kod inkluderas i HTML-koden enligt god prestanda-praxis för snabb initial visning av innehållet.

*// Beslutad 2015-10-06*