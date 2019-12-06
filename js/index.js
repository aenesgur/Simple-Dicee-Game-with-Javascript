function games()
{
    const btns = document.querySelectorAll(".diceeButton");

    btns.forEach( function(btns) { 
        btns.addEventListener("click", function(element) {
            let randomNumber = Math.floor(Math.random()*6) + 1;
            let image = "images/dice"+ randomNumber +".png";
            let value = element.srcElement.innerHTML;
            document.querySelector(".dice .img"+value).setAttribute("src",image);
            
            if(localStorage.getItem('numbers')==null)
            {   
                var numbers = [];
                numbers.push(randomNumber);
                localStorage.setItem('numbers',JSON.stringify(numbers));
            }
            else
            {
                var numbers= JSON.parse(localStorage.getItem('numbers'));
                numbers.push(randomNumber);
                localStorage.setItem('numbers',JSON.stringify(numbers));
            }

            var result = JSON.parse(localStorage.getItem('numbers'));
            if(result.length>=2)
            {
                let max = result[0];
                for(var i = 0;i<result.length;i++)
                {
                    if(result[i]>max) {max=result[i];}

                    if(result[0]>result[1]) {document.querySelector(".container h1").innerHTML ="Player 1 won"; }
                        
                    else if(result[0]<result[1]) {document.querySelector(".container h1").innerHTML ="Player 2 won"; }
                    
                    else {document.querySelector(".container h1").innerHTML ="Draw";}
                }
                console.log(max);
                localStorage.removeItem('numbers');
            }
        });
    });   
}

