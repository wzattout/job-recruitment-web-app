package com.example.task.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.task.entity.Job;
import com.example.task.entity.Student;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StudentController {
	
	private final StudentRepository studentRepository;
	private final JobRepository jobRepository;
	
	@Autowired
	public StudentController(StudentRepository studentRepository, JobRepository jobRepository) {
		this.studentRepository = studentRepository;
		this.jobRepository = jobRepository;
	}
	
	@GetMapping("/students")
    public List<Student> getStudents() {
        return (List<Student>) studentRepository.findAll();
    }
	
	@GetMapping("/students/{id}")
    public Student getByID(@PathVariable int id) {
        return studentRepository.getById(id);
    }

	@GetMapping("/students/byEmails/{email}")
    public Student getByEmail(@PathVariable String email) {
        return studentRepository.getByEmail(email);
    }
	
	@GetMapping("/students/byJobId/{jobId}")
    public List<Student> getByJobId(@PathVariable int jobId) {
        return studentRepository.getByJobId(jobId);
    }

    @PostMapping("/students")
    public void addStudent(@RequestBody Student student) {
    	studentRepository.save(student);
    }
    
    @GetMapping("/students/acceptStudent/{id}/{jobId}")
    public void acceptStudent(@PathVariable int id, @PathVariable int jobId) {
    	List<Job> newJobs = new ArrayList<Job>();
    	List<Student> newStudents = new ArrayList<Student>();
    	this.getByID(id).setAcceptedJob(jobRepository.getByJobId(jobId));
    	this.getByID(id).setAppliedJob(newJobs);
    	jobRepository.getByJobId(jobId).getStudentAcceptedJob().add((this.getByID(id)));
    	jobRepository.getByJobId(jobId).setStudentAppliedJob(newStudents);
    }
    
    @GetMapping("/students/rejectStudent/{id}/{jobId}")
    public void rejectStudent(@PathVariable int id, @PathVariable int jobId) {
    	this.getByID(id).getAppliedJob().remove(jobRepository.getByJobId(jobId));
    	jobRepository.getByJobId(jobId).getStudentAppliedJob().remove(this.getByID(id));
    }
    
    @GetMapping("/students/applyJob/{id}/{jobId}")
    public void applyJob(@PathVariable int id, @PathVariable int jobId) {
    	this.getByID(id).getAppliedJob().add(jobRepository.getByJobId(jobId));
    	jobRepository.getByJobId(jobId).getStudentAppliedJob().add(this.getByID(id));
    }
    
    @PutMapping("/students/{id}")
    public void updateStudent(@PathVariable int id, @RequestBody Student student) {
    	studentRepository.updateStudent(id, student.getName(), student.getEmail(), student.getPassword(), student.getUniversity(), student.getResume(), student.getAcceptedJob());
    }
    
    @DeleteMapping("/students/{id}")
    public void deleteByID(@PathVariable int id) {
    	studentRepository.deleteById(id);
    }
}
