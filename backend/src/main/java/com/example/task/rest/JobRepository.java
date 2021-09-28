package com.example.task.rest;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.task.entity.Job;

public interface JobRepository extends CrudRepository<Job, Integer> {
	
	@Query("select job from Job job where job.jobID = :jobID")
	public Job getByJobId(@Param(value = "jobID") int jobID);
	
	@Query("select job from Job job where job.hr.id = :HrId")
	public List<Job> getByHrId(@Param(value = "HrId") int HrId);
	
	@Query("select j from Job j inner join j.studentAppliedJob saj where saj.id = :studentId")
	public List<Job> getAppliedByStudentId(@Param(value = "studentId") int studentId);

}
