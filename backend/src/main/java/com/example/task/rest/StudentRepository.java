package com.example.task.rest;

import java.sql.Blob;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.task.entity.Job;
import com.example.task.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	@Modifying
	@Query("update Student set name = :name," + "email = :email," + "password = :password, "
			+ "university = :university," + "resume = :resume, "
			+ "acceptedJob = :acceptedJob where id = :id")
	public void updateStudent (@Param(value = "id") int id, @Param(value = "name") String name,
			@Param(value = "email") String email, @Param(value = "password") String password,
			@Param(value = "university") String university, @Param(value = "resume") Blob resume,
			@Param(value = "acceptedJob") Job acceptedJob);

	@Query("select s from Student s where s.email = :email")
	public Student getByEmail(@Param(value = "email") String email);
	
	@Query("select s from Student s where s.id = :id")
	public Student getById(@Param(value = "id") int id);
	
	@Query("select s from Student s inner join s.appliedJob a where a.jobID = :jobID")
	public List<Student> getByJobId(@Param(value = "jobID") int jobID);
}
