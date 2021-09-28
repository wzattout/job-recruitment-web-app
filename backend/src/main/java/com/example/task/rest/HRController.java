package com.example.task.rest;

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

import com.example.task.entity.HR;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class HRController {
	
	private final HRRepository hrRepository;
	
	@Autowired
	public HRController(HRRepository hrRepository) {
		this.hrRepository = hrRepository;
	}
	
	@GetMapping("/HR")
    public List<HR> getHR() {
        return (List<HR>) hrRepository.findAll();
    }
	
	@GetMapping("/HR/{id}")
    public HR getByID(@PathVariable int id) {
        return hrRepository.getByID(id);
    }

	@GetMapping("/HR/byEmails/{email}")
    public HR getByEmail(@PathVariable String email) {
        return hrRepository.getByEmail(email);
    }
	
    @PostMapping("/HR")
    public void addHR(@RequestBody HR hr) {
    	hrRepository.save(hr);
    }
    
    @PutMapping("/HR")
    public void updateHR(@PathVariable int id, @RequestBody HR hr) {
    	hrRepository.updateHR(id, hr.getName(), hr.getEmail(), hr.getPassword(), hr.getCompanyID(), hr.getCompanyName(), hr.getCompanyAddress());
    }
    
    @DeleteMapping("/HR/{id}")
    public void deleteByID(@PathVariable int id) {
    	hrRepository.deleteById(id);
    }

}
