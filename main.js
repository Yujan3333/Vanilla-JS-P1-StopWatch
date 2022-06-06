window.onload = function () {      //FUNCTION OF THIS?

    var seconds= 00;
    var milliseconds= 00;
    var changeInMs=document.getElementById("milliseconds");
    var changeInSec=document.getElementById("seconds");
    var buttonStart=document.getElementById("button-start");
    var buttonStop=document.getElementById("button-stop");
    var buttonReset=document.getElementById("button-reset");

    var interval; //WORKING OF THIS??

    buttonStart.onclick= function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);  //CONFUSION??
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }


    buttonReset.onclick = function(){
        clearInterval(interval);
        milliseconds="00";
        seconds="00";
        changeInMs.innerHTML=milliseconds;
        changeInSec.innerHTML=seconds;
    }

    function startTimer(){
        milliseconds++;
        if(milliseconds<= 9){                   //Single Digit therfore add with 0 to make'00'
            changeInMs.innerHTML="0"+milliseconds;
        }
        if(milliseconds>9){                   //Double Digit happens here
            changeInMs.innerHTML=milliseconds;
        }
        if(milliseconds>60){                    //Each 60 milliseconds a seconds is increased
            console.log("Seconds has increased!!");
            seconds++;                          //increment of seconds
            changeInSec.innerHTML="0"+seconds;    //Single Digit for seconds
            milliseconds=0;
            changeInMs.innerHTML="0"+0;    //Reseting the milliseconds after helping to increase the seconds value.
        }
        if(seconds>9){                              //If the seconds value is in Double digits
            changeInSec.innerHTML=seconds;
        }
    }
}