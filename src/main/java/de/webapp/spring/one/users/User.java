package de.webapp.spring.one.users;


public class User {
    private String id;
    private String fullName;
    private String email;

    public User(String id, String fullName, String email) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
    }
}
