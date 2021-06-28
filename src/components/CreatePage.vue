<template>
  <div class="hello">

    <div class="step" v-show="step === 1">
         <div class="form-group">
             <label class="form__label">Фамилия*<br>
             <input class="form__input"  maxlength="20"
                    v-model.trim.lazy="surname"
                    @blur="$v.surname.$touch()" type="text"
                    :class="{ 'form-group--error': $v.surname.$error }"/></label>
         </div>
        <span  v-if="!$v.surname.required" class="error">{{msgRequired}}</span>
          <span class="error" v-if="!$v.surname.minLength"> Не менее {{$v.surname.$params.minLength.min}} букв.</span>
          <span class="error" v-else-if="!$v.surname.alpha">{{msgInvalid}}</span>

         <div class="form-group">
            <label class="form__label">Имя*<br>
            <input class="form__input" maxlength="20" v-model.trim.lazy="name"
                   @blur="$v.name.$touch()" type="text"
                   :class="{ 'form-group--error': $v.name.$error }"/></label>
          </div>
        <span class="error" v-if="!$v.name.required">{{msgRequired}}</span>
          <span class="error" v-if="!$v.name.minLength"> Не менее {{$v.name.$params.minLength.min}} букв.</span>
          <span class="error" v-else-if="!$v.name.alpha">{{msgInvalid}}</span>

           <div class="form-group">
             <label class="form__label">Отчество<br>
             <input class="form__input" maxlength="20"
                    v-model.trim.lazy="patronymic" type="text"/></label>
           </div>
           <span class="error" v-if="!$v.patronymic.minLength"> Не менее {{$v.patronymic.$params.minLength.min}} букв.</span>
           <span class="error" v-else-if="!$v.patronymic.alpha">{{msgInvalid}}</span>

        <div class="form-group">
            <label class="form__label">Дата рождения*<br>
                <input class="form__input" v-model.trim.lazy="birthdate"
                       @blur="$v.birthdate.$touch()" type="date"
                       :class="{ 'form-group--error': $v.birthdate.$error }"/></label>
        </div>
        <span class="error" v-if="!$v.birthdate.required">{{msgRequired}}</span>

         <button type="button" class="btn"
                 :disabled="disabledBtn1"
                @click="nextStep">Следующий шаг
         </button>
  </div>


    <div class="step" v-show="step === 2">
          <div class="form-group">
              <label class="form__label">Номер телефона*<br>
              <input class="form__input" v-model.trim="phoneNumber"
                     @blur="$v.phoneNumber.$touch()"
                     type="tel" placeholder="7-xxx-xxx-xxxx" maxlength="14" minlength="11"
                     :class="{ 'form-group--error': $v.phoneNumber.$error }"/></label>
          </div>
        <span class="error" v-if="!$v.phoneNumber.required">{{msgRequired}}</span>
          <span class="error" v-if="!$v.phoneNumber.phone"> Неверно набран номер</span>

          <div class="form-group">
              <label for="gender">Пол<br>
                   <label><input type="radio"  id="gender" v-model="gender">Мужской</label>
                   <label><input type="radio" v-model="gender">Женский</label>
            </label>
          </div>

          <div class="form-group">
              <label class="form__label">Группа клиентов*
                 <select multiple="multiple" size="3" class="type-of-client" v-model.trim.lazy="typeOfClient"
                         @blur="$v.typeOfClient.$touch()">
                     <option > VIP</option>
                     <option> Проблемные</option>
                     <option> ОМС</option>
                 </select>
              </label>
          </div>
        <span class="error" v-if="!$v.typeOfClient.required"> Выберите группу клиентов</span>

         <div class="form-group">
             <label>Лечащий врач
                 <select class="type-of-client" v-model="doctor">
                     <option>Иванов</option>
                     <option>Захаров</option>
                     <option>Чернышева</option>
                 </select>
             </label>
         </div>

          <div class="form-group">
              <label for="SMS">Не отправлять СМС
                 <input type="checkbox" id="SMS" v-model="sms">
              </label>
          </div>

            <div class="flex-btn">
                  <button @click="backStep" type="button" class="btn">Назад</button>
                   <button type="button" class="btn"
                           :disabled="disabledBtn2"
                           @click="nextStep" >Следующий шаг
                   </button>
            </div>

     </div>

      <div class="step" v-show="step === 3">
          <div class="form-group">
              <label class="form__label">Индекс<br>
                  <input class="form__input" v-model.trim.lazy="regionIndex"
                         type="text" placeholder="xxxxxx" maxlength="6"/></label>
          </div>
          <span class="error" v-if="!$v.regionIndex.onlyNumbers">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Страна<br>
                  <input class="form__input" v-model.trim.lazy="country" type="text" maxlength="20"/></label>
          </div>
          <span class="error" v-if="!$v.country.alpha">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Область<br>
                  <input class="form__input" v-model.trim.lazy="region" type="text" maxlength="25"/></label>
          </div>
          <span class="error" v-if="!$v.region.alpha">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Город*<br>
                  <input class="form__input" maxlength="30" v-model.trim.lazy="city"
                         @blur="$v.city.$touch()" type="text"
                         :class="{ 'form-group--error': $v.typeOfClient.$error }"/></label>
          </div>
          <span class="error" v-if="!$v.city.required">{{msgRequired}}</span>
          <span class="error" v-if="!$v.city.minLength"> Не менее {{$v.city.$params.minLength.min}} букв.</span>
          <span class="error" v-else-if="!$v.city.alpha">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Улица<br>
                  <input class="form__input" v-model.trim.lazy="street"  type="text" maxlength="30"/></label>
          </div>

          <div class="form-group">
              <label class="form__label">Дом<br>
                  <input class="form__input" v-model.trim.lazy="house"  type="text" maxlength="30"/></label>
          </div>
          <span class="error" v-if="!$v.house.alpha">{{msgInvalid}}</span>

          <div class="flex-btn">
              <button @click="backStep" type="button" class="btn">Назад</button>
              <button type="button" class="btn"
                      :disabled="disabledBtn3"
                      @click="nextStep" >Следующий шаг
              </button>
          </div>
      </div>

      <div class="step" v-show="step === 4">

          <div class="form-group">
               <label>Тип документа*
                   <select  v-model.trim.lazy="document"
                            :class="{ 'form-group--error': $v.document.$error }"
                            @blur="$v.document.$touch()" >
                       <option>Паспорт</option>
                       <option>Свидетельство о рождении</option>
                       <option>Вод. удостоверение</option>
                   </select>
               </label>
          </div>
          <span class="error" v-if="!$v.document.required"> Выберите тип документа</span>

          <div class="form-group">
              <label class="form__label">Серия<br>
                  <input class="form__input" v-model.trim.lazy="docSeries"  type="text" maxlength="30"/></label>
          </div>
          <span class="error" v-if="!$v.docSeries.onlyNumbers">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Номер<br>
                  <input class="form__input" v-model.trim.lazy="docNumber"  type="text" maxlength="30"/></label>
          </div>
          <span class="error" v-if="!$v.docNumber.onlyNumbers">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Кем выдан<br>
                  <input class="form__input" v-model.trim.lazy="docGivenOut"  type="text" maxlength="30"/></label>
          </div>
          <span class="error" v-if="!$v.docGivenOut.alpha">{{msgInvalid}}</span>

          <div class="form-group">
              <label class="form__label">Дата выдачи*<br>
                  <input class="form__input"
                         v-model.trim.lazy="docDate"
                         @blur="$v.docDate.$touch()"
                         type="date" maxlength="30"/></label>
          </div>
          <span class="error" v-if="!$v.docDate.required">{{msgRequired}}</span>

          <div class="flex-btn">
              <button @click="backStep" type="button" class="btn">Назад</button>
              <button type="button" class="btn"
                      :disabled="disabledBtn4"
                      @click="nextStep" >Завершить регистрацию
              </button>
          </div>
      </div>
        <div class="step" v-show="step === 5">
            <h1>Клиент создан</h1>
            <p>{{'Фамилия: ' + surname}}</p>
            <p>{{'Имя: ' + name}}</p>
            <p>{{'Дата рождения: ' + birthdate}}</p>
            <p>{{'Телефон: ' + '+' + phoneNumber}}</p>
            <p>{{'Клиент группы: ' + typeOfClient}}</p>
            <p>{{'Город: ' + city}}</p>
            <p>{{'Документ: ' + document}}</p>
            <p>{{'Дата выдачи: ' + docDate}}</p>
        </div>
  </div>
