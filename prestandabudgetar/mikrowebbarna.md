# Prestandabudget och mätbar webbkvalitet för VGR:s mikrowebbar 
Detta är inledande dokumentation och överenskommelse kring piloterna som kör mikrowebbens mallar i Episerver. Exempelvis [kolskolan.vgregion.se](http://kolskolan.vgregion.se/)

Läs nedan krav som att de mäts med representativt innehåll på testsidor utvecklarna tar fram inför avstämning med regionens utsedda webbanalytiker. Dessa testsidor ska inte kunna påverkas nämnvärt av VGR:s redaktörer mellan testtillfällena, de ska vara jämförbara över tid.

En leverans som misslyckas med dessa krav ska inte sättas i produktion och ska inte accepteras av VGR.

## Prestandabudget
1. Max 399kb för en sidvisning.
2. Under 3 sekunder för komplett laddning av sida, mätt från gynnsam trådad uppkoppling. 
3. Under 10 sekunder för komplett laddning av sida mätt på 3G-uppkoppling. 

## Lägstanivå på webb
Dessa punkter beskriver den lägsta accepterade nivå för mikrowebben, den nivån får inte försämras under kommande uppdateringar, snarare ska dessa krav skärpas till löpande i samråd med utvecklarna.

Alla mallar/vyer i webbplatsen skall som allra minst:

1. Vara testade och säkrade mot WCAG 2 nivå AA.
2. Anses vara mobilvänliga enligt Googles mobilvänlighetstest.
3. Med exempelinnehåll uppvisa minst 75 av 100 i Google Pagespeed med mobila inställningar, och minst 90 för dator.
4. Ha 100 av 100 möjliga i användarupplevelse enligt Google Pagespeed mätt mobilt och dator.
5. Max 2 CSS-filer laddas in.
6. Max 3 Javascript-filer laddas in.
7. Använda CSS Sprites eller motsvarande teknik för att minska antalet bildfiler att ladda ner.

## *Kontroll 2015-12-08*
kolskolan.vgregion.se kontrollerat 2015-12-08 av [Marcus Österberg](https://twitter.com/marcusosterberg), Västra Götalandsregionen, genom stickprov.

Nedsparad dokumentation finns under mappen [/mätningar/kolskolan.vgregion.se](https://github.com/Vastra-Gotalandsregionen/Webbanalys/tree/master/m%C3%A4tningar/kolskolan.vgregion.se)

### Webbtekniska övertrasseringar

- 5 st Javascript-filer, dvs två för mycket. *Förslag: slå samman EmailEncoder-min.js, EmailEncoderDefaultProtector-min.js och vgrmikrowebb.js, behåll piwik.js och jquery.js separata.*
- 79 av 100 i Google Pagespeed Mobile (passerat krav om 75), men 81 av 100 i Desktop med krav om minst 90. *Förslag: börja med redaktionellt fix av bilderna, testa på nytt. Möjligen behöver Piwik läsas in på annat sätt för att inte blockera visningen, vi börjar med bilderna och ser vad som händer.*

### Redaktionella övertrasseringar
- 81 av 100 i Google Pagespeed Desktop med krav om minst 90. *Förslag: Optimera bilderna (sparade för webben, "rätt" storlek, förlustfri komprimering) och ladda upp på nytt.*
- WCAG/tillgänglighet: Ett flertal länkar upprepar länktexten även som alternativtext. *Förslag: Kolla om detta kan styras redaktionellt.*

### Anteckningar/kommentarer/referens
Inladdning av KOL-skolans sidor på trådad uppkoppling tog mellan 0,47-3,07 sekunder, räknat på totaltid enligt [app.telemetry Page Speed Monitor](https://addons.mozilla.org/en-US/firefox/addon/apptelemetry/?src=api). Skillnaderna bedöms bero på om efterfrågad sida redan låg i en cache någonstans. Återbesök till sidor tog ständigt runt 0,5 sekunder.

Simulerad inladdning på Webpagetest.org, inställningar "*Mobile 3G - Fast (1,6Mbps/768 Kbps 150ms RTT)*" tog 5,99 sekunder för full laddning första sidvisningen, 1,46 sekunder för omladdning. Mätt från Dulles, VA. Krav på under 10 sekunder.

För WCAG/tillgänglighet kördes bara automatiska tester. Dels wave.webaim.org men också tenion.io  
Att länken med logotypen inte har en länktext är i vår tolkning ok, baserat på [artikel om alternativtexter hos webaim.org](http://webaim.org/techniques/alttext/).
