const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мелитта",
            "id_2": "Айлин",
            "id_3": "Катарина",
            "id_4": "Лорелея",
            "id_5": "Вейлет",
            "id_6": "Виколия",
            "id_7": "Лирейн",
            "id_8": "Антонетта",
            "id_9": "Марика",
            "id_10": "Беллатрикс"
        }
    }`,


    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Сергеев",
            "id_2": "Аввакумов",
            "id_3": "Агапиев",
            "id_4": "Адрианов",
            "id_5": "Бонифатов",
            "id_6": "Глебов",
            "id_7": "Евстахиев",
            "id_8": "Зиновиев",
            "id_9": "Константинов",
            "id_10": "Логвинов"
        }
    }`,


    maleProfessionJson: `{
        "count": 5,
        "list": {     
            "id_1": "Крановщик",
            "id_2": "Водитель",
            "id_3": "Моряк",
            "id_4": "Электрик",
            "id_5": "Строитель"
        }
    }`,


    femaleProfessionJson: `{
        "count": 5,
        "list": {     
            "id_1": "Парикмахер",
            "id_2": "Стилист",
            "id_3": "Бухгалтер",
            "id_4": "Учитель",
            "id_5": "Химик"
        }
    }`,


    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender() {
        return this.gender=!this.randomIntNumber()?'Мужчина':'Женщина';
    },

    randomName: function(gender) {
        if (gender =='Мужчина') {
            let maleName=[this.randomValue(this.firstNameMaleJson),this.randomValue(this.surnameJson),this.randomValue(this.patronymicJson)+'ич',this.randomValue(this.maleProfessionJson)];
            return maleName;
        }
        else{
            let femaleName=[this.randomValue(this.firstNameFemaleJson),this.randomValue(this.surnameJson)+'а',this.randomValue(this.patronymicJson)+'на',this.randomValue(this.femaleProfessionJson)];
            return femaleName;
        }

    },
    
    randomBirthDate(){
        let year=this.randomIntNumber(2020,1900);
        let month=this.randomValue(this.monthJson);
        let day;
        if(month=='Апреля'||'Июня'||'Сентября'||'Ноября'){
            day=this.randomIntNumber(30,1);
        }else 
        if(month=='Февраля'){
            day=this.randomIntNumber(29,1)  
        }else{
          day=this.randomIntNumber(30,1);
      }
      return day+' '+month+' '+year;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.name = this.randomName(this.person.gender);
        this.person.birthDate=this.randomBirthDate();
        return this.person;
    }
};
   
