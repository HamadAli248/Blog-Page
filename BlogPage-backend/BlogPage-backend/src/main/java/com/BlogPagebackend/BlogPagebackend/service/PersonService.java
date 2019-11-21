package com.BlogPagebackend.BlogPagebackend.service;

import com.BlogPagebackend.BlogPagebackend.dao.PersonDao;
import com.BlogPagebackend.BlogPagebackend.model.Person;

public class PersonService {

    public final PersonDao personDao;

    public PersonService(PersonDao personDao) {
        this.personDao = personDao;
    }

    public int addPerson (Person person){
        return personDao.insertPerson(person);
    }
}
