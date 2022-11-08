//-----------this is the variables for html element
const mainContent = document.querySelector('.main_content')
const detailsTag = document.querySelector('.display_details');
const countryName = document.querySelector('.display_country_name');
const capitalCity = document.querySelector('.capital_city');
const code = document.querySelector('.country_code');
const phone = document.querySelector('.phone_code');
const currency = document.querySelector('.currency');
const area = document.querySelector('.area');
const displayCountryFlag = document.querySelector('.display_country_flag');
const forFlag = document.querySelector('#forFlag');
const countryBtn = document.querySelectorAll('.countryBtn');
const allCountry = document.querySelector('.allCountry');


//-----------This is for the class to instanciate each country
class Pays {
    constructor(nom, codeTel, codePays, monnaie, zoneGeo, capital, flag) {
        this.name = nom;
        this.phoneCode = codeTel;
        this.code = codePays;
        this.currency = monnaie;
        this.area = zoneGeo;
        this.capital = capital;
        this.flag = flag
    }

}

//-----------This is the array for each country
const country = [
    afriqueSud = new Pays ("Afrique du Sud", 27, "ZAR", "Rand", "Afrique australe", "Pretoria", "flags/Afrique-du-sud-v1.png"),

    algerie = new Pays ("Algérie", 213, "DZD", "Dinar algérien", "Dinar algérien", "Alger", "Afrique du nord", "flags/Algerie-v1.png"),

    angola = new Pays ("Angola", 244, "AOA", "Kwanza", "Afrique australe", "Luanda", "flags/Angola-v1.png"),

    botswana = new Pays ("Botswana", 267, "BWP", "Pula", "Afrique australe", "Gaborone", "flags/Botswana-v1.png"),

    burkinaFaso = new Pays("Burkina Faso", 226, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Ouagadougou", "flags/Burkina-Faso-v1.png"),

    burundi = new Pays("Burundi", 256, "BIF", "Franc burundais", "Afrique de l’est", "Bujumbura", "flags/Burundi-v1.png"),

    benin = new Pays("Bénin", 229, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Porto-Novo", "flags/Benin-v1.png"),

    cameroun = new Pays("Cameroun", 237, "XOF", "Franc CFA (CEMAC)", "Afrique centrale", "Yaoundé", "flags/Cameroun-v1.png"),

    capVert = new Pays("Cap-Vert", 238, "CVE", "Escudo du Cap-Vert", "Afrique de l'ouest", "Praia", "flags/Cap-Vert-v1.png"),

    comores = new Pays("Comores", 269, "KMF", "Franc comorien", "Afrique de l’est", "Moroni", "flags/Comores-v1.png"),
 
    CotedIvoire = new Pays("Côte d’Ivoire", 225, "XOF", "Franc CFA (UEMOA)", "Afrique de l'ouest", "Yamoussoukro", "flags/Cote-dIvoire-v1.png"),

    djibouti = new Pays("Djibouti", 253, "DJF", "Franc de Djibouti", "Afrique de l’est", "Djibouti", "flags/Djibouti-v1.png"),

    egypte = new Pays("Egypte", 20, "EGP", "Livre egyptienne", "Afrique du nord", "Le Caire", "flags/Egypte-v1.png"),

    gabon = new Pays("Gabon", 241, "XAF", "Franc CFA (CEMAC)", "Afrique centrale", "Libreville", "flags/Gabon-v1.png"),
]


    // const country15 = {
    //     Name : "Gambie",
    //     phoneCode : 220,
    //     code : "GMD",
    //     Currency : "Dalasi",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Banjul",
    // };
    // const flag15 = "url(./flags/Gambie-v1.png)";




countryBtn.forEach(ele => {
    ele.addEventListener("click", () => {
        country.forEach((oneCountry) => {
            if (ele.textContent === oneCountry.name) {

                countryName.innerHTML = `<h1>${oneCountry.name}</h1>`;
                phone.innerHTML = `<h4>Indicatif téléphonique :</h4> <h2>${oneCountry.phoneCode}</h2>`;
                currency.innerHTML = `<h4>Monnaie : </h4> <h2>${oneCountry.currency}</h2>`;
                code.innerHTML = `<h4>Code monnaie : </h4> <h2>${oneCountry.code}</h2>`;
                capitalCity.innerHTML = `<h4>Capitale : </h4> <h2>${oneCountry.capital}</h2>`;
                area.innerHTML = `<h4>Zone : </h4> <h2>${oneCountry.area}</h2>`;
                forFlag.src = oneCountry.flag;
            }
        })
    })
});
    

//-----------this is for the click event on the displaying flag button
//----------
const flagButton = document.querySelector('.btn2');
const foPreview = document.getElementById('1');




















    // const country16 = {
    //     Name : "Ghana",
    //     phoneCode : 233,
    //     code : "GHS",
    //     Currency : "Cedi",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Accra",
    // };
    // const country17 = {
    //     Name : "Guinée",
    //     phoneCode : 224,
    //     code : "GNF",
    //     Currency : "Franc guinéen",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Conakry",
    // };

    // const country18 = {
    //     Name : "Guinée équatoriale",
    //     phoneCode : 240,
    //     code : "XAF",
    //     Currency : "Franc CFA (CEMAC)",
    //     Area : "Afrique centrale",
    //     capitalCity :"Malabo",
    // };

    // const country19 = {
    //     Name : "Guinée-Bissau",
    //     phoneCode : 245,
    //     code : "XOF",
    //     Currency : "Franc CFA (UEMOA)",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Bissau",
    // };

    // const country20 = {
    //     Name : "Kenya",
    //     phoneCode : 254,
    //     code : "KES",
    //     Currency : "Shilling kényan",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Nairobi",
    // };

    // const country21 = {
    //     Name : "Lesotho",
    //     phoneCode : 266,
    //     code : "LSL",
    //     Currency : "Loti",
    //     Area : "Afrique australe",
    //     capitalCity :"Maseru",
    // };

    // const country22 = {
    //     Name : "Liberia",
    //     phoneCode : 0,
    //     code : "LRD",
    //     Currency : "Dollar libérien",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Monrovia",
    // };
    // const country23 = {
    //     Name : "Libye",
    //     phoneCode : 218,
    //     code : "LYD",
    //     Currency : "Dinar libyen",
    //     Area : "Afrique du nord",
    //     capitalCity :"Tripoli",
    // };
    // const country24 = {
    //     Name : "Madagascar",
    //     phoneCode : 261,
    //     code : "MGA",
    //     Currency : "Ariary",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Antananarivo",
    // };
    // const country25 = {
    //     Name : "Malawi",
    //     phoneCode : 265,
    //     code : "MWK",
    //     Currency : "Kwacha malawien",
    //     Area : "Afrique australe",
    //     capitalCity :"Lilongwe",
    // };
    // const country26 = {
    //     Name : "Mali",
    //     phoneCode : 0,
    //     code : "XOF",
    //     Currency : "Franc CFA (UEMOA)",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Bamako",
    // };
    // const country27 = {
    //     Name : "Maroc",
    //     phoneCode : 212,
    //     code : "MAD",
    //     Currency : "Dirham marocain",
    //     Area : "Afrique du nord",
    //     capitalCity :"Rabat",
    // };
    // const country28 = {
    //     Name : "Île Maurice",
    //     phoneCode : 230,
    //     code : "MUR",
    //     Currency : "Roupie mauricienne",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Port Louis",
    // };
    // const country29 = {
    //     Name : "Mauritanie",
    //     phoneCode : 222,
    //     code : "MRO",
    //     Currency : "Ouguiya",
    //     Area : "Afrique du nord",
    //     capitalCity :"Nouakchott",
    // };
    // const country30 = {
    //     Name : "Mozambique",
    //     phoneCode : 258,
    //     code : "MZN",
    //     Currency : "Metical",
    //     Area : "Afrique australe",
    //     capitalCity :"Maputo",
    // };
    // const country31 = {
    //     Name : "Namibie",
    //     phoneCode : 264,
    //     code : "NAD",
    //     Currency : "Dollar namibien",
    //     Area : "Afrique australe",
    //     capitalCity :"Windhoek",
    // };

    // const country32 = {
    //     Name : "Niger",
    //     phoneCode : 227,
    //     code : "XOF",
    //     Currency : "Franc CFA (UEMOA)",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Niamey",
    // };

    // const country33 = {
    //     Name : "Nigeria",
    //     phoneCode : 234,
    //     code : "NGN",
    //     Currency : "Naira",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Abuja",
    // };

    // const country34 = {
    //     Name : "Ouganda",
    //     phoneCode : 256,
    //     code : "UGX",
    //     Currency : "Shilling ougandais",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Kampala",
    // };

    // const country35 = {
    //     Name : "Rwanda",
    //     phoneCode : 250,
    //     code : "RWF",
    //     Currency : "Franc rwandais",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Kigali",
    // };

    // const country36 = {
    //     Name : "République centrafricaine",
    //     phoneCode : "",
    //     code : "XAF",
    //     Currency : "Franc CFA (CEMAC)",
    //     Area : "Afrique centrale",
    //     capitalCity :"Bangui",
    // };

    // const country37 = {
    //     Name : "République du Congo",
    //     phoneCode : 242,
    //     code : "XAF",
    //     Currency : "Franc CFA (CEMAC)",
    //     Area : "Afrique centrale",
    //     capitalCity :"Brazzaville",
    // };
    // const country38 = {
    //     Name : "République démocratique du Congo",
    //     phoneCode : 243,
    //     code : "CDF",
    //     Currency : "Franc congolais",
    //     Area : "Afrique centrale",
    //     capitalCity :"Kinshasa",
    // };

    // const country39 = {
    //     Name : "Seychelles",
    //     phoneCode : 248,
    //     code : "SCR",
    //     Currency : "Roupie seychelloise",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Victoria",
    // };

    // const country40 = {
    //     Name : "Sierra Leone",
    //     phoneCode : 232,
    //     code : "SLL",
    //     Currency : "Leone",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Freetown",
    // };

    // const country41 = {
    //     Name : "Somalie",
    //     phoneCode : 252,
    //     code : "SOS",
    //     Currency : "Shilling somalien",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Mogadiscio",
    // };

    // const country42 = {
    //     Name : "Soudan",
    //     phoneCode : 249,
    //     code : "SDG",
    //     Currency : "Livre soudanaise",
    //     Area : "Afrique du nord	",
    //     capitalCity :"Khartoum",
    // };

    // const country43 = {
    //     Name : "Soudan du Sud",
    //     phoneCode : 0,
    //     code : "SSP",
    //     Currency : "Livre sud-soudanaise",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Djouba",
    // };

    // const country44 = {
    //     Name : "Swaziland",
    //     phoneCode : 268,
    //     code : "SZL",
    //     Currency : "Lilangeni",
    //     Area : "Afrique australe",
    //     capitalCity :"-",
    // };

    // const country45 = {
    //     Name : "São Tomé-et-Principe",
    //     phoneCode : 239,
    //     code : "STD",
    //     Currency : "Dobra",
    //     Area : "Afrique centrale",
    //     capitalCity :"São Tomé",
    // };

    // const country46 = {
    //     Name : "Sénégal",
    //     phoneCode : 221,
    //     code : "XOF",
    //     Currency : "Franc CFA (UEMOA)",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Dakar",
    // };

    // const country47 = {
    //     Name : "Tanzanie",
    //     phoneCode : 255,
    //     code : "TZS",
    //     Currency : "Shilling tanzanien",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Dodoma",
    // };

    // const country48 = {
    //     Name : "Tchad",
    //     phoneCode : 235,
    //     code : "XAF",
    //     Currency : "Franc CFA (CEMAC)",
    //     Area : "Afrique centrale",
    //     capitalCity :"N'Djamena",
    // };

    // const country49 = {
    //     Name : "Togo",
    //     phoneCode : 228,
    //     code : "XOF",
    //     Currency : "Franc CFA (UEMOA)",
    //     Area : "Afrique de l'ouest",
    //     capitalCity :"Lomé",
    // };

    // const country50 = {
    //     Name : "Tunisie",
    //     phoneCode : 216,
    //     code : "TND",
    //     Currency : "Dinar tunisien",
    //     Area : "Afrique du nord",
    //     capitalCity :"Tunis",
    // };

    // const country51 = {
    //     Name : "Zambie",
    //     phoneCode : 0,
    //     code : "ZMW",
    //     Currency : "Kwacha de Zambie",
    //     Area : "Afrique australe",
    //     capitalCity :"Lusaka",
    // };

    // const country52 = {
    //     Name : "Zimbabwe",
    //     phoneCode : 263,
    //     code : "ZWL",
    //     Currency : "Dollar du Zimbabwe",
    //     Area : "Afrique australe",
    //     capitalCity :"Harare",
    // };

    // const country53 = {
    //     Name : "Érythrée",
    //     phoneCode : 0,
    //     code : "ERN",
    //     Currency : "Nakfa",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Asmara",
    // };

    // const country54 = {
    //     Name : "Éthiopie",
    //     phoneCode : 251,
    //     code : "ETB",
    //     Currency : "Birr",
    //     Area : "Afrique de l’est",
    //     capitalCity :"Addis-Abeba",
    //     itsFlag : "Ethiopie-v1"
    // }; 


    














    // const flag16 = "url(./flags/Ghana-v1.png)";
    // const flag17 = "url(./flags/Guinee-v1.png)";
    // const flag18 = "url(./flags/Guinee-Equatoriale-v1.png)";
    // const flag19 = "url(./flags/Guinee-Bissau-v1.png)";
    // const flag20 = "url(./flags/Kenya-v1.png)";
    // const flag21 = "url(./flags/Lesotho-v1.png)";
    // const flag22 = "url(./flags/Liberia-v1.png)";
    // const flag23 = "url(./flags/Lybie-v2.png)";
    // const flag24 = "url(./flags/Madagascar-v1.png)";
    // const flag25 = "url(./flags/Malawi-v1.png)";
    // const flag26 = "url(./flags/Mali-v1.png)";
    // const flag27 = "url(./flags/Maroc-v1.png)";
    // const flag28 = "url(./flags/Maurice-v1.png)";
    // const flag29 = "url(./flags/Mauritanie-v1.png)";
    // const flag30 = "url(./flags/Mozambique-v1.png)";
    // const flag31 = "url(./flags/Namibie-v1.png)";
    // const flag32 = "url(./flags/Niger-v1.png)";
    // const flag33 = "url(./flags/Nigeria-v1.png)";
    // const flag34 = "url(./flags/Ouganda-v1.png)";
    // const flag35 = "url(./flags/Rwanda-v1.png)";
    // const flag36 = "url(./flags/Centrafrique-v1.png)";
    // const flag37 = "url(./flags/Congo-v1.png)";
    // const flag38 = "url(./flags/Rdc-v1.png)";
    // const flag39 = "url(./flags/Seychelles-v1.png)";
    // const flag40 = "url(./flags/Sierra-Leone-v1.png)";
    // const flag41 = "url(./flags/Somalie-v1.png)";
    // const flag42 = "url(./flags/Soudan-v2.png)";
    // const flag43 = "url(./flags/Soudan-du-sud-v1.png)";
    // const flag44 = "url(./flags/Swaziland-v1.png)";
    // const flag45 = "url(./flags/Sao-Tome-v1.png)";
    // const flag46 = "url(./flags/Senegal-v1.png)";
    // const flag47 = "url(./flags/Tanzanie-v1.png)";
    // const flag48 = "url(./flags/Tchad-v1.png)";
    // const flag49 = "url(./flags/Togo-v1.png)";
    // const flag50 = "url(./flags/Tunisie-v1.png)";
    // const flag51 = "url(./flags/Zambie-v1.png)";
    // const flag52 = "url(./flags/Zimbabwe-v1.png)";
    // const flag53 = "url(./flags/Erythree-v1.png)";
    // const flag54 = "url(./flags/Ethiopie-v1.png)";


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

  
    