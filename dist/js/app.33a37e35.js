(function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],m=0,p=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},i={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/create-a-client/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0918":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("CreatePage")],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step === 1"}],staticClass:"step"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Фамилия*"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.surname,expression:"surname",modifiers:{trim:!0}}],staticClass:"form__input",class:{"form-group--error":e.$v.surname.$error},attrs:{maxlength:"20",type:"text"},domProps:{value:e.surname},on:{input:[function(t){t.target.composing||(e.surname=t.target.value.trim())},function(t){return e.setSurname(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.surname.required?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgRequired))]),e.$v.surname.minLength?e.$v.surname.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]):r("span",{staticClass:"error"},[e._v(" Не менее "+e._s(e.$v.surname.$params.minLength.min)+" букв.")]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Имя*"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",class:{"form-group--error":e.$v.name.$error},attrs:{maxlength:"20",type:"text"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value.trim())},function(t){return e.setName(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.name.required?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgRequired))]),e.$v.name.minLength?e.$v.name.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]):r("span",{staticClass:"error"},[e._v(" Не менее "+e._s(e.$v.name.$params.minLength.min)+" букв.")]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Отчество"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.patronymic,expression:"patronymic",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{maxlength:"20",type:"text"},domProps:{value:e.patronymic},on:{input:[function(t){t.target.composing||(e.patronymic=t.target.value.trim())},function(t){return e.setPatronymic(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.patronymic.minLength?e.$v.patronymic.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]):r("span",{staticClass:"error"},[e._v(" Не менее "+e._s(e.$v.patronymic.$params.minLength.min)+" букв.")]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Дата рождения*"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.birthdate,expression:"birthdate",modifiers:{trim:!0}}],staticClass:"form__input",class:{"form-group--error":e.$v.birthdate.$error},attrs:{type:"date"},domProps:{value:e.birthdate},on:{input:[function(t){t.target.composing||(e.birthdate=t.target.value.trim())},function(t){return e.setBirthdate(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.birthdate.required?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgRequired))]),r("button",{staticClass:"btn",attrs:{type:"button",disabled:e.disabledBtn1},on:{click:e.nextStep}},[e._v("Следующий шаг ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step === 2"}],staticClass:"step"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Номер телефона*"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phoneNumber,expression:"phoneNumber",modifiers:{trim:!0}}],staticClass:"form__input",class:{"form-group--error":e.$v.phoneNumber.$error},attrs:{type:"tel",placeholder:"7-xxx-xxx-xxxx",maxlength:"14",minlength:"11"},domProps:{value:e.phoneNumber},on:{input:[function(t){t.target.composing||(e.phoneNumber=t.target.value.trim())},function(t){return e.setPhoneNumber(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.phoneNumber.required?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgRequired))]),e.$v.phoneNumber.phone?e._e():r("span",{staticClass:"error"},[e._v(" Неверно набран номер")]),e._m(0),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Группа клиентов* "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.typeOfClient,expression:"typeOfClient",modifiers:{trim:!0}}],staticClass:"type-of-client",attrs:{multiple:"multiple",size:"3"},on:{select:function(t){return e.setTypeOfClient(t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.typeOfClient=t.target.multiple?r:r[0]}}},[r("option",[e._v(" VIP")]),r("option",[e._v(" Проблемные")]),r("option",[e._v(" ОМС")])])])]),e.$v.typeOfClient.required?e._e():r("span",{staticClass:"error"},[e._v(" Выберите группу клиентов")]),e._m(1),e._m(2),r("div",{staticClass:"flex-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.backStep}},[e._v("Назад")]),r("button",{staticClass:"btn",attrs:{type:"button",disabled:e.disabledBtn2},on:{click:e.nextStep}},[e._v("Следующий шаг ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:3===e.step,expression:"step === 3"}],staticClass:"step"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Индекс"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.regionIndex,expression:"regionIndex",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",placeholder:"xxxxxx",maxlength:"6"},domProps:{value:e.regionIndex},on:{input:[function(t){t.target.composing||(e.regionIndex=t.target.value.trim())},function(t){return e.setRegionIndex(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.regionIndex.onlyNumbers?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Страна"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.country,expression:"country",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"20"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.country.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Область"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.region,expression:"region",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"25"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.region.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Город*"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.city,expression:"city",modifiers:{trim:!0}}],staticClass:"form__input",class:{"form-group--error":e.$v.typeOfClient.$error},attrs:{maxlength:"30",type:"text"},domProps:{value:e.city},on:{input:[function(t){t.target.composing||(e.city=t.target.value.trim())},function(t){return e.setCity(t.target.value)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.city.required?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgRequired))]),e.$v.city.minLength?e.$v.city.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]):r("span",{staticClass:"error"},[e._v(" Не менее "+e._s(e.$v.city.$params.minLength.min)+" букв.")]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Улица"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.street,expression:"street",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"30"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Дом"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.house,expression:"house",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"30"},domProps:{value:e.house},on:{input:function(t){t.target.composing||(e.house=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.house.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"flex-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.backStep}},[e._v("Назад")]),r("button",{staticClass:"btn",attrs:{type:"button",disabled:e.disabledBtn3},on:{click:e.nextStep}},[e._v("Следующий шаг ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:4===e.step,expression:"step === 4"}],staticClass:"step"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Тип документа* "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.document,expression:"document",modifiers:{trim:!0}}],class:{"form-group--error":e.$v.document.$error},on:{select:function(t){return e.setDocument(t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.document=t.target.multiple?r:r[0]}}},[r("option",[e._v("Паспорт")]),r("option",[e._v("Свидетельство о рождении")]),r("option",[e._v("Вод. удостоверение")])])])]),e.$v.document.required?e._e():r("span",{staticClass:"error"},[e._v(" Выберите тип документа")]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Серия"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.docSeries,expression:"docSeries",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"30"},domProps:{value:e.docSeries},on:{input:function(t){t.target.composing||(e.docSeries=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.docSeries.onlyNumbers?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Номер"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.docNumber,expression:"docNumber",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"30"},domProps:{value:e.docNumber},on:{input:function(t){t.target.composing||(e.docNumber=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.docNumber.onlyNumbers?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Кем выдан"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.docGivenOut,expression:"docGivenOut",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text",maxlength:"30"},domProps:{value:e.docGivenOut},on:{input:function(t){t.target.composing||(e.docGivenOut=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.docGivenOut.alpha?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgInvalid))]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Дата выдачи*"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.docDate,expression:"docDate",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"date",maxlength:"30"},domProps:{value:e.docDate},on:{input:function(t){t.target.composing||(e.docDate=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e.$v.docDate.required?e._e():r("span",{staticClass:"error"},[e._v(e._s(e.msgRequired))]),r("div",{staticClass:"flex-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.backStep}},[e._v("Назад")]),r("button",{staticClass:"btn",attrs:{type:"button",disabled:e.disabledBtn4},on:{click:e.nextStep}},[e._v("Завершить регистрацию ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:5===e.step,expression:"step === 5"}],staticClass:"step"},[r("h1",[e._v("Клиент создан")]),r("p",[e._v(e._s("Фамилия: "+e.surname))]),r("p",[e._v(e._s("Имя: "+e.name))]),r("p",[e._v(e._s("Дата рождения: "+e.birthdate))]),r("p",[e._v(e._s("Телефон: +"+e.phoneNumber))]),r("p",[e._v(e._s("Клиент группы: "+e.typeOfClient))]),r("p",[e._v(e._s("Город: "+e.city))]),r("p",[e._v(e._s("Документ: "+e.document))]),r("p",[e._v(e._s("Дата выдачи: "+e.docDate))])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"gender"}},[e._v("Пол"),r("br"),r("label",[r("input",{attrs:{type:"radio",name:"gender",id:"gender"}}),e._v("Мужской")]),r("label",[r("input",{attrs:{type:"radio",name:"gender"}}),e._v("Женский")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",[e._v("Лечащий врач "),r("select",{staticClass:"type-of-client"},[r("option",[e._v("Иванов")]),r("option",[e._v("Захаров")]),r("option",[e._v("Чернышева")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"gender"}},[e._v("Не отправлять СМС "),r("input",{attrs:{type:"checkbox"}})])])}],l=(r("b0c0"),r("9341")),u=l["helpers"].regex("alpha",/^[ЁА-Яёа-я]*$/),c=l["helpers"].regex("phone",/^\(?([7]{1})\)?[-. ]?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),m=l["helpers"].regex("onlyNumbers",/^[0-9]*$/),p={name:"HelloWorld",data:function(){return{step:1,msgRequired:"Поле обязательно для заполнения",msgInvalid:"Недопустимые символы",surname:"",name:"",patronymic:"",birthdate:"",phoneNumber:"",typeOfClient:[],regionIndex:"",country:"",region:"",city:"",street:"",house:"",document:[],docSeries:"",docNumber:"",docGivenOut:"",docDate:""}},validations:{surname:{required:l["required"],minLength:Object(l["minLength"])(4),alpha:u},name:{required:l["required"],minLength:Object(l["minLength"])(4),alpha:u},patronymic:{minLength:Object(l["minLength"])(6),alpha:u},birthdate:{required:l["required"]},phoneNumber:{required:l["required"],phone:c},typeOfClient:{required:l["required"]},regionIndex:{required:l["required"],onlyNumbers:m},country:{alpha:u},region:{alpha:u},city:{alpha:u,required:l["required"],minLength:Object(l["minLength"])(3)},house:{alpha:u},document:{required:l["required"]},docDate:{required:l["required"]},docSeries:{onlyNumbers:m},docNumber:{onlyNumbers:m},docGivenOut:{alpha:u}},computed:{disabledBtn1:function(){return this.$v.surname.$invalid||this.$v.name.$invalid||this.$v.birthdate.$invalid},disabledBtn2:function(){return this.$v.phoneNumber.$invalid||this.$v.typeOfClient.$invalid},disabledBtn3:function(){return this.$v.city.$invalid},disabledBtn4:function(){return this.$v.document.$invalid||this.$v.docDate.$invalid||this.$v.surname.$invalid||this.$v.name.$invalid||this.$v.phoneNumber.$invalid||this.$v.typeOfClient.$invalid||this.$v.city.$invalid}},methods:{setSurname:function(e){this.surname=e,this.$v.surname.$touch()},setName:function(e){this.name=e,this.$v.name.$touch()},setPatronymic:function(e){this.patronymic=e,this.$v.patronymic.$touch()},setBirthdate:function(e){this.birthdate=e,this.$v.birthdate.$touch()},setPhoneNumber:function(e){this.phoneNumber=e,this.$v.phoneNumber.$touch()},setTypeOfClient:function(e){this.typeOfClient=e,this.$v.typeOfClient.$touch()},setRegionIndex:function(e){this.regionIndex=e,this.$v.regionIndex.$touch()},setCity:function(e){this.city=e,this.$v.city.$touch()},setDocument:function(e){this.document=e,this.$v.document.$touch()},nextStep:function(){this.step++},backStep:function(){this.step--}}},v=p,d=(r("efe9"),r("2877")),f=Object(d["a"])(v,s,o,!1,null,"980ca612",null),_=f.exports,b={name:"App",components:{CreatePage:_}},g=b,h=(r("5c0b"),Object(d["a"])(g,i,n,!1,null,null,null)),$=h.exports,C=r("8454"),y=r.n(C);a["a"].use(y.a),a["a"].config.productionTip=!1,a["a"].config.devtools=!0,new a["a"]({render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},efe9:function(e,t,r){"use strict";r("0918")}});
//# sourceMappingURL=app.33a37e35.js.map