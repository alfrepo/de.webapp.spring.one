package de.webapp.spring.one.users;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class UserExtended {
    @Id
    private String id;
    private String name;
    private String email;
    private String nickname;

    public UserExtended() {
    }

    public UserExtended(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.nickname = nickname;
    }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setNickname(String nickname) {
    this.nickname = nickname;
  }

  public String getNickname() {
    return nickname;
  }
}
