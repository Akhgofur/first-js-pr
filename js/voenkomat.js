let firstName = prompt('isminigiz')
let lastName = prompt('familiyangiz')
let birthYear = prompt('tug\'ilgan yilingiz')
let year = 2022-birthYear
if(year<18){
    alert(firstName + '\n' + lastName + '\n' + 'yoshingiz : ' + year + '\n' + 'siz hali balog\'at yoshiga yetmagansiz')
}
else if(year>=18){
    alert(firstName + '\n' + lastName + '\n' + 'yoshingiz : ' + year + '\n' + 'siz armiyaga qabul qilinasiz')
}
else{
    alert('noto\'g\'ri to\'ldirilgan')
}