
document.getElementById("occupied").innerHTML=500 + " GB";
document.getElementById("left").innerHTML=1000-500;
document.getElementById("range").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #FFA199 0%, #FF7098 ' + value + '%, #0c122c ' + value + '%, #0c122c 100%)';
    document.getElementById("occupied").innerHTML=this.value + " GB";
    document.getElementById("left").innerHTML=1000-this.value;
  };



  