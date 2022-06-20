function calendar() {

    var NomMois= ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre'];
    var NomJours= ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
    var NumJours= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var today= new Date();
    var thisDay= today.getDate();
    var year= today.getYear();
    year <= 200 ? year += 1900 : null;

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            NumJours[1] = 29;
    }
    var nDays= NumJours[today.getMonth()];
    var firstDay= today;
    firstDay.setDate(0);

    firstDay.getDate() == 2 ? firstDay.setDate(0) : null;
    
    var startDay = firstDay.getDay();
    
    var tb= document.createElement('table');
    
    var tbr= tb.insertRow(-1);

    var tbh= document.createElement("th");
    tbh.setAttribute('colspan','7');
    var tbhtxt= document.createTextNode(NomMois[today.getMonth()+1]+' '+year);
    tbh.appendChild(tbhtxt);

    tbr.appendChild(tbh);

    var tbr=tb.insertRow(-1);

    for(var i=0 ;i<NomJours.length ; i++){

            tbr.insertCell(-1).appendChild(document.createTextNode(NomJours[i]));
    }

    var tbr= document.createElement("tr");

    var column= 0;

    for (var i= 0; i < startDay; i++) {
            tbr.insertCell(0);
            column++;
    }

    for (var i = 1; i <= nDays; i++) {
    
            var tdd= tbr.insertCell(-1);

            i == thisDay ? tdd.style.color="#44df07" : null;

            tdd.appendChild(document.createTextNode(i));

            column++;
            if (column == 7) {
                    tb.appendChild(tbr);
                    var tbr=document.createElement("tr");
                    column = 0;
            }

            i == nDays ? tb.appendChild(tbr) : null;

    }
    document.getElementById('contcalendar').appendChild(tb);
}
typeof window.addEventListener == 'undefined' ? window.attachEvent("onload",calendar) : addEventListener('load',calendar,false);