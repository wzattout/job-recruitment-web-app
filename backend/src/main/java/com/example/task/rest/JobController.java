package com.example.task.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.task.entity.Job;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class JobController {
	
	private final JobRepository jobRepository;
	
	@Autowired
	public JobController(JobRepository jobRepository) {
		this.jobRepository = jobRepository;
	}
	
	@GetMapping("/jobs")
    public List<Job> getJobs() {
        return (List<Job>) jobRepository.findAll();
    }
	
	@GetMapping("/jobs/{jobID}")
    public Job getJobById(@PathVariable int jobID) {
        return jobRepository.getByJobId(jobID);
    }
	
	@GetMapping("/jobs/byHrId/{HrId}")
    public List<Job> getJobsByHrId(@PathVariable int HrId) {
        return jobRepository.getByHrId(HrId);
    }
	
	@GetMapping("/jobs/byStudentId/{studentId}")
    public List<Job> getByStudentId(@PathVariable int studentId) {
        return jobRepository.getAppliedByStudentId(studentId);
    }

    @PostMapping("/jobs")
    void addJob(@RequestBody Job job) {
    	jobRepository.save(job);
    }
    
    @DeleteMapping("/jobs/{jobID}")
    public void deleteByJobID(@PathVariable int jobID) {
    	jobRepository.deleteById(jobID);
    }
}
