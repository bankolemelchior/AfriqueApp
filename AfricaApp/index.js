let tab=[[1,2,3,4,5],['a','b','c'],[0,1,2,3]];



console.log(tab[0][1]*tab[2][0]); 


console.log(tab[0][3]+tab[1][1]); 


console.log(tab[1][4]+tab[2][2]);


console.log(tab[2][2]*tab[2][2]);


console.log(tab[0][4]+tab[2][3]); 


console.log('p' + 8);

const country49 = {
    Name : "Togo",
    phoneCode : 228,
    code : "XOF",
    Currency : "Franc CFA (UEMOA)",
    Area : "Afrique de l'ouest",
    capitalCity :"Lomé",

    forCapital: function capital() {
        console.log('la capital du ' + this.Name + 'est: ' + this.capitalCity);
    }
};

console.log(country49.Area);
console.log(country49['Area']);
country49.forCapital();
console.log(parseInt('010', 5));

let tableau = ['Pierre','Paul','Jacques'];
fetch('donnees.php?data='+tableau)


