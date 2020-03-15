onmessage = (e)=>{
    var sum =0;
    for(var i=0; i<1000000000; i++) {
        sum+=i;
    }
    postMessage(sum)
}


var map;
        
DG.then(function () {
    map = DG.map('map', {
        center: [55.721775,  37.628559],
        zoom: 16
    });

    DG.popup([55.721775, 37.628559])
        .setLatLng([55.721775, 37.628559])
        .setContent('<div id="module-1-1-4" data-module="firmCallout" class="callout _module_firmCallout _emptyTitle _entrance _wideButton"><address class="callout__address">Щипковский 1-й переулок,&nbsp;1<span class="callout__addressComment"> — 312 офис</span></address><div class="callout__phone">+7 (499) 955‒43‒03</div><div class="callout__workhours"><a href="http://2gis.ru/moscow/firm/70000001030323097/center/37.628559,55.721775/zoom/17?utm_medium=widget&amp;utm_campaign=firmsonmap&amp;utm_source=details" target="_blank" class="link  callout__scheduleToday _scheme_dark">Сегодня выходной</a><div class="callout__scheduleStatus"><span class="callout__schedulStatusText">Откроется завтра в 10:00</span></div></div><ul class="callout__payment"><li class="callout__paymentItem">Наличный расчёт</li><li class="callout__paymentItem">Оплата через банк</li></ul><footer class="callout__footer"><div class="callout__btn _details"><a target="_blank" href="http://2gis.ru/moscow/firm/70000001030323097/center/37.628559,55.721775/zoom/17?utm_medium=widget&amp;utm_campaign=firmsonmap&amp;utm_source=details" class="link  callout__btnIn callout__details _scheme_none">Узнать больше</a></div><div class="callout__btn _entrance"><div class="callout__btnIn callout__entrance">Найти вход</div></div><div class="callout__btn _route"><div id="module-1-1-4-1" data-module="fromTo" class="fromTo _context_callout"><a target="_blank" href="http://2gis.ru/moscow/center/37.61814236640931,55.721775/zoom/16/routeTab/rsType/bus/from/37.628559,55.721775╎Финтегра, компания по продаже готового бизнеса?utm_medium=widget&amp;utm_campaign=firmsonmap&amp;utm_source=route" class="link  fromTo__btn _from _scheme_none">Путь отсюда</a><a target="_blank" href="http://2gis.ru/moscow/center/37.61814236640931,55.721775/zoom/16/routeTab/rsType/bus/to/37.628559,55.721775╎Финтегра, компания по продаже готового бизнеса?utm_medium=widget&amp;utm_campaign=firmsonmap&amp;utm_source=route" class="link  fromTo__btn _to _scheme_none">сюда</a></div></div></footer></div>')
        .openOn(map);
});