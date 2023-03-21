var x = 0

function numberOneTriangle(x)
    {
        var x,i,y;
        x = parseInt(document.getElementById ("number" ).value);
        for(i = 0; i <= x; i++)
        {
            for(y = 1; y <= i; y++)
            {
                document.write("*");
            }
            document.write("*");
            document.write("</br>");
         }   
}
console.log(numberOneTriangle(4));