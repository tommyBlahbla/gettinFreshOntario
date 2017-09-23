
var d = new Date();
var currentMonth = (d.getMonth());


    //currentMonth = 5;

    var fruits = '{"fruits": [ {"fruitName": "apples", "fruitUrl": "1", "avail":"111110111111"}, {"fruitName": "apricots", "fruitUrl": "1", "avail":"000000110000"}, {"fruitName": "blueberries", "fruitUrl": "1", "avail":"000000111000"}, {"fruitName": "cherries", "fruitUrl": "1", "avail":"000001100000"}, {"fruitName": "cranberries", "fruitUrl": "1", "avail":"000000000100"}, {"fruitName": "currants", "fruitUrl": "1", "avail":"000000110000"}, {"fruitName": "gooseberries", "fruitUrl": "1", "avail":"000000110000"}, {"fruitName": "grapes", "fruitUrl": "1", "avail":"000000011000"}, {"fruitName": "muskmelons", "fruitUrl": "0", "avail":"000000011000"}, {"fruitName": "nectarines", "fruitUrl": "1", "avail":"000000011000"}, {"fruitName": "peaches", "fruitUrl": "1", "avail":"000000111000"}, {"fruitName": "pears", "fruitUrl": "1", "avail":"000000011111"}, {"fruitName": "plums", "fruitUrl": "1", "avail":"000000111100"}, {"fruitName": "raspberries", "fruitUrl": "1", "avail":"000000111000"}, {"fruitName": "strawberries", "fruitUrl": "1", "avail":"000001100000"}]}';

    obj = JSON.parse(fruits);

    var i;

    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var monthParam = getParameterByName('month');
    if(monthParam && monthParam<=12){
      currentMonth = monthParam-1;
    }


    function drawFruit(divId){
      document.getElementById(divId).innerHTML+='\
      <div class="fruit" id="'+obj.fruits[i].fruitName+'">\
      <span class="fruit-title">'+obj.fruits[i].fruitName+'</span>\
      <div id="animated-apple" class="animatedBounce bounce">\
      <div class="svg-outer-container">\
      <div class="svg-container">\
      <a href="http://www.ontario.ca/foodland/food/'+obj.fruits[i].fruitName+'" class="svg">\
      <object type="image/svg+xml" data="'+obj.fruits[i].fruitName+'.svg" width="100%" height="100%" class="svg-content" >\
      </object>\
      </a>\
      </div>\
      </div>\
      </div>\
      <div id="animated-shadow" class="animatedPulse pulse">\
      <div class="svg-outer-container">\
      <div class="svg-container">\
      <object type="image/svg+xml" data="shadow.svg" width="40%" height="100%" class="svg-content">\
      </object>\
      </div>\
      </div>\
      </div>\
      </div>\
      ';

    }

    for(i = 0; i < obj.fruits.length; i++) {
      if(obj.fruits[i].avail[currentMonth]==1){
        drawFruit("fruits");
      }

      else if(obj.fruits[i].avail[currentMonth]!=1 && obj.fruits[i].avail[currentMonth+1]==1){
        drawFruit("comingSoon");
        document.getElementById("comingSoon").style.display = "block";
      }
    }