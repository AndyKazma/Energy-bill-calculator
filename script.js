var eCompanies = {
  'PGE': ['Wybierz taryfę', 'C11', 'C12a', 'C12b', 'C12n', 'C12w', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'],
  'TAURON':['Wybierz  taryfę', 'C11', 'C12a', 'C12b', 'C13', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'],
  'ENEA':['Wybierz taryfę', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'C22w', 'B11', 'B12', 'B21', 'B22', 'B23'],
  'ENERGA':['Wybierz taryfę', 'C11', 'C12a', 'C12b', 'C12w', 'C21', 'C22a', 'C22b', 'C23', 'B11', 'B21', 'B22', 'B23'],
  'RWE':['Wybierz taryfę', 'C11', 'C12a', 'C12b', 'C21', 'C22a', 'C22b', 'C23', 'B21', 'B22', 'B23'],
  }
var eMocLow = [5, 10, 15, 20, 25, 30, 35];     
var eMocHigh = [40, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; 

var C11 = {
  PGE:[C11,379.40,21,3.10,0.85,0.17,0.0129,5.1,0.00251],
  TAURON:[C11,338.9,20,2.16,0.85,0.1422,0.0129,4.8,0.00251],
  ENEA:[C11,399.9,28,2.73,0.85,0.1449,0.0129,3.89,0.00251],
  ENERGA:[C11,407,38,4.07,0.85,0.2528,0.0129,3.6,0.00251],
  RWE:[C11,425.2,29.9,3.94,0.85,0.1514,0.0129,2.54,0.00251]
};

var C21 = {
  "PGE":[C21,358.3,70,15.77,0.85,0.1423,0.0129,16,0.00251],
  "TAURON":[C21,335.8,40,7.78,0.85,0.139,0.0129,10,0.00251],
  "ENEA":[C21,380.7,75,11.26,0.85,0.0946,0.0129,15.99,0.00251],
  "ENERGA":[C21,383,78,19.12,0.85,0.1804,0.0129,6.9,0.00251],
  "RWE":[C21,398.7,75.38,9.33,0.85,0.0863,0.0129,6.39,0.00251]
};

var B11 = {
  "PGE":[B11,341.5,70,4.79,2.1,0.09715,0.01294,27,0.00251],
  "TAURON":[B11,311.9,200,3.53,2.1,0.06848,0.01294,25,0.00251],
  "ENEA":[B11,375.6,75,7.69,2.1,0.07286,12.94,19.9,0.00251],
  "ENERGA":[B11,376,205,10.20,2.1,0.09394,0.01294,19,0.00251]
}
var C12a = {
  "PGE":[C12a,513.2,336.1,21,3.15,0.85,0.2381,0.1265,0.0129,5.1,0.00251],
  "TAURON":[C12a,416.4,295.6,20,2.16,0.85,0.171,0.1214,0.0129,4.8,0.00251],
  "ENEA":[C12a,502.4,349.8,28,2.73,0.85,0.1217,0.1217,0.0129,3.89,0.00251],
  "ENERGA":[C12a,482,361,38,4.07,0.85,0.3138,0.0966,0.0129,3.6,0.00251],
  "RWE":[C12a,335,510,29.9,3.94,0.85,0.1786,0.0951,0.0129,2.54,0.00251]
}
var C22a = {
  "PGE":[C22a,452.2,328.1,70,15.78,0.85,0.2323,0.1237,0.0129,16,0.00251],
  "TAURON":[C22a,393.4,299.9,40,7.78,0.85,0.1601,0.1189,0.0129,10,0.00251],
  "ENEA":[C22a,461.5,344.3,75,11.26,0.85,0.0946,0.0946,0.0129,15.99,0.00251],
  "ENERGA":[C22a,475,346,78,19.12,0.85,0.2115,0.1486,0.0129,6.9,0.00251],
  "RWE":[C22a,345.9,495,92.54,9.33,0.85,0.0868,0.0868,0.0129,6.39,0.00251]
}
var B22 = {
  "PGE":[B22,398,308.7,200,9.42,2.1,0.09979,0.04486,0.01294,27,0.00251],
  "TAURON":[B22,369.7,279.4,200,6.96,2.1,0.06426,0.05081,0.01294,25,0.00251],
  "ENEA":[B22,422.2,331.2,200,10.3,2.1,0.04308,0.04308,0.01294,19.9,0.00251],
  "ENERGA":[B22,467,340,205,11.54,2.1,0.09136,0.04726,0.01294,19,0.00251],
  "RWE":[B22,421,352.75,200,6.63,2.1,0.01876,0.01876,0.01294,13.32,0.00251]
}
var C12b = {
  "PGE":[C12b,448.6,319.1,21,3.15,0.85,0.2215,0.0595,0.0129,5.1,0.00251],
  "TAURON":[C12b,426.7,246.4,20,2.16,0.85,0.165,0.115,0.0129,4.8,0.00251],
  "ENEA":[C12b,452.4,305.4,28,2.73,0.85,0.1217,0.1217,0.0129,3.89,0.00251],
  "ENERGA":[C12b,473,322,38,4.07,0.85,0.2713,0.0641,0.0129,3.6,0.00251],
  "RWE":[C12b,328.4,492.1,29.9,3.94,0.85,0.1903,0.0594,0.0129,2.54,0.00251]
}
var C12n = {
  "PGE":[C12n,489.7,292.1,21,2.74,0.85,0.2639,0.0226,0.0129,5.1,0.00251]
}
var C12w = {
  "PGE":[C12w,489.7,292.1,21,2.74,0.85,0.2476,0.0535,0.0129,5.1,0.00251],
  "ENERGA":[C12w,507,316,38,4.07,0.85,0.3662,0.0395,0.0129,3.6,0.00251]
}
var C22b = {
  "PGE":[C22b,393.6,314,70,15.78,0.85,0.1716,0.0382,0.0129,16,0.00251],
  "TAURON":[C22b,375.7,252.8,40,7.78,0.85,0.1599,0.0585,0.0129,10,0.00251],
  "ENEA":[C22b,413.2,281.1,75,11.26,0.85,0.0946,0.0946,0.0129,15.99,0.00251],
  "ENERGA":[C22b,442,264,78,19.12,0.85,0.1807,0.0838,0.0129,6.9,0.00251],
  "RWE":[C22b,283.2,446.5,92.54,9.33,0.85,0.0868,0.0868,0.0129,6.39,0.00251]
}
var C23 = {
  "PGE":[C23,387.8,520.5,315.3,70,15.79,0.85,0.1485,0.2059,0.0458,0.0129,16,0.00251],
  "ENERGA":[C23,493,529,313,78,19.12,0.85,0.192,0.2757,0.0708,0.0129,6.9,0.00251],
  "RWE":[C23,486.3,544.1,339.1,92.54,9.33,0.85,0.0868,0.0868,0.0868,0.0129,6.39,0.00251],
}
var B23 = {
  "PGE":[B23,365.1,432,282.3,200,10.06,2.1,0.05155,0.095,0.0159,0.01294,27,0.00251],
  "TAURON":[B23,383.8,402.9,247.9,200,7.88,2.1,0.05092,0.06649,0.02137,0.01294,25,0.00251],
  "ENEA":[B23,404.8,492.9,300.2,200,10.30,2.1,0.04308,0.04308,0.04308,0.01294,19.9,0.00251],
  "ENERGA":[B23,487,522,309,205,13.04,2.1,0.05236,0.06403,0.02405,0.01294,19,0.00251],
  "RWE":[B23,444,477,323.99,200,6.63,2.1,0.01876,0.01876,0.01876,0.01294,13.32,0.00251]
}

jQuery(function($) {
// dropdown 
  var $enTaryfa = $('#enTaryfa');
  $('#company').change(function () {
  var company = $(this).val(), lcns = eCompanies[company] || ['Wybierz najpierw firmę'];
  var html = $.map(lcns, function(lcn){
      return '<option value="' + lcn + '">' + lcn + '</option>'
    }).join('');
  $enTaryfa.html(html)
  
  $('#enMoc').empty();
  });

  $('#enTaryfa').change(function () {
    $('#enMoc').empty();
    var Taryfa = $(this).val();
    if (Taryfa == 'C11' || Taryfa == 'C12a' ||  Taryfa == 'C12b' ||  Taryfa == 'C12n' ||  Taryfa == 'C12w' ||  Taryfa == 'C13') {
    for (var i=0;i<eMocLow.length;i++){
       $('<option/>').val(eMocLow[i]).html(eMocLow[i]).appendTo('#enMoc');
      }
      } else {
      for (var i=0;i<eMocHigh.length;i++){
        $('<option/>').val(eMocHigh[i]).html(eMocHigh[i]).appendTo('#enMoc');
        }
      }

  if (Taryfa == 'C11' || Taryfa == 'C21' ||  Taryfa == 'B11' ||  Taryfa == 'B21')
  {
    $(".hide2").css("display", "none"); 
    $("#usage2").css("display", "none");
    $(".hide3").css("display", "none"); 
    $("#usage3").css("display", "none"); 
  }
  else if (Taryfa == 'C12a' || Taryfa == 'C22a' ||  Taryfa == 'B22' || Taryfa == 'C12b' || Taryfa == 'C12n' ||  Taryfa == 'C12w' || Taryfa == 'C22b')
  {
    $(".hide2").css("display", "inline"); 
    $("#usage2").css("display", "inline");
  }
  else if (Taryfa == 'C23' || Taryfa == 'B23')
  {
    $(".hide2").css("display", "inline"); 
    $("#usage2").css("display", "inline");
    $(".hide3").css("display", "inline"); 
    $("#usage3").css("display", "inline");     
  }
  });
});

$('#submit').click(function(){
   $('#resultTable').empty();
    var companySel = $("#company").val();
    var taryfaSel = $("#enTaryfa").val();
    var mocSel = $("#enMoc").val();
    var usageSel = $("#usage").val();
    var usageSel2 = $("#usage2").val();
    var usageSel3 = $("#usage3").val();
    var usageSelTotal = parseFloat(usageSel)+parseFloat(usageSel2)+parseFloat(usageSel3);

switch (taryfaSel) { 
  case 'C11': 
    var myArray = C11[companySel];
    break;
  case 'C12a': 
    var myArray = C12a[companySel];
    break;
  case 'C12b': 
    var myArray = C12b[companySel];
    break;    
  case 'C12n': 
    var myArray = C12n[companySel];
    break;
  case 'C12w': 
    var myArray = C12w[companySel];
    break;
  case 'C21': 
    var myArray = C21[companySel];
    break;    
  case 'C22a': 
    var myArray = C22a[companySel];
    break;
  case 'C22b': 
    var myArray = C22b[companySel];
    break;
  case 'C23': 
    var myArray = C23[companySel];
    break;    
  case 'B11': 
    var myArray = B11[companySel];
    break;
  case 'B21': 
    var myArray = B21[companySel];
    break;    
  case 'B22': 
    var myArray = B22[companySel];
    break;
  case 'B23': 
    var myArray = B23[companySel];
    break;
  default:
    alert('Some error? No tarrif.');
    };

  if (taryfaSel == 'C11' || taryfaSel == 'C21' ||  taryfaSel == 'B11' ||  taryfaSel == 'B21')
  {
    var zaCzynna = parseFloat(myArray[1]) * parseFloat(usageSel) / 1000;
    var zaHandlowa = parseFloat(myArray[2]);
    var zaSss1 = parseFloat(myArray[3]* parseFloat(mocSel));
    var zaSop2 = parseFloat(myArray[4]* parseFloat(mocSel)); 
    var zaSop3 = parseFloat(myArray[5]* parseFloat(usageSel));
    var zaZss4 = parseFloat(myArray[6]* parseFloat(usageSel));
    var zaZoa5 = parseFloat(myArray[7]);
    var zaOZE6 = parseFloat(myArray[8]* parseFloat(usageSel));
    var zaAkcyza = parseFloat(usageSel) * 20/1000;  
    var totalEc = zaCzynna + zaHandlowa;    
    var totalDc = zaSss1 + zaSop2 + zaSop3 + zaZss4 + zaZoa5 + zaOZE6 + zaAkcyza; 
    var totalMc = zaCzynna + zaHandlowa + zaSss1 + zaSop2 + zaSop3 + zaZss4 + zaZoa5 + zaOZE6 + zaAkcyza;
  }
  else if (taryfaSel == 'C12a' || taryfaSel == 'C22a' ||  taryfaSel == 'B22' || taryfaSel == 'C12b' || taryfaSel == 'C12n' ||  taryfaSel == 'C12w' || taryfaSel == 'C22b')
  {
    var zaCzynna = parseFloat(myArray[1]) * parseFloat(usageSel) / 1000;
    var zaCzynna2 = parseFloat(myArray[2]) * parseFloat(usageSel2) / 1000;    
    var zaHandlowa = parseFloat(myArray[3]);
    var zaSss1 = parseFloat(myArray[4]* parseFloat(mocSel));
    var zaSop2 = parseFloat(myArray[5]* parseFloat(mocSel)); 
    var zaSop3 = parseFloat(myArray[6]* parseFloat(usageSel));
    var zaSop32 = parseFloat(myArray[7]* parseFloat(usageSel2));    
    var zaZss4 = parseFloat(myArray[8]* parseFloat(usageSelTotal));
    var zaZoa5 = parseFloat(myArray[9]);
    var zaOZE6 = parseFloat(myArray[10]* parseFloat(usageSelTotal));
    var zaAkcyza = parseFloat(usageSelTotal) * 20/1000;  
    var totalEc = zaCzynna + zaCzynna2 + zaHandlowa;    
    var totalDc = zaSss1 + zaSop2 + zaSop3 + zaSop32 + zaZss4 + zaZoa5 + zaOZE6 + zaAkcyza; 
    var totalMc = zaCzynna + zaCzynna2 + zaHandlowa + zaSss1 + zaSop2 + zaSop3 + zaSop32 + zaZss4 + zaZoa5 + zaOZE6 + zaAkcyza;
  }
  else if (taryfaSel == 'C23' || taryfaSel == 'B23')
  {
    var zaCzynna = parseFloat(myArray[1]) * parseFloat(usageSel) / 1000;
    var zaCzynna2 = parseFloat(myArray[2]) * parseFloat(usageSel2) / 1000; 
    var zaCzynna3 = parseFloat(myArray[3]) * parseFloat(usageSel3) / 1000;       
    var zaHandlowa = parseFloat(myArray[4]);
    var zaSss1 = parseFloat(myArray[5]* parseFloat(mocSel));
    var zaSop2 = parseFloat(myArray[6]* parseFloat(mocSel)); 
    var zaSop3 = parseFloat(myArray[7]* parseFloat(usageSel));
    var zaSop32 = parseFloat(myArray[8]* parseFloat(usageSel2)); 
    var zaSop33 = parseFloat(myArray[9]* parseFloat(usageSel3));       
    var zaZss4 = parseFloat(myArray[10]* parseFloat(usageSelTotal));
    var zaZoa5 = parseFloat(myArray[11]);
    var zaOZE6 = parseFloat(myArray[12]* parseFloat(usageSelTotal));
    var zaAkcyza = parseFloat(usageSelTotal) * 20/1000;
    var totalEc = zaCzynna + zaCzynna2 + zaCzynna3 + zaHandlowa;    
    var totalDc = zaSss1 + zaSop2 + zaSop3 + zaSop32 + zaSop33 + zaZss4 + zaZoa5 + zaOZE6 + zaAkcyza; 
    var totalMc = zaCzynna + zaCzynna2+ zaCzynna3 + zaHandlowa + zaSss1 + zaSop2 + zaSop3 + zaSop32+ zaSop33 + zaZss4 + zaZoa5 + zaOZE6 + zaAkcyza;
  }
  else 
  {
     alert('Brakuje taryfy?');
  }

    $("#resultTable").append("<tr><td>Dostawca Energii</td><td>" + companySel + "</td><td></td></tr>");
    $("#resultTable").append("<tr><td>Wybrana taryfa</td><td>" + taryfaSel + "</td><td></td></tr>");
    $("#resultTable").append("<tr><td>Moc umowna</td><td>" + mocSel + " kWh</td><td></td></tr>");

  if (taryfaSel == 'C11' || taryfaSel == 'C21' ||  taryfaSel == 'B11' ||  taryfaSel == 'B21')   
  {    
    $("#resultTable").append("<tr><td>Zużycie miesięczne</td><td>" + usageSel + " kWh/m-c</td><td></td></tr>");
    $("#resultTable").append("<tr class='info'><td>Za Energię</td><td>Stawka (netto)</td><td>Kwota (netto)</td></tr>");
    $("#resultTable").append("<tr><td>Za Energię czynną (zł/Mwh)</td><td>" + myArray[1].toFixed(2) + "</td><td>" + zaCzynna.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Opłata handlowa (zł/mc)</td><td>" + myArray[2].toFixed(2) + "</td><td>" + zaHandlowa.toFixed(2) + "</td></tr>");   
    $("#resultTable").append("<tr class='total'><td>Łącznie za Energię</td><td></td><td>" + totalEc.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr class='info'><td>Za Dystrybucję</td><td></td><td></td></tr>");
    $("#resultTable").append("<tr><td>1. Składnik stały stawki sieciowej (zł/kW/m-c)</td><td>" + myArray[3].toFixed(2) + "</td><td>" + zaSss1.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>2. Stawka opłaty przejściowej (zł/kW/m-c)</td><td>" + myArray[4].toFixed(2) + "</td><td>" + zaSop2.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>3. Składnik zmienny stawki sieciowej (zł/kWh)</td><td>" + myArray[5].toFixed(4) + "</td><td>" + zaSop3.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>4. Stawka jakościowa (zł/kWh)</td><td>" + myArray[6].toFixed(4) + "</td><td>" + zaZss4.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>5. Stawka opłaty abonamentowej (cykl jednomiesięczny)</td><td>" + myArray[7].toFixed(2) + "</td><td>" + zaZoa5.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Stawka opłaty OZE (2,51 zł/MWh)</td><td>" + myArray[8].toFixed(4) + "</td><td>" + zaOZE6.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Akcyza (20,00 zł/MWh)</td><td>20.00</td><td>" + zaAkcyza.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr class='total'><td>Łącznie za Dystrybucję</td><td></td><td>" + totalDc.toFixed(2) + "</td></tr>");    
    $("#resultTable").append("<tr class='info'><td>Łączny rachunek za miesiąc</td><td></td><td>" + totalMc.toFixed(2) + "</td></tr>");
  }
  else if (taryfaSel == 'C12a' || taryfaSel == 'C22a' ||  taryfaSel == 'B22' || taryfaSel == 'C12b' || taryfaSel == 'C12n' ||  taryfaSel == 'C12w' || taryfaSel == 'C22b')
  {
    $("#resultTable").append("<tr><td>Zużycie miesięczne</td><td>" + usageSel + " kWh/m-c</td><td></td></tr>");
    $("#resultTable").append("<tr><td>Zużycie miesięczne</td><td>" + usageSel2 + " kWh/m-c</td><td></td></tr>");    
    $("#resultTable").append("<tr class='info'><td>Za Energię</td><td>Stawka (netto)</td><td>Kwota (netto)</td></tr>");
    $("#resultTable").append("<tr><td>Za Energię czynną (zł/Mwh)</td><td>" + myArray[1].toFixed(2) + "</td><td>" + zaCzynna.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr><td>Za Energię czynną (zł/Mwh)</td><td>" + myArray[2].toFixed(2) + "</td><td>" + zaCzynna2.toFixed(2) + "</td></tr>");     
    $("#resultTable").append("<tr><td>Opłata handlowa (zł/mc)</td><td>" + myArray[3].toFixed(2) + "</td><td>" + zaHandlowa.toFixed(2) + "</td></tr>");   
    $("#resultTable").append("<tr class='total'><td>Łącznie za Energię</td><td></td><td>" + totalEc.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr class='info'><td>Za Dystrybucję</td><td></td><td></td></tr>");
    $("#resultTable").append("<tr><td>1. Składnik stały stawki sieciowej (zł/kW/m-c)</td><td>" + myArray[4].toFixed(2) + "</td><td>" + zaSss1.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>2. Stawka opłaty przejściowej (zł/kW/m-c)</td><td>" + myArray[5].toFixed(2) + "</td><td>" + zaSop2.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>3. Składnik zmienny stawki sieciowej (zł/kWh)</td><td>" + myArray[6].toFixed(4) + "</td><td>" + zaSop3.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>3. Składnik zmienny stawki sieciowej (zł/kWh)</td><td>" + myArray[7].toFixed(4) + "</td><td>" + zaSop32.toFixed(2) + "</td></tr>");     
    $("#resultTable").append("<tr><td>4. Stawka jakościowa (zł/kWh)</td><td>" + myArray[8].toFixed(4) + "</td><td>" + zaZss4.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>5. Stawka opłaty abonamentowej (cykl jednomiesięczny)</td><td>" + myArray[9].toFixed(2) + "</td><td>" + zaZoa5.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Stawka opłaty OZE (2,51 zł/MWh)</td><td>" + myArray[10].toFixed(4) + "</td><td>" + zaOZE6.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Akcyza (20,00 zł/MWh)</td><td>20,00</td><td>" + zaAkcyza.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr class='total'><td>Łącznie za Dystrybucję</td><td></td><td>" + totalDc.toFixed(2) + "</td></tr>");    
    $("#resultTable").append("<tr class='info'><td>Łączny rachunek za miesiąc</td><td></td><td>" + totalMc.toFixed(2) + "</td></tr>");
  }
  else if (taryfaSel == 'C23' || taryfaSel == 'B23')
  {
    $("#resultTable").append("<tr><td>Zużycie miesięczne</td><td>" + usageSel + " kWh/m-c</td><td></td></tr>");
    $("#resultTable").append("<tr><td>Zużycie miesięczne</td><td>" + usageSel2 + " kWh/m-c</td><td></td></tr>");
    $("#resultTable").append("<tr><td>Zużycie miesięczne</td><td>" + usageSel3 + " kWh/m-c</td><td></td></tr>");    
    $("#resultTable").append("<tr class='info'><td>Za Energię</td><td>Stawka (netto)</td><td>Kwota (netto)</td></tr>");
    $("#resultTable").append("<tr><td>Za Energię czynną (zł/Mwh)</td><td>" + myArray[1].toFixed(2) + "</td><td>" + zaCzynna.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Za Energię czynną (zł/Mwh)</td><td>" + myArray[2].toFixed(2) + "</td><td>" + zaCzynna2.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr><td>Za Energię czynną (zł/Mwh)</td><td>" + myArray[3].toFixed(2) + "</td><td>" + zaCzynna3.toFixed(2) + "</td></tr>");    
    $("#resultTable").append("<tr><td>Opłata handlowa (zł/mc)</td><td>" + myArray[4].toFixed(2) + "</td><td>" + zaHandlowa.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr class='total'><td>Łącznie za Energię</td><td></td><td>" + totalEc.toFixed(2) + "</td></tr>");   
    $("#resultTable").append("<tr class='info'><td>Za Dystrybucję</td><td></td><td></td></tr>");
    $("#resultTable").append("<tr><td>1. Składnik stały stawki sieciowej (zł/kW/m-c)</td><td>" + myArray[5].toFixed(2) + "</td><td>" + zaSss1.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>2. Stawka opłaty przejściowej (zł/kW/m-c)</td><td>" + myArray[6].toFixed(2) + "</td><td>" + zaSop2.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>3. Składnik zmienny stawki sieciowej (zł/kWh)</td><td>" + myArray[7].toFixed(4) + "</td><td>" + zaSop3.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>3. Składnik zmienny stawki sieciowej (zł/kWh)</td><td>" + myArray[8].toFixed(4) + "</td><td>" + zaSop32.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr><td>3. Składnik zmienny stawki sieciowej (zł/kWh)</td><td>" + myArray[9].toFixed(4) + "</td><td>" + zaSop33.toFixed(2) + "</td></tr>");    
    $("#resultTable").append("<tr><td>4. Stawka jakościowa (zł/kWh)</td><td>" + myArray[10].toFixed(4) + "</td><td>" + zaZss4.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>5. Stawka opłaty abonamentowej (cykl jednomiesięczny)</td><td>" + myArray[11].toFixed(2) + "</td><td>" + zaZoa5.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Stawka opłaty OZE (2,51 zł/MWh)</td><td>" + myArray[12].toFixed(4) + "</td><td>" + zaOZE6.toFixed(2) + "</td></tr>"); 
    $("#resultTable").append("<tr><td>Akcyza (20,00 zł/MWh)</td><td>20,00</td><td>" + zaAkcyza.toFixed(2) + "</td></tr>");
    $("#resultTable").append("<tr class='total'><td>Łącznie za Dystrybucję</td><td></td><td>" + totalDc.toFixed(2) + "</td></tr>");     
    $("#resultTable").append("<tr class='info'><td>Łączny rachunek za miesiąc</td><td></td><td>" + totalMc.toFixed(2) + "</td></tr>");
  }
  else 
  {
     alert('Brakuje czegoś?');
  }

});