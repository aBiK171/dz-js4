var u = prompt('Введите первый знак');
var inTheEnd = prompt('Введите конечный знак');

for(var i = 0; i <= 11; i++) {
    under = u;
    for( var I = 1; I <= i; I++) {
        under +=u;
    }
    console.log(under + inTheEnd);
    
}






