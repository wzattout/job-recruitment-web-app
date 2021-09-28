package com.example.task.entity;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinTable;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.JoinColumn;

@NamedQueries({ @NamedQuery(name = "HR_GET_HR",
query = "Select hr from HR hr Where :P_ID = -1 OR hr.id = :P_ID "
		+ "and :P_NAME = '-1' OR hr.name = :P_NAME "
		+ "and :P_EMAIL = '-1' OR hr.email = :P_EMAIL "
		+ "and :P_COMPANYID = -1 OR hr.companyID = :P_COMPANYID "
		+ "and :P_COMPANYNAME = '-1' OR hr.companyName = :P_COMPANYNAME "
		+ "and :P_COMPANYADDRESS = '-1' OR hr.companyAddress = :P_COMPANYADDRESS " )})

@Entity
@Table(name = "HR")
public class HR extends Person{

	@Basic(optional = false)
	@Column(name = "COMPANY_ID", columnDefinition="NUMBER(15)")
	private int companyID;
	
	@Basic(optional = false)
	@Column(name = "COMPANY_NAME", columnDefinition="VARCHAR(20)")
	private String companyName;
	
	@Basic(optional = false)
	@Column(name = "COMPANY_ADDRESS", columnDefinition="VARCHAR(40)")
	private String companyAddress;
	
	@OneToMany
	@JoinTable(name = "COMPANY_JOB", joinColumns = @JoinColumn(name = "HR_ID"), inverseJoinColumns = @JoinColumn(name = "JOB_ID"))
	@JsonIgnore
	private Collection<Job> job = new ArrayList<Job>();
	
	public HR() {
		super();
	}
	
	public HR(String name, String Email, int companyID, String companyName, String companyAddress) {
		this.setName(name);
		this.setEmail(Email);
		this.companyID = companyID;
		this.companyName = companyName;
		this.companyAddress = companyAddress;
	}

	public int getCompanyID() {
		return companyID;
	}
	
	public void setCompanyID(int companyID) {
		this.companyID = companyID;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyAddress() {
		return companyAddress;
	}

	public void setCompanyAdress(String companyAdress) {
		this.companyAddress = companyAdress;
	}

	public Collection<Job> getJob() {
		return job;
	}

	public void setJob(Collection<Job> job) {
		this.job = job;
	}

	@Override
	public String toString() {
		return "HR [companyID=" + companyID + ", companyName=" + companyName + ", companyAddress=" + companyAddress
				 + "]";
	}
	
	
}
