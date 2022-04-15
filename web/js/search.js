
             let isOpen = false;

             let clickshow = document.querySelector("#clickbtn");
          
             clickshow.addEventListener("click", function(){
                 if(isOpen == false) {
                   
                   document.querySelector("#searchbox").style.display = "block"
                   isOpen = true;
                 }

                 else{
                    

                     
                    document.querySelector("#searchbox").style.display = "none"
                    isOpen = false;
                     
                 }

             });
                              
                
             
                    


                /* 한 문장을 반복문으로 넣고싶은데 잘 안됨. 문장안에 반복이 들어감 = 이중반복 

                for(let i = 1; i<=16; i++){
                    document.querySelector("#result").innerHTML = "--i:i"
                    <span style="--i:1;"> <i>Drinking </i> Dwerking    <i> Working </i> </span>
                }*/
