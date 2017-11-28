function getRandomFloat(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

       
    var starters1 = ["Charmander","Blubasaur","Squirtle","Rattatta","Eevee","Chikorita","Cyndaquil","Totodile","Maril"];
    var starters2 = ["Treecko","Torchic","Mudkip","Ralts","Turtwig","Chimchar","Piplup","Snivy","Tepig","Oshawott"];
    var pikachu = "Pikachu";
    var rowlett = "Rowlett";
    starters1.push(pikachu);
    starters2.push(rowlett);
    var randostarter1 = starters1[getRandomFloat(0,9)];
    var randostarter2 = starters2[getRandomFloat(0,9)];
    var rannum = getRandomFloat(0,20);
    var rannum2 = getRandomFloat(0,10);
     if(rannum > 10){
         var lines=("| | | | | | | | |\n")
        document.write(lines);
        
    } else{
        var boxes=("[][][][][][][][][]\n");
        document.write(boxes);
     
    }
    for( var i = 0; i < 3; i++){
        document.write('***');
    }
    document.write("\nYour first Pokemon is ");
    document.write(randostarter1);
    document.write(" and your second Pokemon is ");
    document.write(randostarter2)
    document.write("\n");
    for( var i = 0; i < 3; i++){
        document.write('***');
    }
    if(rannum > 10){
        var lines=("| | | | | | | | |\n")
        document.write(lines);
        
    } else{
        var boxes=("[][][][][][][][][]\n");
        document.write(boxes);
    }
