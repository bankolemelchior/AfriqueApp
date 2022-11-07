class Pays {
    constructor(nom, codeTel, codePays, monnaie, zoneGeo, capital) {
        this.name = nom;
        this.phoneCode = codeTel;
        this.code = codePays;
        this.currency = monnaie;
        this.area = zoneGeo;
        this.capital = capital;
    }
    sentence () {
    console.log("le code téléphonique du " + this.name + " est " + " le " + this.phoneCode );
} 

}

Pays.prototype.myProto = function () {
    console.log("Prototype of Pays");
}



const afriqueSud = new Pays ("Afrique du Sud", 27, "ZAR", "Rand", "Afrique australe", "Pretoria");

const algerie = new Pays ("Algérie", 213, "DZD", "Dinar algérien", "Dinar algérien", "Afrique du nord", "Alger");

const angola = new Pays ("Angola", 244, "AOA", "Kwanza", "Afrique australe", "Luanda");


const botswana = new Pays ("Botswana", 267, "BWP", "Pula", "Afrique australe", "Gaborone");

const burkinaFaso = new Pays ("Burkina Faso", 226, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Ouagadougou")


const burundi = new Pays ("Burundi", 256, "BIF", "Franc burundais", "Afrique de l’est", "Bujumbura");

const benin = new Pays ("Bénin", 229, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Porto-Novo");

const cameroun = new Pays ("Cameroun", 237, "XAF", "Franc CFA (CEMAC)", "Afrique centrale", "Yaoundé");

const capVert = new Pays ("Cap-Vert", 238, "CVE", "Escudo du Cap-Vert", "Afrique de l'ouest", "Afrique de l'ouest", "Praia");

const comores = new Pays ("Comores", 269, "KMF", "Franc comorien", "Afrique de l’est", "Moroni");

const coteDivoire = new Pays ("Côte d’Ivoire", 225, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Yamoussoukro");

const djibouti = new Pays ("Djibouti", 253, "DJF", "Franc de Djibouti", "Afrique de l’est", "Djibouti");

const egypte = new Pays ("Egypte", 20, "EGP", "Livre egyptienne", "Afrique du nord", "Le Caire");

const gabon = new Pays ("Gabon", 241, "XAF", "Franc CFA (CEMAC)", "Afrique centrale", "Libreville");

const gambie =new Pays ("Gambie", 220, "GMD", "Dalasi", "Afrique de l'ouest", "Banjul");

const ghana =new Pays ("Ghana", 233, "GHS", "Cedi", "Afrique de l'ouest", "Accra");

const guinee =new Pays ("Guinée", 224, "GNF", "Franc guinéen", "Afrique de l'ouest", "Conakry");


const guineeEquatoriale =new Pays ("Guinée équatoriale", 240, "XAF", "Franc CFA (CEMAC)", "Afrique centrale", "Malabo");

const guineeBissaeu =new Pays ("Guinée-Bissau", 245, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Bissau");

const kenya =new Pays ("Kenya", 254, "KES", "Shilling kényan", "Afrique de l’est", "Nairobi");

const lesoto =new Pays ("Lesotho", 266, "LSL", "Loti", "Afrique australe", "Maseru");

const liberia =new Pays ("Liberia", 0, "LRD", "Dollar libérien", "Afrique de l'ouest", "Monrovia");

const libye =new Pays ("Libye", 218, "LYD", "Dinar libyen", "Afrique du nord", "Tripoli");

const madagascar =new Pays ("Madagascar", 261, "MGA", "Ariary", "Afrique de l’est", "Antananarivo");

const malawi =new Pays ("Malawi", 265, "MWK", "Kwacha malawien", "Afrique australe", "Lilongwe");

class Continent extends Pays {
    constructor (nom, codeTel, codePays, monnaie, zoneGeo, capital, belongTo) {
        super(nom, codeTel, codePays, monnaie, zoneGeo, capital);
        this.belongTo = belongTo;
    }

    appartenance () {
        console.log(`${this.name} belong to ${this.belongTo}`);
    }
}

let afrique = new Continent("Malawi", 265, "MWK", "Kwacha malawien", "Afrique australe", "Lilongwe", "Africa");

afrique.myProto()

   console.log(madagascar);
   console.log(afrique);
   console.log(madagascar.hasOwnProperty("code"));

    const country26 = {
        Name : "Mali",
        phoneCode : 0,
        code : "XOF",
        Currency : "Franc CFA (UEMOA)",
        Area : "Afrique de l'ouest",
        capitalCity :"Bamako",
    };
    const country27 = {
        Name : "Maroc",
        phoneCode : 212,
        code : "MAD",
        Currency : "Dirham marocain",
        Area : "Afrique du nord",
        capitalCity :"Rabat",
    };
    const country28 = {
        Name : "Île Maurice",
        phoneCode : 230,
        code : "MUR",
        Currency : "Roupie mauricienne",
        Area : "Afrique de l’est",
        capitalCity :"Port Louis",
    };
    const country29 = {
        Name : "Mauritanie",
        phoneCode : 222,
        code : "MRO",
        Currency : "Ouguiya",
        Area : "Afrique du nord",
        capitalCity :"Nouakchott",
    };
    const country30 = {
        Name : "Mozambique",
        phoneCode : 258,
        code : "MZN",
        Currency : "Metical",
        Area : "Afrique australe",
        capitalCity :"Maputo",
    };
    const country31 = {
        Name : "Namibie",
        phoneCode : 264,
        code : "NAD",
        Currency : "Dollar namibien",
        Area : "Afrique australe",
        capitalCity :"Windhoek",
    };

    const country32 = {
        Name : "Niger",
        phoneCode : 227,
        code : "XOF",
        Currency : "Franc CFA (UEMOA)",
        Area : "Afrique de l'ouest",
        capitalCity :"Niamey",
    };

    const country33 = {
        Name : "Nigeria",
        phoneCode : 234,
        code : "NGN",
        Currency : "Naira",
        Area : "Afrique de l'ouest",
        capitalCity :"Abuja",
    };

    const country34 = {
        Name : "Ouganda",
        phoneCode : 256,
        code : "UGX",
        Currency : "Shilling ougandais",
        Area : "Afrique de l’est",
        capitalCity :"Kampala",
    };

    const country35 = {
        Name : "Rwanda",
        phoneCode : 250,
        code : "RWF",
        Currency : "Franc rwandais",
        Area : "Afrique de l’est",
        capitalCity :"Kigali",
    };

    const country36 = {
        Name : "République centrafricaine",
        phoneCode : "",
        code : "XAF",
        Currency : "Franc CFA (CEMAC)",
        Area : "Afrique centrale",
        capitalCity :"Bangui",
    };

    const country37 = {
        Name : "République du Congo",
        phoneCode : 242,
        code : "XAF",
        Currency : "Franc CFA (CEMAC)",
        Area : "Afrique centrale",
        capitalCity :"Brazzaville",
    };
    const country38 = {
        Name : "République démocratique du Congo",
        phoneCode : 243,
        code : "CDF",
        Currency : "Franc congolais",
        Area : "Afrique centrale",
        capitalCity :"Kinshasa",
    };

    const country39 = {
        Name : "Seychelles",
        phoneCode : 248,
        code : "SCR",
        Currency : "Roupie seychelloise",
        Area : "Afrique de l’est",
        capitalCity :"Victoria",
    };

    const country40 = {
        Name : "Sierra Leone",
        phoneCode : 232,
        code : "SLL",
        Currency : "Leone",
        Area : "Afrique de l'ouest",
        capitalCity :"Freetown",
    };

    const country41 = {
        Name : "Somalie",
        phoneCode : 252,
        code : "SOS",
        Currency : "Shilling somalien",
        Area : "Afrique de l’est",
        capitalCity :"Mogadiscio",
    };

    const country42 = {
        Name : "Soudan",
        phoneCode : 249,
        code : "SDG",
        Currency : "Livre soudanaise",
        Area : "Afrique du nord	",
        capitalCity :"Khartoum",
    };

    const country43 = {
        Name : "Soudan du Sud",
        phoneCode : 0,
        code : "SSP",
        Currency : "Livre sud-soudanaise",
        Area : "Afrique de l’est",
        capitalCity :"Djouba",
    };

    const country44 = {
        Name : "Swaziland",
        phoneCode : 268,
        code : "SZL",
        Currency : "Lilangeni",
        Area : "Afrique australe",
        capitalCity :"-",
    };

    const country45 = {
        Name : "São Tomé-et-Principe",
        phoneCode : 239,
        code : "STD",
        Currency : "Dobra",
        Area : "Afrique centrale",
        capitalCity :"São Tomé",
    };

    const country46 = {
        Name : "Sénégal",
        phoneCode : 221,
        code : "XOF",
        Currency : "Franc CFA (UEMOA)",
        Area : "Afrique de l'ouest",
        capitalCity :"Dakar",
    };

    const country47 = {
        Name : "Tanzanie",
        phoneCode : 255,
        code : "TZS",
        Currency : "Shilling tanzanien",
        Area : "Afrique de l’est",
        capitalCity :"Dodoma",
    };

    const country48 = {
        Name : "Tchad",
        phoneCode : 235,
        code : "XAF",
        Currency : "Franc CFA (CEMAC)",
        Area : "Afrique centrale",
        capitalCity :"N'Djamena",
    };

    const country49 = {
        Name : "Togo",
        phoneCode : 228,
        code : "XOF",
        Currency : "Franc CFA (UEMOA)",
        Area : "Afrique de l'ouest",
        capitalCity :"Lomé",
    };

    const country50 = {
        Name : "Tunisie",
        phoneCode : 216,
        code : "TND",
        Currency : "Dinar tunisien",
        Area : "Afrique du nord",
        capitalCity :"Tunis",
    };

    const country51 = {
        Name : "Zambie",
        phoneCode : 0,
        code : "ZMW",
        Currency : "Kwacha de Zambie",
        Area : "Afrique australe",
        capitalCity :"Lusaka",
    };

    const country52 = {
        Name : "Zimbabwe",
        phoneCode : 263,
        code : "ZWL",
        Currency : "Dollar du Zimbabwe",
        Area : "Afrique australe",
        capitalCity :"Harare",
    };

    const country53 = {
        Name : "Érythrée",
        phoneCode : 0,
        code : "ERN",
        Currency : "Nakfa",
        Area : "Afrique de l’est",
        capitalCity :"Asmara",
    };

    const country54 = {
        Name : "Éthiopie",
        phoneCode : 251,
        code : "ETB",
        Currency : "Birr",
        Area : "Afrique de l’est",
        capitalCity :"Addis-Abeba",
        itsFlag : "Ethiopie-v1"
    }; 


    // ---------- the array for all country
    // ----------
    
    const country = [country1, country2, country3, country4, country5, country6, country7, country8, country9, country10, country11, country12, country13, country14, country15, country16, country17, country18, country19, country20, country21, country22, country23, country24, country25, country26, country27, country28, country29, country30, country31, country32, country33, country34, country35, country36, country37, country38, country39, country40, country41, country42, country43, country44, country45, country46, country47, country48, country49, country50, country51, country52, country53, country54];

    // country.forEach(function (allCountry) {
    //     //console.log(`${allCountry.Name}--${allCountry.capitalCity}`);
    //     if (allCountry.Name[0] === "G") {
    //         console.log(allCountry.Name);
    //     }
    // })

    // country.map(function (country) {
    //     console.log(country);
    // })


// function mySeries (title, saison ) {
//     let production = "finished";
//     let Production = function () {
//         production = "on going";
//         console.log(`this serie is ${production}`);
//     }
//     return {
//         title, saison, Production
//     };

// }

// let crisis = mySeries ("Crisis", 2);
// console.log(crisis);

    //-------------- variable for each flag
    //-------------

    const flag1 = "url(./flags/Afrique-du-sud-v1.png)";
    const flag2 = "url(./flags/Algerie-v1.png)";
    const flag3 = "url(./flags/Angola-v1.png)";
    const flag4 = "url(./flags/Botswana-v1.png)";
    const flag5 = "url(./flags/Burkina-Faso-v1.png)";
    const flag6 = "url(./flags/Burundi-v1.png)";
    const flag7 = "url(./flags/Benin-v1.png)";
    const flag8 = "url(./flags/Cameroun-v1.png)";
    const flag9 = "url(./flags/Cap-Vert-v1.png)";
    const flag10 = "url(./flags/Comores-v1.png)";
    const flag11 = "url(./flags/Cote-dIvoire-v1.png)";
    const flag12 = "url(./flags/Djibouti-v1.png)";
    const flag13 = "url(./flags/Egypte-v1.png)";
    const flag14 = "url(./flags/Gabon-v1.png)";
    const flag15 = "url(./flags/Gambie-v1.png)";
    const flag16 = "url(./flags/Ghana-v1.png)";
    const flag17 = "url(./flags/Guinee-v1.png)";
    const flag18 = "url(./flags/Guinee-Equatoriale-v1.png)";
    const flag19 = "url(./flags/Guinee-Bissau-v1.png)";
    const flag20 = "url(./flags/Kenya-v1.png)";
    const flag21 = "url(./flags/Lesotho-v1.png)";
    const flag22 = "url(./flags/Liberia-v1.png)";
    const flag23 = "url(./flags/Lybie-v2.png)";
    const flag24 = "url(./flags/Madagascar-v1.png)";
    const flag25 = "url(./flags/Malawi-v1.png)";
    const flag26 = "url(./flags/Mali-v1.png)";
    const flag27 = "url(./flags/Maroc-v1.png)";
    const flag28 = "url(./flags/Maurice-v1.png)";
    const flag29 = "url(./flags/Mauritanie-v1.png)";
    const flag30 = "url(./flags/Mozambique-v1.png)";
    const flag31 = "url(./flags/Namibie-v1.png)";
    const flag32 = "url(./flags/Niger-v1.png)";
    const flag33 = "url(./flags/Nigeria-v1.png)";
    const flag34 = "url(./flags/Ouganda-v1.png)";
    const flag35 = "url(./flags/Rwanda-v1.png)";
    const flag36 = "url(./flags/Centrafrique-v1.png)";
    const flag37 = "url(./flags/Congo-v1.png)";
    const flag38 = "url(./flags/Rdc-v1.png)";
    const flag39 = "url(./flags/Seychelles-v1.png)";
    const flag40 = "url(./flags/Sierra-Leone-v1.png)";
    const flag41 = "url(./flags/Somalie-v1.png)";
    const flag42 = "url(./flags/Soudan-v2.png)";
    const flag43 = "url(./flags/Soudan-du-sud-v1.png)";
    const flag44 = "url(./flags/Swaziland-v1.png)";
    const flag45 = "url(./flags/Sao-Tome-v1.png)";
    const flag46 = "url(./flags/Senegal-v1.png)";
    const flag47 = "url(./flags/Tanzanie-v1.png)";
    const flag48 = "url(./flags/Tchad-v1.png)";
    const flag49 = "url(./flags/Togo-v1.png)";
    const flag50 = "url(./flags/Tunisie-v1.png)";
    const flag51 = "url(./flags/Zambie-v1.png)";
    const flag52 = "url(./flags/Zimbabwe-v1.png)";
    const flag53 = "url(./flags/Erythree-v1.png)";
    const flag54 = "url(./flags/Ethiopie-v1.png)";


    //---------- the array for all country
    //----------
    const flags = [flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag11, flag12, flag13, flag14, flag15, flag16, flag17, flag18, flag19, flag20, flag21, flag22, flag23, flag24, flag25, flag26, flag27, flag28, flag29, flag30, flag31, flag32, flag33, flag34, flag35, flag36, flag37, flag38, flag39, flag40, flag41, flag42, flag43, flag44, flag45, flag46, flag47, flag48, flag49, flag50, flag51, flag52, flag53, flag54]


//-----------this is for the click event on button named click
    const mainContent = document.querySelector('.main_content')
    const detailsTag = document.querySelector('.display_details');
    const next = document.querySelector('.next');
    const preview = document.querySelector('.preview');
    const countryName = document.querySelector('.display_country_name');
    const capitalCity = document.querySelector('.capital_city');
    const code = document.querySelector('.country_code');
    const phone = document.querySelector('.phone_code');
    const currency = document.querySelector('.currency');
    const area = document.querySelector('.area');
    const displayCountryFlag = document.querySelector('.display_country_flag');
    
    function previewNext () {
        let index = -1;
        
        return {
            forNext : function () {
                function y () {
                    return index++
                }
                y();

                if (index < 53) {
                    countryName.innerHTML = `<h1>${country[index].Name}</h1>`;
                    phone.innerHTML = `<h4>Indicatif téléphonique :</h4> <h2>${country[index].phoneCode}</h2>`;
                    currency.innerHTML = `<h4>Monnaie : </h4> <h2>${country[index].Currency}</h2>`;
                    code.innerHTML = `<h4>Code monnaie : <h4> <h2>${country[index].code}</h2>`;
                    capitalCity.innerHTML = `<h4>Capitale : <h4> <h2>${country[index].capitalCity}</h2>`;
                    area.innerHTML = `<h4>Zone : <h4> <h2>${country[index].Area}</h2>`;
                    displayCountryFlag.style.backgroundImage = flags[index];
                    nameOfCountry = country[index].Name

                    preview.style.visibility = 'visible';

                } else if (index === 52 ) {
                    next.style.visibility = 'hidden';
                }
                //const anyNumber = Math.round(Math.random() * (country.length-1));
            },
            
            forPreview : function () {
                function z () {
                    return index--
                }
                z();

                if (index >=0) {
                    countryName.innerHTML = `<h1>${country[index].Name}</h1>`;
                    phone.innerHTML = `<h4>Indicatif téléphonique :</h4> <h2>${country[index].phoneCode}</h2>`;
                    currency.innerHTML = `<h4>Monnaie : </h4> <h2>${country[index].Currency}</h2>`;
                    code.innerHTML = `<h4>Code monnaie : <h4> <h2>${country[index].code}</h2>`;
                    capitalCity.innerHTML = `<h4>Capitale : <h4> <h2>${country[index].capitalCity}</h2>`;
                    area.innerHTML = `<h4>Zone : <h4> <h2>${country[index].Area}</h2>`;
                    displayCountryFlag.style.backgroundImage = flags[index];
                    nameOfCountry = country[index].Name
                    next.style.visibility = 'visible'

                } else {
                    preview.style.visibility = 'hidden'
                }
                // console.log(index);
            }
    
        };
    }

    let nextPreview = previewNext();


    next.addEventListener('click', nextPreview.forNext);
    preview.addEventListener('click', nextPreview.forPreview);
    console.log(country);
    // country.forEach((nameCountry) => {
    //     console.log(nameCountry.Name);
    // })

//--------------this is about search input and ok button
//-------------
const search = document.getElementById('searchCountry');
const okButton = document.getElementById('oksearch');

okButton.addEventListener('click', () => {
    let searchValue = search.value;
    let convertValue = searchValue.toUpperCase();
    console.log(convertValue);

    switch (searchValue) {
        case country[6].Name:
            console.log(searchValue);
            break;
    
        default:
            break;
    }

})


//-----------this is for the click event on the displaying flag button
//----------
const flagButton = document.querySelector('.btn2');
const foPreview = document.getElementById('1');


    function anyFlag() {

        if (flagButton.textContent === "Afficher les drapeaux") {
            displayCountryFlag.style.display = "block"
            //countryName.textContent = "les drapeaux s'affichent"
            flagButton.textContent = "Ne pas afficher"
        } else {
            flagButton.textContent = "Afficher les drapeaux"
            //countryName.textContent = "les drapeaux ne s'affichent pas"
            displayCountryFlag.style.display = "none"
        }
    };
    
    flagButton.addEventListener('click', anyFlag);




//     //------------------for the certifacation
//     //----------------------1
// function Item(name, amountInstock, price) {
//     this.name = name;
//     this.amountInstock = amountInstock;
//     this.price = price;
//     this.purchase = function() {
//         this.amountInstock = this.amountInstock - 1;
//         //return this.amountInstock =  this.amountInstock - i
//     }
// }

// let biscuit = new Item("biscuit", 100, 1.99)

// // for (let i = 0; i < 10; i++) {
// //     biscuit.purchase();
// // }

// biscuit.purchase();
// biscuit.purchase();
// biscuit.purchase();
// biscuit.purchase();

// //console.log(biscuit.amountInstock);

// //----------------------2
// var donuts = [
//     {type: "jelly", cost: 1.22},
//     {type: "chocolate", cost: 2.45},
//     {type: "cider", cost: 1.59},
//     {type: "boston cream", cost: 5.99}
// ];

// const res = donuts.map(function(elem) {
//     return elem.type
// })
// console.log(res);

// //----------------------3
// function Train () {
//     this.sound = "cho cho!";
// }
// let Magnum = new Train();
// let Sonic = new Train();

// Train.prototype = {
//     Speed : 350
// }

// let Apach = new Train();

// function incrementSpeed (train) {
//     return train.Speed + 50;
// }

// let theSpeed = incrementSpeed(Magnum);

// console.log(Magnum);
// console.log(Apach);
// console.log(theSpeed);

// //----------------------3
// class Tree {
//     constructor(leaves = 5, size) {
//         this.leaves = leaves;
//         this.size = size;
//     }
// }

// class Maple extends Tree {
//     constructor(leafColor, leaves, size) {
//         super(leaves, size);
//         this.leafColor = leafColor;
//     }
// }

// let sage = new Maple('yellow', undefined, 10);

// console.log(sage);

// //----------------------4*
// var attempts = 30;

// while (attempts > 10) {
//     console.log("print attempt.");
//     attempts--;
//     break;
// }

  
    