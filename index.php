<html>
    <head>
        <title>Pokemon Partner Picker</title>
        <style>
        @import url("style.css");
        body{
        background: url("wallpaperhw2.jpg");
        }
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>
    $(document).ready(function(){
    $("button").click(function(){
        $("#box").fadeToggle();
        });
    });
    </script>
    </head>
    
    <body>
        <center><h1>Pokemon Partner Picker</h1></center>
         <button>Click to hide or show your pokemon!</button><br><br>
       
        <center><div id="box">
            <script src="script.js"> </script>
        </div></center>
        
        <img src="https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png" class="img-thumbnail" alt="Pikachu">
        <img src="https://img.pokemondb.net/artwork/mudkip.jpg"class="img-circle" alt="mudkip">


    </body>
    <br />
    <br />
    <footer>
    2017 &copy; Kyle Kern.
    <br />
    Disclaimer: All material above is used for teaching purposes.  Information might be inaccurate.
    <br />
   
</footer>
</html>
