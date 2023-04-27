import React from 'react';
import VacancyItem from '../vacancyItem/vacancyItem';

function VacancyItems() {
  return (
    <div className="vacancy__items">
      <VacancyItem vacancyName={'Ведущий графический дизайнер НЕ УДАЛЕННО'} vacancySalary={'з/п от 80000 rub'} vacancyTime={'Полный рабочий день'} vacancyLocation={'Москва'}/>
      <VacancyItem vacancyName={'Ведущий графический дизайнер НЕ УДАЛЕННО'} vacancySalary={'з/п от 80000 rub'} vacancyTime={'Полный рабочий день'} vacancyLocation={'Москва'}/>
      <VacancyItem vacancyName={'Ведущий графический дизайнер НЕ УДАЛЕННО'} vacancySalary={'з/п от 80000 rub'} vacancyTime={'Полный рабочий день'} vacancyLocation={'Москва'}/>
      <VacancyItem vacancyName={'Ведущий графический дизайнер НЕ УДАЛЕННО'} vacancySalary={'з/п от 80000 rub'} vacancyTime={'Полный рабочий день'} vacancyLocation={'Москва'}/>
    </div>
   );
}

export default VacancyItems;