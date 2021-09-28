package com.example.task.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.task.entity.HR;

public interface HRRepository extends JpaRepository<HR, Integer> {

	@Modifying
	@Query("update HR set name = :name," + "email = :email," + "password = :password, "
			+ "companyID = :companyID," + "companyName = :companyName, "
			+ "companyAddress = :companyAddress where id = :id")
	public void updateHR(@Param(value = "id") int id, @Param(value = "name") String name,
			@Param(value = "email") String email, @Param(value = "password") String password,
			@Param(value = "companyID") int companyID, @Param(value = "companyName") String companyName,
			@Param(value = "companyAddress") String companyAddress);

	@Query("select hr from HR hr where hr.email = :email")
	public HR getByEmail(@Param(value = "email") String email);
	
	@Query("select hr from HR hr where hr.id = :id")
	public HR getByID(@Param(value = "id") int id);
}
