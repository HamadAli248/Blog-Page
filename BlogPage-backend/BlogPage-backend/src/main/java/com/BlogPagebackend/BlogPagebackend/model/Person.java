package com.BlogPagebackend.BlogPagebackend.model;

import sun.security.util.Password;

import javax.validation.constraints.Email;
import java.util.Date;
import java.util.UUID;

public class Person {

    private final UUID id;
    private final String firstName;
    private final String lastName;
    private final Date dateOfBirth;
    private final Email email;
    private final Number phone;
    private final Password password;
    private final String username;

    public Person(UUID id, String firstName, String lastName, Date dateOfBirth, Email email, Number phone, Password password, String username) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.username = username;
    }


    public String getUsername(){
        return username;
    }
    public Password getPassword(){
        return password;
    }

    public Number getPhone() {
        return phone;
    }

    public Email getEmail() {
        return email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public UUID getPersonId() {
        return id;
    }
}