</template>

<script>
  import { required, minLength, helpers} from 'vuelidate/lib/validators'
    const alpha = helpers.regex('alpha', /^[ЁА-Яёа-я]*$/)
    const phone = helpers.regex('phone', /^\(?([7]{1})\)?[-. ]?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    let onlyNumbers = helpers.regex('onlyNumbers', /^[0-9]*$/)

export default {
  name: 'HelloWorld',
  data() {
    return {
      step: 1,
       msgRequired: 'Поле обязательно для заполнения',
       msgInvalid: 'Недопустимые символы',
      surname: '',
      name: '',
      patronymic: '',
      birthdate: '',
      gender: '',
      phoneNumber: '',
      typeOfClient: [ ],
      doctor: '',
      sms: false,
      regionIndex: '',
      country: '',
      region: '',
      city: '',
      street: '',
      house: '',
      document: [ ],
      docSeries: '',
      docNumber: '',
      docGivenOut: '',
      docDate: ''
    }
  },
  validations: {
    surname:{
      required,
      minLength: minLength(4),
      alpha
    },
    name: {
      required,
      minLength: minLength(4),
      alpha
    },
    patronymic:{
      minLength: minLength(6),
      alpha
    },
    birthdate:{
      required
    },
    phoneNumber: {
      required,
      phone
    },
    typeOfClient: {
      required
    },
     regionIndex: {
       required,
       onlyNumbers
     },
     country: {
       alpha
     },
      region: {
       alpha
     },
     city: {
       alpha,
       required,
       minLength: minLength(3)
     },
      house: {
        alpha
      },
      document: {
        required
      },
      docDate: {
        required
      },
      docSeries: {
        onlyNumbers
      },
      docNumber: {
        onlyNumbers
      },
      docGivenOut: {
        alpha
      }
  },
computed: {
    disabledBtn1() {
        return this.$v.surname.$invalid ||
         this.$v.name.$invalid ||
         this.$v.birthdate.$invalid
    },
    disabledBtn2() {
        return this.$v.phoneNumber.$invalid ||
            this.$v.typeOfClient.$invalid
    },
    disabledBtn3() {
        return this.$v.city.$invalid
    },
    disabledBtn4() {
        return this.$v.document.$invalid ||
            this.$v.docDate.$invalid ||
            this.$v.surname.$invalid ||
            this.$v.name.$invalid ||
            this.$v.phoneNumber.$invalid ||
            this.$v.typeOfClient.$invalid ||
             this.$v.city.$invalid
    },
},
  methods: {
    nextStep() {
      this.step++
    },
    backStep() {
      this.step--
    },

  }
}
</script>


<style scoped lang="scss">
.form-group{
  margin-top: 20px;
}
.form__input{
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
  font-size: 17px;
    width: 92%;
}
.error {
  color: red;
    font-size: 14px;
}
  .type-of-client{
    display: block;
    margin-top: 10px;
    overflow: hidden;
    width: 150px;
  }
  option{
    border-bottom: 1px solid black;
  }
  option:last-child{
    border-bottom: none;
  }
.btn{
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: .5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #FDBE33 #000 #D77206;
  border-radius: 6px;
  background: linear-gradient(#F3AE0F, #E38916) #E38916;
  transition: 0.2s;
  margin-top: 30px;
}
.btn:hover { background: linear-gradient(#f5ae00, #f59500) #f5ae00; }
.btn:active { background: linear-gradient(#f59500, #f5ae00) #f59500; }
.btn:disabled {background: #f59500; border-color: #f59500}

.form-group--error{
   border-color: red;
}
.flex-btn{
    display: flex;
    justify-content: space-between;
}
    h1{
        font-size: 26px;
        text-align: center;
    }
.step p{
    font-size: 16px;
    margin-bottom: 10px;
}
@media all and (max-width: 450px) {
    .form__input{
        font-size: 15px;
    }
    .error{
        font-size: 12px;
    }
    h1{
        font-size: 20px;
    }
    .step p{
        font-size: 14px;
    }
    .btn{
        padding: 10px 10px;
        font-size: 14px;
    }
}
</style>
