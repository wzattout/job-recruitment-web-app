package com.example.task.entity;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@NamedQueries({ @NamedQuery(name = "STUDENT_GET_STUDENT",
query = "Select s from Student s Where :P_ID = -1 OR s.id = :P_ID "
		+ "and :P_NAME = '-1' OR s.name = :P_NAME "
		+ "and :P_EMAIL = '-1' OR s.email = :P_EMAIL "
		+ "and :P_UNIVERSITY = '-1' OR s.university = :P_UNIVERSITY" )})
@Entity
@Table(name = "STUDENT")
public class Student extends Person {
	public Student() {
		super();
	}

	@Column(name = "UNIVERSITY", columnDefinition = "VARCHAR(20)")
	@Basic(optional = false)
	private String university;

	@Lob
	@Column(name = "RESUME", columnDefinition = "BLOB")
	@Basic(optional = true)
	private Blob resume;

	@ManyToOne
	private Job acceptedJob;

	@ManyToMany
	@JsonIgnore
	private Collection<Job> appliedJob = new ArrayList<Job>();

	public Student(String name, String Email, String university, Blob resume) {
		this.setName(name);
		this.setEmail(Email);
		this.setUniversity(university);
		this.setResume(resume);
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public Blob getResume() {
		return resume;
	}

	public void setResume(Blob resume) {
		this.resume = resume;
	}

	public Job getAcceptedJob() {
		return acceptedJob;
	}

	public void setAcceptedJob(Job acceptedJob) {
		this.acceptedJob = acceptedJob;
	}

	public Collection<Job> getAppliedJob() {
		return appliedJob;
	}

	public void setAppliedJob(Collection<Job> appliedJob) {
		this.appliedJob = appliedJob;
	}

	@Override
	public String toString() {
		return "Student [university=" + university  + ", acceptedJob=" + acceptedJob.getRole() + "]";
	}
	
	
}
