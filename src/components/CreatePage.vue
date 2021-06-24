<template>
  <div class="hello">
    <div>

      <div class="form-group" :class="{ 'form-group--error': $v.surname.$error }">
        <label class="form__label">Фамилия<span class="error" v-if="!$v.surname.required">*</span><br>
          <input class="form__input" v-model.trim="surname" @input="setSurname($event.target.value)" type="text"/></label>
      <span class="error" v-if="!$v.surname.minLength"> Не менее {{$v.surname.$params.minLength.min}} букв.</span>
        <span class="error" v-if="!$v.surname.alpha"> Недопустимые символы</span>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Имя<span class="error" v-if="!$v.name.required">*</span><br>
          <input class="form__input" v-model.trim="name" @input="setName($event.target.value)" type="text"/></label>
      <span class="error" v-if="!$v.name.minLength"> Не менее {{$v.name.$params.minLength.min}} букв.</span>
        <span class="error" v-if="!$v.name.alpha"> Недопустимые символы</span>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.patronymic.$error }">
        <label class="form__label">Отчество<br>
          <input class="form__input" v-model.trim="patronymic" @input="setPatronymic($event.target.value)" type="text"/></label>
      <span class="error" v-if="!$v.patronymic.minLength"> Не менее {{$v.patronymic.$params.minLength.min}} букв.</span>
        <span class="error" v-if="!$v.patronymic.alpha"> Недопустимые символы</span>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.birthdate.$error }">
        <label class="form__label">Дата рождения<span class="error" v-if="!$v.birthdate.required">*</span><br>
          <input class="form__input" v-model.trim="birthdate" @input="setBirthdate($event.target.value)" type="date"/></label>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.phoneNumber.$error }">
        <label class="form__label">Номер телефона<span class="error" v-if="!$v.phoneNumber.required">*</span><br>
        <input class="form__input" v-model.trim="phoneNumber" @input="setPhoneNumber($event.target.value)" type="tel"
               placeholder="7-xxx-xxx-xxxx" maxlength="14" minlength="11"/></label>
        <span class="error" v-if="!$v.phoneNumber.phone"> Неверно набран номер</span>
      </div>

      <div class="form-group">
        <label for="gender">Пол<br>
          <label><input type="radio" name="gender" id="gender">Мужской</label>
          <label><input type="radio" name="gender">Женский</label>
        </label>
      </div>

      <div class="form-group">
          <label>Группа клиентов<span class="error" v-if="!$v.typeOfClient.required">*</span>
          <select multiple="multiple" size="3" class="type-of-client" v-model.trim="typeOfClient">
            <option > VIP</option>
            <option> Проблемные</option>
            <option> ОМС</option>
          </select>
          </label>
      </div>

      <div class="form-group">
        <label>Лечащий врач
          <select class="type-of-client">
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </label>
      </div>

    </div>
  </div>
</template>

<script>
  import { required, minLength, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[ЁА-Яёа-я]*$/)
  const phone = helpers.regex('phone', /^\(?([7]{1})\)?[-. ]?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)

export default {
  name: 'HelloWorld',
  data() {
    return {
      surname: '',
      name: '',
      patronymic: '',
      birthdate: '',
      phoneNumber: '',
      typeOfClient: '',
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
      required,
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
    }
  },

  methods: {
    setSurname(value) {
      this.surname = value
      this.$v.surname.$touch()
    },
    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
    setPatronymic(value) {
      this.patronymic = value
      this.$v.patronymic.$touch()
    },
    setBirthdate(value) {
      this.birthdate = value
      this.$v.birthdate.$touch()
    },
    setPhoneNumber(value) {
      this.phoneNumber = value
      this.$v.phoneNumber.$touch()
    },

  }
}
</script>


<style scoped lang="scss">
.form-group{
  margin-bottom: 20px;
}
input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}
.error {
  color: red;
}

.valid {
  border-color: #5A5;
  background: #EFE;
}
.valid:focus {
  outline-color: #8E8;
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
</style>
