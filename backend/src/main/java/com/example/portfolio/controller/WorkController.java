package com.example.portfolio.controller;

import com.example.portfolio.work.Work;
import com.example.portfolio.work.WorkRepository;
import com.example.portfolio.work.WorkResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.portfolio.work.WorkRequestDTO;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("work")
public class WorkController {

    @Autowired
    private WorkRepository workRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void workSave(@RequestBody WorkRequestDTO data) {
        Work workData = new Work(data);
        workRepository.save(workData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<WorkResponseDTO> getAll() {
        return workRepository.findAll().stream()
                .map(WorkResponseDTO::new)
                .collect(Collectors.toList());
    }
}
