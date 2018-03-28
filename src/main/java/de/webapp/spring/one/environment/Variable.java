package de.webapp.spring.one.environment;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Variable {

  @Id
  public String name;

  @Column(length=4095)
  public String value;

  public Variable(){}

  Variable(String name, String value){
    this.name = name;
    this.value = value;
  }

  public String getName() {
    return name;
  }

  public void setName(String name, String value) {
    this.name = name;
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}
