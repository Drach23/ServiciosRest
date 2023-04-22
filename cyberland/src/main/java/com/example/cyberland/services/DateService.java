package com.example.cyberland.services;

import com.example.cyberland.models.DateModel;
import com.example.cyberland.repositories.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class DateService {
    @Autowired
    DateRepository dateRepository;

    public ArrayList<DateModel> getDates(){

        return (ArrayList<DateModel>)  dateRepository.findAll();
    }
    public DateModel saveDate(DateModel date){

        return dateRepository.save(date);
    }
    public Optional<DateModel> findDateById(Long id){
        return dateRepository.findById(id);
    }

    public boolean deleteDate(Long id){
        try{
            dateRepository.deleteById(id);
            return true;
        }catch(Exception e){
            return false;
        }
    }
    public  DateModel findByEmail(String email){return dateRepository.findByEmail(email);}
    public  DateModel findByName(String name){return dateRepository.findByName(name);}

    public  boolean editDateById(DateModel dateEdit, Long id) {
        Optional<DateModel> dateExist = dateRepository.findById(id);
        if (dateExist.isEmpty()) {
            return false;
        } else {
            DateModel dateUpdate = dateExist.get();// Se pasa todos los valores de la date
            dateUpdate.setName(dateEdit.getName());
            dateUpdate.setPhone(dateEdit.getPhone());
            dateUpdate.setEmail(dateEdit.getEmail());
            dateUpdate.setService(dateEdit.getService());
            dateUpdate.setDate(dateEdit.getDate());
            dateUpdate.setSchedule(dateEdit.getSchedule());
            dateRepository.save(dateUpdate);
            return true;
        }
    }
}
