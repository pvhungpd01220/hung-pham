var Index = 0;
    mySlider();
    function mySlider(){
      var x = document.getElementsByClassName("slide");
      for(var i=0; i<x.length; i++) {
        x[i].style.display="none";
    }
    Index++;
    if(Index>x.length) {
      Index=1
    }
    x[Index-1].style.display="block";
    setTimeout(mySlider, 1500);
}