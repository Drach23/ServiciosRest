package com.example.cyberland.repositories;
import com.example.cyberland.models.DateModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DateRepository extends CrudRepository<DateModel, Long> {
    public abstract DateModel findByEmail(String email);
    public abstract DateModel findByName(String name);
}
