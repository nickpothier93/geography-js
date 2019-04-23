import $ from 'jquery'; 

const obj = [ {src: require("./img/ad.png"), buttons: [ "France", "Andorra",  "Spain", "Bermuda"], cor: "Andorra"},
 {src: require("./img/ae.png"),  buttons: [ "Qatar", "Yemen", "Oman", "UAE"], cor: "UAE"},
 {src: require("./img/af.png"), buttons: ["Afghanistan", "Pakistan", "Turkmenistan",  "Iraq"],cor: "Afghanistan"},
 {src: require("./img/ag.png"), buttons: ["Barbados", "Guyana", "Antigua and Barbuda", "Turkey"],cor: "Antigua and Barbuda"},
 {src: require("./img/ai.png"), buttons: ["Anguilla", "Great Britian", "Austrailia", "Canada"],cor: "Anguilla"},
 {src: require("./img/al.png"), buttons: ["Turkey", "Albania", "Macedonia", "Canada"],cor: "Albania"},
 {src: require("./img/am.png"), buttons: ["Russia", "Albania", "Armenia", "Iran"],cor: "Armenia"},
 {src: require("./img/ao.png"), buttons: ["Namibia", "South Aftica", "Zambia", "Angola"],cor: "Angola"},
 {src: require("./img/ar.png"), buttons: ["Argentina", "Brazil", "Chile", "Spain"],cor: "Argentina"},
 {src: require("./img/as.png"), buttons: ["Guam", "American Samoa", "United States", "Puerto Rico"],cor: "American Samoa"},
 {src: require("./img/at.png"), buttons: ["France", "Slovenia", "Austria", "Poland"],cor: "Austria"},
 {src: require("./img/au.png"), buttons: ["New Zealand", "Berumda", "United Kingdom", "Austrailia"],cor: "Austrailia"},
 {src: require("./img/aw.png"), buttons: ["Aruba", "Anguilla", "Barbados", "Cuba"],cor: "Aruba"},
 {src: require("./img/az.png"), buttons: ["Iran", "Azerbaijan", "Pakistan", "Syria"],cor: "Azerbaijan"},
 {src: require("./img/ba.png"), buttons: ["Serbia", "Croatia", "Bosnia", "Belarus"],cor: "Bosnia"},
 {src: require("./img/bb.png"), buttons: ["Bahamas", "Jamaica", "Antigua and Barbuda", "Barbados"],cor: "Barbados"},
 {src: require("./img/bd.png"), buttons: ["Bangladesh", "India", "Pakistan", "Japan"],cor: "Bangladesh"},
 {src: require("./img/be.png"), buttons: ["France", "Belgium", "Germany", "Austria"],cor: "Belgium"},
 {src: require("./img/bf.png"), buttons: ["Chad", "Congo (Rep)", "Burkina Faso", "Mali"],cor: "Burkina Faso"},
 {src: require("./img/bg.png"), buttons: ["Belarus", "Russia", "Romania", "Bulgaria"],cor: "Bulgaria"},
 {src: require("./img/bh.png"), buttons: ["Bahrain", "Qatar", "Oman", "Kuwait"],cor: "Bahrain"},
 {src: require("./img/bi.png"), buttons: ["Rwanada", "Burundi", "Uganda", "Malawi"],cor: "Burundi"},
 {src: require("./img/bj.png"), buttons: ["Togo", "Burundi", "Benin", "Guyana"],cor: "Benin"},
 {src: require("./img/bm.png"), buttons: ["Canada", "United Kingdom", "Anguilla", "Bermuda"],cor: "Bermuda"},
 {src: require("./img/bn.png"), buttons: ["Brunei", "Saudia Arabia", "Oman", "UAE"],cor: "Brunei"},
 {src: require("./img/bo.png"), buttons: ["Chile", "Bolivia", "Colombia", "Peru"],cor: "Bolivia"},
 {src: require("./img/br.png"), buttons: ["Bolivia", "Chile", "Brazil", "Peru"],cor: "Brazil"},
 {src: require("./img/bs.png"), buttons: ["Barbados", "Palestine", "Cuba", "Bahamas"],cor: "Bahamas"},
 {src: require("./img/bt.png"), buttons: ["Bhutan", "Japan", "China", "Myanmar"],cor: "Bhutan"},
 {src: require("./img/bw.png"), buttons: ["Namabia", "Botswana", "South Africa", "Swaziland"],cor: "Botswana"},
 {src: require("./img/by.png"), buttons: ["Russia", "Lithuania", "Belarus", "Ukraine"],cor: "Belarus"},
 {src: require("./img/bz.png"), buttons: ["Mexico", "Costa Rica", "Panama", "Belize"],cor: "Belize"}];

const blank = {src: null, b1: null, b2: null, b3: null, b4: null,cor: null};

var countryUsed = [];

const amountOfFlags =  obj.length -1;

const randNum = () => {
    return Math.floor(Math.random() * (amountOfFlags));
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

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
        if(countryNumber > -1){
            
            return obj[countryNumber];
        }
        else{
            return blank;
        }
       
    }
}
export default Utils;