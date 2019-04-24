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
 {src: require("./img/bz.png"), buttons: ["Mexico", "Costa Rica", "Panama", "Belize"],cor: "Belize"},
 {src: require("./img/ca.png"), buttons: ["Canada", "Costa Rica", "United States", "Greenland"],cor: "Canada"},
 {src: require("./img/cd.png"), buttons: ["Congo (Rep.)", "Congo (D. R.)", "Rwanada", "Zambia"],cor: "Congo (D. R.)"},
 {src: require("./img/cf.png"), buttons: ["Congo (Rep.)", "Congo (D. R.)", "Central African Republic", "Guinea"],cor: "Central African Republic"},
 {src: require("./img/cg.png"), buttons: ["Congo (D. R.)", "Zambia", "Central African Republic", "Congo (Rep.)"],cor: "Congo (Rep.)"},
 {src: require("./img/ch.png"), buttons: ["Switzerland", "Lichenstien", "Germany", "Luxembourg"],cor: "Switzerland"},
 {src: require("./img/ci.png"), buttons: ["Guinea", "Côte d'Ivoire", "Ghana", "Italy"],cor: "Côte d'Ivoire"},
 {src: require("./img/ck.png"), buttons: ["Austrailia", "New Zealand", "Cook Islands", "United Kingdom"],cor: "Cook Islands"},
 {src: require("./img/cl.png"), buttons: ["Mexico", "United States", "Panama", "Chile"],cor: "Chile"},
 {src: require("./img/cm.png"), buttons: ["Cameroon", "Guinea", "Ethiopia", "Somalia"],cor: "Cameroon"},
 {src: require("./img/cn.png"), buttons: ["Japan", "China", "North Korea", "Taiwan"],cor: "China"},
 {src: require("./img/co.png"), buttons: ["Venezuela", "Ecuador", "Colombia", "Brazil"],cor: "Colombia"},
 {src: require("./img/cr.png"), buttons: ["Mexico", "Panama", "Colombia", "Costa Rica"],cor: "Costa Rica"},
 {src: require("./img/cu.png"), buttons: ["Cuba", "Bahamas", "Jamaica", "Mexico"],cor: "Cuba"},
 {src: require("./img/cv.png"), buttons: ["Cuba", "Cape Verde", "Spain", "Comoros"],cor: "Cape Verde"},
 {src: require("./img/cw.png"), buttons: ["Aruba", "Cape Verde", "Curaçao", "Barbados"],cor: "Curaçao"},
 {src: require("./img/cy.png"), buttons: ["Greece", "Malta", "Israel", "Cyprus"],cor: "Cyprus"},
 {src: require("./img/cz.png"), buttons: ["Czech Republic", "Slovakia", "Poland", "Slovenia"],cor: "Czech Republic"},
 {src: require("./img/de.png"), buttons: ["Belguim", "France", "Germany", "Norway"],cor: "Germany"},
 {src: require("./img/dj.png"), buttons: ["Ethiopia", "Somalia", "Eritrea", "Djibouti"],cor: "Djibouti"},
 {src: require("./img/dk.png"), buttons: ["Denmark", "Norway", "Finland", "Sweden"],cor: "Denmark"},
 {src: require("./img/dm.png"), buttons: ["Dominican Republic", "Dominica", "Haiti", "Jamaica"],cor: "Dominica"},
 {src: require("./img/do.png"), buttons: ["Haiti", "Dominica", "Dominican Republic", "Jamaica"],cor: "Dominican Republic"},
 {src: require("./img/dz.png"), buttons: ["Yemen", "Turkey", "Pakistan", "Algeria"],cor: "Algeria"},
 {src: require("./img/ec.png"), buttons: ["Ecuador", "Bolivia", "Colombia", "Chile"],cor: "Ecuador"},
 {src: require("./img/ee.png"), buttons: ["Lithuania", "Estonia", "Finland", "Belarus"],cor: "Estonia"},
 {src: require("./img/eg.png"), buttons: ["Yemen", "Oman", "Egypt", "Libya"],cor: "Egypt"},
 {src: require("./img/er.png"), buttons: ["Ethiopia", "Somalia", "Djibouti", "Eritrea"],cor: "Eritrea"},
 {src: require("./img/es.png"), buttons: ["Spain", "Brazil", "Portugal", "Andora"],cor: "Spain"},
 {src: require("./img/et.png"), buttons: ["Somalia", "Ethiopia", "Djibouti", "Eritrea"],cor: "Ethiopia"},
 {src: require("./img/fi.png"), buttons: ["Lithuania", "Estonia", "Finland", "Belarus"],cor: "Finland"},
 {src: require("./img/bm.png"), buttons: ["Anguilla", "United Kingdom", "Bermuda", "Fiji"],cor: "Fiji"}];


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