(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,a,n){e.exports=n(25)},18:function(e,a,n){},25:function(e,a,n){"use strict";n.r(a);var o=n(0),c=n.n(o),t=n(10),m=n.n(t),d=n(2),r=(n(18),{fontSize:"20px",position:"absolute",left:"2rem",top:"1rem"}),i=({bool:e})=>c.a.createElement("header",null,c.a.createElement("h1",{style:e?r:{}},"Today's weather")),l=n(4),s=n.n(l),u=n(12),p=n(11),h=n(5),E=n(8),S=n(7),g=({dBool:e,setDbool:a,changeValue:n,dropdown:o,countries:t,getWeather:m,setCountry:d})=>c.a.createElement("div",{className:"dropdown d1",style:{display:e?"block":"none"}},c.a.createElement("ul",null,o.map((e,o)=>c.a.createElement("li",{key:o,onClick:e=>{var o=e.target.firstChild.innerText,c=t.find(e=>e.name===o);c.code&&d(c.code),n(o),a(!1)}},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.country)))));var b=({setData:e,setBool:a,bool:n})=>{var t=Object(o.useState)(""),m=Object(d.a)(t,2),r=m[0],i=m[1],l=Object(o.useState)(""),b=Object(d.a)(l,2),C=b[0],M=b[1],y=Object(o.useState)([{}]),v=Object(d.a)(y,2),N=v[0],I=v[1],A=Object(o.useState)(!1),G=Object(d.a)(A,2),B=G[0],T=G[1],w="910f148c38b5d0f018343257872adabf";function f(e){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(s.a.mark((function n(o){var c,t,m,d;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=o.slice(0,1).toUpperCase(),o=c+o.slice(1).toLowerCase(),m="".concat(t="https://cors-anywhere.herokuapp.com/","http://api.openweathermap.org/data/2.5/weather?q=").concat(o,"&appid=").concat(w,"&units=metric"),C&&(console.log("getting weather from ".concat(o,",").concat(C)),m="".concat(t,"http://api.openweathermap.org/data/2.5/weather?q=").concat(o+","+C,"&appid=").concat(w,"&units=metric")),d=setInterval(()=>{D(e=>e+45)},200),fetch(m).then(e=>(console.log(e.status),e.status>=400?null:e.json())).then(n=>{e(Object(u.a)({},n)),D(0),clearInterval(d),a(e=>!0)}).catch(e=>{console.log(e),D(270),clearInterval(d),a(e=>!1)});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(o.useEffect)(()=>{},[r]);var P=Object(o.useState)(270),R=Object(d.a)(P,2),O=R[0],D=R[1];return c.a.createElement("div",{className:"search_engine"},c.a.createElement("small",null,"hint: country name first"),c.a.createElement("div",{className:"engine"},c.a.createElement("div",{className:"search"},c.a.createElement(h.a,{icon:E.b}),c.a.createElement("input",{onChange:e=>{var a=e.target.value;i(a.toLowerCase().replace(/\b(\w)/g,e=>e.toUpperCase()))},type:"text",placeholder:"Enter City",onKeyPress:e=>{"Enter"===e.key&&f(e.target.value)}}),c.a.createElement("div",{className:"cout"},c.a.createElement("div",{className:"icon",onClick:()=>{console.log(r),r&&(f(r),a(e=>!e))}},c.a.createElement(h.a,{icon:E.a,size:"lg",transform:{rotate:O}})),c.a.createElement("input",{type:"text",placeholder:"Enter Country",onChange:e=>{!function(e,a=S){var n=e.target.value;n=n.slice(0,1).toUpperCase()+n.slice(1).toLowerCase(),I(a.filter(e=>e.name.includes(n)))}(e),T(!0)}}))),c.a.createElement(g,{changeValue:function(e){document.querySelector(".cout input").value=e},countries:S,dropdown:N,dBool:B,setDbool:T,getWeather:f,setCountry:M})))};function C(e){var a=e.getHours(),n=e.getMinutes();return"".concat(a,":").concat(n)}var M=(new Date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),y=({name:e,sys:a,weather:n,main:o,wind:t,bool:m})=>{var d;return a=a||{},o=o||{},t=t||{},(n=n?n[0]:{}).icon&&(d="http://openweathermap.org/img/wn/".concat(n.icon,"@2x.png")),e&&a&&n&&o&&t?c.a.createElement("div",{className:"mainweather",style:{display:m?"flex":"none"}},c.a.createElement("div",{className:"location"},c.a.createElement("h3",null,e+","+a.country),c.a.createElement("p",null,M)),c.a.createElement("div",{className:"status"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:d,alt:""})),c.a.createElement("div",null,c.a.createElement("p",null,o.temp,"\xb0C"),c.a.createElement("p",null,n.description))),c.a.createElement("div",{className:"overview"},c.a.createElement("div",null,c.a.createElement("p",null,o.temp_max,"\xb0C"),c.a.createElement("p",null,"High")),c.a.createElement("div",null,c.a.createElement("p",null," ",t.speed,"mph "),c.a.createElement("p",null,"Wind")),c.a.createElement("div",null,c.a.createElement("p",null,C(new Date(1e3*a.sunrise))),c.a.createElement("p",null,"Sunrise")),c.a.createElement("div",null,c.a.createElement("p",null,o.temp_min,"\xb0C"),c.a.createElement("p",null,"Low")),c.a.createElement("div",null,c.a.createElement("p",null,t.deg,"\xb0\u03b8"),c.a.createElement("p",null,"Direction")),c.a.createElement("div",null,c.a.createElement("p",null,C(new Date(1e3*a.sunset))),c.a.createElement("p",null,"Sunset")))):c.a.createElement("div",{className:"mainweather",style:{display:m?"flex":"none"}})},v=()=>{var e=Object(o.useState)({}),a=Object(d.a)(e,2),n=a[0],t=a[1],m=Object(o.useState)(!1),r=Object(d.a)(m,2),l=r[0],s=r[1];return c.a.createElement("div",{className:"main"},c.a.createElement(i,{bool:l}),c.a.createElement(b,{setData:t,setBool:s,bool:l}),c.a.createElement(y,{name:n.name,sys:n.sys,weather:n.weather,main:n.main,wind:n.wind,bool:l}))};m.a.render(c.a.createElement(v,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"\xc5land Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\'S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')}},[[13,1,2]]]);
//# sourceMappingURL=main.6a43421b.chunk.js.map