var number = document.querySelector(".square")

var startBtn = document.querySelector(".start")

var stopBtn = document.querySelector(".stop")
var c = 0
var resetBtn = document.querySelector(".reset")


startBtn.addEventListener("click" ,function(){
    var running =true  //burada true di diye dovr edir

setInterval(function(){

  if(running){

      c++                     //burda c ni dovre salariq ve artir
    number.textContent=c      // burda ise o c ye verilmis deyeri number(yeni divin icindeki deyere veririk)



    stopBtn.addEventListener("click", function(){

        running=false;  // Burada false yaziriqki stop a basanda dayansin .True oldugda dovr olur ,false olanda dayanir
    })
}



 resetBtn.addEventListener("click" , function(){
    c=0;               //burada dyirik ki reset e basanda c=0
    number.textContent=c  //c nin 0 ldugunu ise divin icinceki deyere menimsedirik
     running=false   //burada deyirikki resete basanda 0 dan yeniden dovr etmesin ele 0 da dayansin

})

} ,50 )


} )














