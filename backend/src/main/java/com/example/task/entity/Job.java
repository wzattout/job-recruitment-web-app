package com.example.task.entity;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@NamedQueries({ @NamedQuery(name = "JOB_GET_JOB",
query = "Select j from Job j Where :P_JOBID = -1 OR j.jobID = :P_JOBID "
		+ "and :P_ROLE = '-1' OR j.role = :P_ROLE "
		+ "and :P_CRITERIA = '-1' OR j.criteria = :P_CRITERIA "
		+ "and :P_HRID = -1 OR j.hr = :P_HRID")})

@Entity
@Table(name = "JOB")
public class Job {

	@Id @GeneratedValue
	@Basic(optional = false)
	@Column(name = "JOB_ID", columnDefinition="NUMBER(15)")
	private int jobID;
	
	@Column(name = "ROLE", columnDefinition="VARCHAR(20)")
	@Basic(optional = false)
	private String role;
	
	@Column(name = "CRITERIA", columnDefinition="VARCHAR(40)")
	private String criteria;
	
	@ManyToOne
	@Basic(optional = false)
	private HR hr;
	
	@OneToMany
	@JoinTable(name = "STUDENT_ACCEPTED_JOB", joinColumns = @JoinColumn(name = "JOB_ID"), inverseJoinColumns = @JoinColumn(name = "ID"))
	@JsonIgnore
	private Collection<Student> studentAcceptedJob = new ArrayList<Student>();

	@ManyToMany
	@JoinTable(name = "STUDENT_APPLIED_JOB", joinColumns = @JoinColumn(name = "APPLIED_JOB_JOB_ID"), inverseJoinColumns = @JoinColumn(name = "STUDENT_ID"))
	@JsonIgnore
	private Collection<Student> studentAppliedJob = new ArrayList<Student>();
	
	public Job(String Role, String Criteria, HR hr) {
		this.role = Role;
		this.criteria = Criteria;
		this.hr = hr;
	}
	
	public Job() {
		
	}
	
	public int getJobID() {
		return jobID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getCriteria() {
		return criteria;
	}

	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}

	public HR getHr() {
		return hr;
	}

	public void setHr(HR hr) {
		this.hr = hr;
	}

	public Collection<Student> getStudentAcceptedJob() {
		return studentAcceptedJob;
	}

	public void setStudentAcceptedJob(Collection<Student> studentAcceptedJob) {
		this.studentAcceptedJob = studentAcceptedJob;
	}

	public Collection<Student> getStudentAppliedJob() {
		return studentAppliedJob;
	}

	public void setStudentAppliedJob(Collection<Student> studentAppliedJob) {
		this.studentAppliedJob = studentAppliedJob;
	}

	@Override
	public String toString() {
		return "Job [jobID=" + jobID + ", Role=" + role + ", Criteria=" + criteria + ", hr=" + hr.getName() + "]";
	}
}
