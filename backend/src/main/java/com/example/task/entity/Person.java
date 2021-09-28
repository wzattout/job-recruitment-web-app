package com.example.task.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
abstract class Person {
	
	@Id @GeneratedValue
	@Basic(optional = false)
	@Column(name = "ID", columnDefinition="NUMBER(14)")
	private int id;
	
	@Basic(optional = false)
	@Column(name = "NAME", columnDefinition="VARCHAR(20)")
	private String name;
	
	@Basic(optional = false)
	@Column(name = "EMAIL", columnDefinition="VARCHAR(30)", unique = true)
	private String email;
	
	@Basic(optional = false)
	@Column(name = "PASSWORD", columnDefinition="VARCHAR(50)")
	private String password;

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "Person [ID=" + id + ", name=" + name + ", Email=" + email + "]";
	}
}
