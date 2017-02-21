$(document).ready(function(){
  $("form#gypsy-survey").submit(function(event){

    var fauxPasCounter = 0;
    var fate = "";

    $("input:checkbox[name=gypsy-faux-pas]:checked").each(function(){
      fauxPasCounter++;
    });

    if (fauxPasCounter === 0) {fate = "have a wonderful day.";}
    else if (fauxPasCounter === 1) {fate = "get an infected hangnail.";}
    else if (fauxPasCounter === 2) {fate = "tear the seat of your pants.";}
    else if (fauxPasCounter === 3) {fate = "contract syphilis.";}
    else if (fauxPasCounter === 4) {fate = "get thinner. Much thinner.";}
    else if (fauxPasCounter === 5) {fate = "choke to death on three pounds of steel.";}
    else {fate = "dissolve in a pool of pus and shit.";}

    $("#fortune").text("You made " + fauxPasCounter + " gypsy faux pas. Based on your responses, you are going to " + fate);
    $("#fortune").show();

    event.preventDefault();
  });
});
