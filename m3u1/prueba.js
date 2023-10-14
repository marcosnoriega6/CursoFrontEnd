const moment= require('moment');

var hoy = new Date()

console.log('Hoy es ' + hoy);

console.log(' El día de hoy es ' + moment().format('MMMM Do YYYY, h:mm:ss a'));

moment.locale('es')

console.log(moment("20191031", "YYYYMMDD").fromNow());