function displayHideText(operation){
    console.log(this);
    var element = document.getElementById("gallery");
    var items = element.querySelectorAll(".image-overlay-2");
        items.forEach(function(item){
            if(operation == "display"){
               var affichage = 'none';
            } else{
               var affichage = 'flex';
            }
            item.style.display = affichage; 
        });
    }

