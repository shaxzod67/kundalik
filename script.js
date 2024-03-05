let button = document.querySelector('#button');
let pp = document.querySelector("#pp");
function kundalik() {
    let input1 = document.querySelector('#input1').value
    let a = 'Olimjonov '
    let b = 'Bobomurod '
    if (input1 == a) {
        function myDay() {
            let input = document.querySelector('#input').value
            switch (input) {
                case 'Dushanba ':
                    pp.innerHTML = "1: 5:00 - 6:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 6:00 - 7:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 7:00 - 8:00 = Choy va h.z  " + '<br>' +
                        "4: 8:00 - 12:00 = Dasturlashdan amalyot (vazifa va qo'shimcha) " + '<br>' +
                        "5: 12:00 - 14:00 = Obet va Bo'sh vaqt " + '<br>' +
                        "6: 14:00 - 16:00 = Ing tili amalyot " + '<br>' +
                        "7: 16:00 - 18:00 = Dasturlash dars " + '<br>' +
                        "8: 18:00 - 20:00 = Dasturlash darsni mustahkamlash " + '<br>' +
                        "9: 20:00 - 22:00 = Bo'sh vaqt " + '<br>' +
                        "10: 22:00 - 23:00 = Ing tili Lug'at yodlash " + '<br>'
                    break;

                case 'Seshanba ':
                    pp.innerHTML = "1: 5:00 - 6:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 6:00 - 7:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 7:00 - 8:00 = Choy va h.z  " + '<br>' +
                        "4: 8:00 - 12:00 = Dasturlashdan amalyot (vazifa va qo'shimcha) " + '<br>' +
                        "5: 12:00 - 14:00 = Obet va Bo'sh vaqt " + '<br>' +
                        "6: 14:00 - 16:00 = Dasturlash dars " + '<br>' +
                        "7: 16:00 - 18:00 = Prava dars" + '<br>' +
                        "8: 18:00 - 20:00 = Dasturlash darsni mustahkamlash " + '<br>' +
                        "9: 20:00 - 22:00 = Bo'sh vaqt " + '<br>' +
                        "10: 22:00 - 23:00 = Ing tili Lug'at yodlash " + '<br>'
                    break;

                case 'Chorshanba ':
                    pp.innerHTML = "1: 5:00 - 6:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 6:00 - 7:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 7:00 - 8:00 = Choy va h.z  " + '<br>' +
                        "4: 8:00 - 12:00 = Dasturlashdan amalyot (vazifa va qo'shimcha) " + '<br>' +
                        "5: 12:00 - 14:00 = Obet va Bo'sh vaqt " + '<br>' +
                        "6: 14:00 - 16:00 = Ing tili amalyot " + '<br>' +
                        "7: 16:00 - 18:00 = Dasturlash dars " + '<br>' +
                        "8: 18:00 - 20:00 = Dasturlash darsni mustahkamlash " + '<br>' +
                        "9: 20:00 - 22:00 = Bo'sh vaqt " + '<br>' +
                        "10: 22:00 - 23:00 = Ing tili Lug'at yodlash " + '<br>'
                    break;

                case 'Payshanba ':
                    pp.innerHTML = "1: 5:00 - 6:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 6:00 - 7:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 7:00 - 8:00 = Choy va h.z  " + '<br>' +
                        "4: 8:00 - 12:00 = Dasturlashdan amalyot (vazifa va qo'shimcha) " + '<br>' +
                        "5: 12:00 - 14:00 = Obet va Bo'sh vaqt " + '<br>' +
                        "6: 14:00 - 16:00 = Dasturlash dars " + '<br>' +
                        "7: 16:00 - 18:00 = Prava dars" + '<br>' +
                        "8: 18:00 - 20:00 = Dasturlash darsni mustahkamlash " + '<br>' +
                        "9: 20:00 - 22:00 = Bo'sh vaqt " + '<br>' +
                        "10: 22:00 - 23:00 = Ing tili Lug'at yodlash " + '<br>'
                    break;

                case 'Juma ':
                    pp.innerHTML = "1: 5:00 - 6:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 6:00 - 7:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 7:00 - 8:00 = Choy va h.z  " + '<br>' +
                        "4: 8:00 - 12:00 = Dasturlashdan amalyot (vazifa va qo'shimcha) " + '<br>' +
                        "5: 12:00 - 12:30 = Obet " + '<br>' +
                        "6: 12:40 - 13:50 = Juma Nomoz " + '<br>' +
                        "7: 14:00 - 16:00 = Ing tili amalyot " + '<br>' +
                        "8: 16:00 - 18:00 = Dasturlash dars " + '<br>' +
                        "9: 18:00 - 20:00 = Dasturlash darsni mustahkamlash " + '<br>' +
                        "10: 20:00 - 22:00 = Bo'sh vaqt " + '<br>' +
                        "11: 22:00 - 23:00 = Ing tili Lug'at yodlash " + '<br>'
                    break;


                case 'Shanba ':
                    pp.innerHTML = "1: 5:00 - 6:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 6:00 - 7:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 7:00 - 8:00 = Choy va h.z  " + '<br>' +
                        "4: 8:00 - 12:00 = Dasturlashdan amalyot (vazifa va qo'shimcha) " + '<br>' +
                        "5: 12:00 - 14:00 = Obet va Bo'sh vaqt " + '<br>' +
                        "6: 14:00 - 16:00 = Dasturlash dars " + '<br>' +
                        "6: 16:00 - 23:00 = Miyyaga dam berish vaqti (pls, o'tirishla, va h.z )"
                    break;


                case 'Yakshanba ':
                    pp.innerHTML = " Ixtiyoriy Kun"
                    break;
                default:
                    pp.innerHTML = " Hafta Kuni noto'g'ti kiritildi."
            }

        }
    }
    
    else if(input1 == b){
        function myDay() {
            let input = document.querySelector('#input').value
            switch (input) {
                case 'Dushanba ':
                    pp.innerHTML = "1: 6:00 - 7:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                        "2: 7:00 - 8:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                        "3: 8:00 - 11:00 =Dasturlashdan dars amalyot " + '<br>' +
                        "4: 11:30 - 13:00 = Obet " + '<br>' +
                        "5: 13:00 - 15:00 = Kitob Muqola" + '<br>' +
                        "6: 15:00 - 16:00 = Telfon korish " + '<br>' +
                        "7: 16:00 - 18:00 = Dasturlash dars " + '<br>' +
                        "8: 18:00 - 20:00 = Dasturlash darsni Vedio" + '<br>' +
                        "9: 20:00 - 22:00 = Bo'sh vaqt (Kino) " + '<br>' +
                        "10: 22:00 - 23:00 = Uyqu " + '<br>'
                    break;

                case 'Seshanba ':
                    pp.innerHTML = "1: 6:00 - 7:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                    "2: 7:00 - 8:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                    "3: 8:00 - 12:00 =Dasturlashdan dars amalyot " + '<br>' +
                    "4: 12:30 - 13:00 = Obet " + '<br>' +
                    "5: 14:00 - 16:00 =Dasturlash dars" + '<br>' +
                    "6: 16:00 - 17:00 = Dasturlash dars korish" + '<br>' +
                    "7: 17:00 - 18:00 = Kvartira bo'sh vaqt " + '<br>' +
                    "8: 18:00 - 20:00 = Dasturlash uyga vasifa" + '<br>' +
                    "9: 20:00 - 22:00 = Bo'sh vaqt (Kino) " + '<br>' +
                    "10: 22:00 - 23:00 = Uyqu " + '<br>'
                    break;

                case 'Chorshanba ':
                    pp.innerHTML = "1: 6:00 - 7:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                    "2: 7:00 - 8:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                    "3: 8:00 - 11:00 =Dasturlashdan dars amalyot " + '<br>' +
                    "4: 11:30 - 13:00 = Obet " + '<br>' +
                    "5: 13:00 - 15:00 = Kitob Muqola" + '<br>' +
                    "6: 15:00 - 16:00 = Telfon korish " + '<br>' +
                    "7: 16:00 - 18:00 = Dasturlash dars " + '<br>' +
                    "8: 18:00 - 20:00 = Dasturlash darsni Vedio" + '<br>' +
                    "9: 20:00 - 22:00 = Bo'sh vaqt (Kino) " + '<br>' +
                    "10: 22:00 - 23:00 = Uyqu " + '<br>'
                    break;

                case 'Payshanba ':
                    pp.innerHTML = "1: 6:00 - 7:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                    "2: 7:00 - 8:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                    "3: 8:00 - 12:00 =Dasturlashdan dars amalyot " + '<br>' +
                    "4: 12:30 - 13:00 = Obet " + '<br>' +
                    "5: 14:00 - 16:00 =Dasturlash dars" + '<br>' +
                    "6: 16:00 - 17:00 = Dasturlash dars korish" + '<br>' +
                    "7: 17:00 - 18:00 = Kvartira bo'sh vaqt " + '<br>' +
                    "8: 18:00 - 20:00 = Dasturlash uyga vasifa" + '<br>' +
                    "9: 20:00 - 22:00 = Bo'sh vaqt (Kino) " + '<br>' +
                    "10: 22:00 - 23:00 = Uyqu " + '<br>'
                    break;

                case 'Juma ':
                    pp.innerHTML = "1: 6:00 - 7:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                    "2: 7:00 - 8:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                    "3: 8:00 - 11:00 =Dasturlashdan dars amalyot " + '<br>' +
                    "4: 11:30 - 13:00 = Obet " + '<br>' +
                    "5: 13:00 - 15:00 = Kitob Muqola" + '<br>' +
                    "6: 15:00 - 16:00 = Telfon korish " + '<br>' +
                    "7: 16:00 - 18:00 = Dasturlash dars " + '<br>' +
                    "8: 18:00 - 20:00 = Dasturlash darsni Vedio" + '<br>' +
                    "9: 20:00 - 22:00 = Bo'sh vaqt (Kino) " + '<br>' +
                    "10: 22:00 - 23:00 = Uyqu " + '<br>'
                    break;


                case 'Shanba ':
                    pp.innerHTML = "1: 6:00 - 7:00 = Ingiliz tili Lug'at yodlash " + '<br>' +
                    "2: 7:00 - 8:00 = Dasturlashdan darslik ko'rish  " + '<br>' +
                    "3: 8:00 - 12:00 =Dasturlashdan dars amalyot " + '<br>' +
                    "4: 12:30 - 13:00 = Obet " + '<br>' +
                    "5: 14:00 - 16:00 =Dasturlash dars" + '<br>' +
                    "6: 16:00 - 17:00 = Dasturlash dars korish" + '<br>' +
                    "7: 17:00 - 18:00 = Kvartira bo'sh vaqt " + '<br>' +
                    "8: 18:00 - 20:00 = Dasturlash uyga vasifa" + '<br>' +
                    "9: 20:00 - 22:00 = Bo'sh vaqt (Kino) " + '<br>' +
                    "10: 22:00 - 23:00 = Uyqu " + '<br>'
                    break;


                case 'Yakshanba ':
                    pp.innerHTML = " Ixtiyoriy  Vaqt"
                    break;
                default:
                    pp.innerHTML = " Hafta Kuni noto'g'ti kiritildi."
            }

        }
        button.onclick = myDay
    }
    else{
        pp.innerHTML = "Siz Hafta kuni yoki ismni noto'g'ti kiritdingiz."
    }
    button.onclick = myDay
}
button.onclick = kundalik

