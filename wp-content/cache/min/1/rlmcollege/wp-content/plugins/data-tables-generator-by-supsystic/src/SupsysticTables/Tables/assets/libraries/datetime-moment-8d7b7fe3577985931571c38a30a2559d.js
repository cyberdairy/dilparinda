(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","moment","datatables.net"],factory)}else{factory(jQuery,moment)}}(function($,moment){$.fn.dataTable.moment=function(format,locale,reverseEmpties){var types=$.fn.dataTable.ext.type;types.detect.unshift(function(d){if(d){if(d.replace){d=d.replace(/(<.*?>)|(\r?\n|\r)/g,'')}
d=$.trim(d)}
if(d===''||d===null){return'moment-'+format}
return moment(d,format,locale,!0).isValid()?'moment-'+format:null});types.order['moment-'+format+'-pre']=function(d){if(d){if(d.replace){d=d.replace(/(<.*?>)|(\r?\n|\r)/g,'')}
d=$.trim(d)}
return!moment(d,format,locale,!0).isValid()?(reverseEmpties?-Infinity:Infinity):parseInt(moment(d,format,locale,!0).format('x'),10)}}}))