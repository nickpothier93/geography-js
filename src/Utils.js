import $ from 'jquery'; 

const obj = {ad: {src: require("./img/ad.png"), b1: "France", b2: "Andorra", b3: "Spain", b4: "Bermuda", cor: "Andorra"},
ae: {src: require("./img/ae.png"), b1: "Qatar", b2: "Yemen", b3: "Oman", b4: "UAE", cor: "UAE"},
af: {src: require("./img/af.png"), b1: "Afghanistan", b2: "Pakistan", b3: "Turkmenistan", b4: "Iraq",cor: "Afghanistan"},
ag: {src: require("./img/ag.png"), b1: "Barbados", b2: "Guyana", b3: "Antigua and Barbuda", b4: "Turkey",cor: "Antigua and Barbuda"}};

const blank = {src: null, b1: null, b2: null, b3: null, b4: null,cor: null};

var countryUsed = [];

const amountOfFlags = 4;

const randNum = () => {
    return Math.floor(Math.random() * (amountOfFlags));
}

const Utils = {
    clearMenu : () => {
        $('#highBtn').hide();
        $('#capitalsBtn').hide();
        $('#flagsBtn').hide();
        $('#mainMenu').hide();
    },
    loadMenu : () => {
        $('#highBtn').show();
        $('#capitalsBtn').show();
        $('#flagsBtn').show();
        $('#mainMenu').show();
    },
    winner : () => {
        if(countryUsed.length === (amountOfFlags)){
            return true;
        }
        else{
            return false;
        }
    },
    resetCounties : () => {
        countryUsed = [];
    },
    loadCountry: () => {
        var countryNumber = null;
        if(countryUsed.length === amountOfFlags){
            countryNumber = -1;
        }
        else{
            countryNumber = randNum();
            while (countryUsed.includes(countryNumber)){
                countryNumber = randNum();
            }
            countryUsed.push(countryNumber);
        }
        switch(countryNumber) {
            case 0:
                return obj.ad;
            case 1:
                return obj.ae;
            case 2: 
                return obj.af;
            case 3:
                return obj.ag;
            default:
                return blank;
        }
    }
}
export default Utils;