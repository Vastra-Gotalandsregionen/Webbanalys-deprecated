# Prestandabudget och mätbar webbkvalitet för VGR:s sökmotor 
Detta är inledande dokumentation och överenskommelse kring sökmotorns gränssnittskod när den byggs i Episerver. Exempelvis [hitta.vgregion.se](http://hitta.vgregion.se/) kommer att byggas [enligt prototyp från 2014](http://vgr.dev.whitespace.se).

Läs nedan krav som att de mäts med representativt innehåll på testsidor utvecklarna tar fram inför avstämning med regionens utsedda webbanalytiker. Dessa testsidor ska inte kunna påverkas nämnvärt av VGR:s redaktörer mellan testtillfällena, de ska vara jämförbara över tid.

En leverans som misslyckas med dessa krav ska inte sättas i produktion och ska inte accepteras av VGR.

## Prestandabudget
1. Max 199kb för en sidvisning.
2. Under 3 sekunder för komplett laddning av sida, mätt från gynnsam trådad uppkoppling. 
3. Under 10 sekunder för komplett laddning av sida mätt på 3G-uppkoppling. 

## Lägstanivå på webb
Dessa punkter beskriver den lägsta accepterade nivå för sökmotorn, den nivån får inte försämras under kommande uppdateringar, snarare ska dessa krav skärpas till löpande i samråd med utvecklarna.

Alla mallar/vyer i webbplatsen skall som allra minst:

1. Vara testade och säkrade mot WCAG 2 nivå AA.
2. Anses vara mobilvänliga enligt Googles mobilvänlighetstest.
3. Med exempelinnehåll uppvisa minst 85 av 100 i Google Pagespeed med mobila inställningar, och minst 90 för dator.
4. Max 2 CSS-filer laddas in.
5. Max 3 Javascript-filer laddas in.
6. Använda CSS Sprites eller motsvarande teknik för att minska antalet bildfiler att ladda ner.

Prototypen kontrollerad 2015-06-11  
av  Marcus Österberg, Västra Götalandsregionen