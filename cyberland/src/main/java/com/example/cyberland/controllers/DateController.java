package com.example.cyberland.controllers;

import com.example.cyberland.models.DateModel;
import com.example.cyberland.services.DateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/date")
public class DateController {
    @Autowired
    DateService dateService;

    @GetMapping()
    public ArrayList<DateModel> getDates(){

        return dateService.getDates();
    }
    @PostMapping()
    public DateModel saveDate(@RequestBody DateModel date){
        return dateService.saveDate(date);
    }


    @GetMapping (path = "/{id}")
    public Optional<DateModel> findDateById(@PathVariable("id") Long id){
        return this.dateService.findDateById(id);
    }
    @DeleteMapping (path = "/{id}")
    public boolean deleteDate(@PathVariable("id") Long id){
        return this.dateService.deleteDate(id);
    }
    @GetMapping(path = "/email")
    public DateModel findByEmail(@RequestParam("email") String email){
        return dateService.findByEmail(email);
    }
    @GetMapping(path = "/name")
    public DateModel findByName(@RequestParam("name")String name){
        return dateService.findByName(name);
    }

    @PutMapping(path = "/{id}")
    public boolean editDateById(@RequestBody DateModel date, @PathVariable("id") Long id){
        return this.dateService.editDateById(date, id);
    }
}

