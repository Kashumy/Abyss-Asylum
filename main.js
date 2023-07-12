function start(){
  document.getElementById('void').play()
  document.getElementById('void').loop=true
  document.getElementById('start').style.display ="none "
      var textContainer = document.getElementById("Mess");
var text = `-^Speedoffx2              ...       -^Clear
    -^SpeedDefx2  the game is presented by krystian kashumy.github.io released in just 5 days for 24 hours today is the first demo release. Attention people with hypersensitivity to fear better not play it. the game has no jump scares or blood and other similar events   
    
    For now is black screen for end game 
    Wait for it rhis game is 3D with amazing shaders 
    
    -^Speedoff

   -^Speedoffx2              ...       -^Clear
    -^SpeedDef  Darkness -^Speedoff 
               -^Clear  
   -^SpeedDef  Void -^Speedoff    ...  
               -^Clear  
   -^SpeedDef  Cold -^Speedoff     ...
               -^Clear  
   -^SpeedDef  in the depths of the abyss, questions arise that no one knows the answer to-^Speedoff     ...?
                   -^Clear  
   -^SpeedDef    I need ... -^Speedoff     
        -^Clear  
   -^SpeedDef   Wake up -^Speedoff !
               -^Clear  
   -^SpeedDef  -_- -^Speedoff     ...
   
   
   
     -!Function(a)








`;
    var speed = 50; // Speed in milliseconds (lower value = faster typing)

    function typeWriter() {
      if (text.length > 0) {
        var char = text.charAt(0);
        if (char === '\n') {
          textContainer.innerHTML += '<br>';
        } else if (char === '-' && text.indexOf("^Speedoff") === 1) {
          speed = 200;
          text = text.slice(12);
        }else if (char === '-' && text.indexOf("^Speedoffx2") === 1) {
          speed = 40;
          text = text.slice(12);
        } else if (char === '-' && text.indexOf("^SpeedDef") === 1) {
          speed = 50;
          text = text.slice(11);
        }else if (char === '-' && text.indexOf("^SpeedDefx2") === 1) {
          speed = 10;
          text = text.slice(11);
        }else if (char === '-' && text.indexOf("^Clear") === 1) {
          textContainer.innerHTML =""
          text = text.slice(7);
        }else if (char === '-' && text.indexOf("!Function(a)") === 1) {
          text = text.slice(12);
           removeMes()
           start1()
        } else {
          textContainer.innerHTML += char;
        }
        text = text.slice(1);
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
    function removeMes(){
      document.getElementById('cyr').classList.add('hide')
    }
    function start1(){
      setTimeout(function (){
        document.getElementById('scr1').style.display ="block"
        setTimeout(function (){
          document.querySelector('body').classList.remove('cha')
          
          document.getElementById('game1').style.display ="block"
          setTimeout(function (){
          document.getElementById('game1').innerHTML = `<iframe id="nji" src="./script.html" frameborder="0" style="width :100%;height :100%;"></iframe> `
          lop1()
          },1000);
        },3000)
      },4000)
    }
}
var ztage2=0;
function lop1(){
  
    var zmienna = document.getElementById('nji').contentWindow.collectedceystal
    if (zmienna==1){
      document.getElementById('game1').style.display = "none"
      ztage2+=1
      if(ztage2<1){
      setTimeout(function() {
        document.getElementById('game1').innerHTML = ``
        document.getElementById('hol').style.display = "block"
      }, 1000);
      }else {
        document.getElementById('game1').innerHTML = ``
        document.getElementById('scr1').style.display ="none"
        document.getElementById('hol').style.display = "none"
        document.getElementById('cyr').classList.remove('hide')
        setTimeout(dialog1,200)
        
      }
    }else {
      setTimeout(lop1,200) 
    }
  
  
}
function done(){
  if(document.getElementById('f').value =='solutions'){document.getElementById('hol').style.display ='none';  
  document.querySelector('body').classList.remove('cha')
          
          document.getElementById('game1').style.display ="block"
          setTimeout(function (){
          document.getElementById('game1').innerHTML = `<iframe id="nji" src="./script 2.html" frameborder="0" style="width :100%;height :100%;"></iframe> `
          lop1()
          },1000);}
  
}
function dialog1(){
  text = `-^Speedoffx2              ...       -^Clear    
      -^SpeedDef  :( -^Speedoff 
                 -^Clear  
     -^SpeedDef  :( -^Speedoff    ...  ?
                 -^Clear  
     -^SpeedDef  :/ -^Speedoff     ...
                 -^Clear  
     -^SpeedDef  :| -^Speedoff     ...?
                     -^Clear  
     -^SpeedDef    I need ... your -^Speedoff     
          -^Clear  
     -^SpeedDef   soul >:-] -^Speedoff !
                 -^Clear  
     -^SpeedDef  81)&)!&)$?!!'?'??'?$ -^Speedoff     ...
     
     
     

  
  
  
  `;
  setTimeout(function (){
    document.querySelector('body').classList.add('cha')
        
        
  },10000)
  setTimeout(function() {
    document.getElementById('cyr').classList.add('hide')
    setTimeout(function() {
      document.getElementById('scvbr1').style.display = "block "
    }, 4000);
  }, 27000)
  textContainer = document.getElementById("Mess");
  function typeWriter() {
    if (text.length > 0) {
      var char = text.charAt(0);
      if (char === '\n') {
        textContainer.innerHTML += '<br>';
      } else if (char === '-' && text.indexOf("^Speedoff") === 1) {
        speed = 200;
        text = text.slice(12);
      } else if (char === '-' && text.indexOf("^Speedoffx2") === 1) {
        speed = 40;
        text = text.slice(12);
      } else if (char === '-' && text.indexOf("^SpeedDef") === 1) {
        speed = 50;
        text = text.slice(11);
      } else if (char === '-' && text.indexOf("^Clear") === 1) {
        textContainer.innerHTML = ""
        text = text.slice(7);
      } else {
        textContainer.innerHTML += char;
      }
      text = text.slice(1);
      setTimeout(typeWriter, speed);
    }
    
  }
  typeWriter()
}
  
