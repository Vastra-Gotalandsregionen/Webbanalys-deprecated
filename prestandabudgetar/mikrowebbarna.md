# Prestandabudget och mätbar webbkvalitet för www.vgregion.se 
Detta är inledande dokumentation och överenskommelse kring piloterna som kör mikrowebbens mallar i Episerver. Exempelvis [dialys.vgregion.se](http://dialys.vgregion.se/)

Läs nedan krav som att de mäts med representativt innehåll på testsidor utvecklarna tar fram inför avstämning med regionens utsedda webbanalytiker. Dessa testsidor ska inte kunna påverkas nämnvärt av VGR:s redaktörer mellan testtillfällena, de ska vara jämförbara över tid.

En leverans som misslyckas med dessa krav ska inte sättas i produktion och ska inte accepteras av VGR.

## Prestandabudget
1. Max 399kb för en sidvisning.
2. Under 3 sekunder för komplett laddning av sida, mätt från gynnsam trådad uppkoppling. 
3. Under 10 sekunder för komplett laddning av sida mätt på 3G-uppkoppling. 

## Lägstanivå på webb
Dessa punkter beskriver den lägsta accepterade nivå för första iterationen av www.vgregion.se, den nivån får inte försämras under kommande uppdateringar, snarare ska dessa krav skärpas till löpande i samråd med utvecklarna.

Alla mallar/vyer i webbplatsen skall som allra minst:

1. Vara testade och säkrade mot WCAG 2 nivå AA.
2. Anses vara mobilvänliga enligt Googles mobilvänlighetstest.
3. Med exempelinnehåll uppvisa minst 80 av 100 i Google Pagespeed med mobila inställningar, och minst 90 för desktop.
4. Max 2 CSS-filer laddas in.
5. Strukturell CSS-kod inkluderas i HTML-koden enligt god prestanda-praxis för snabb initial visning av innehållet.
6. Max 2 Javascript-filer laddas in.
7. Använda CSS Sprites eller motsvarande teknik för att minska antalet bildfiler att ladda ner.

Överenskommet 2015-06-xx  
mellan  
Namn Namnsson, Företag  
och  
Marcus Österberg, Västra Götalandsregionen