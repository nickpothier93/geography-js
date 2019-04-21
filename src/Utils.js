import $ from 'jquery'; 

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
    }
}
export default Utils;