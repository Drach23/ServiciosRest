package com.example.pasteleria.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.pasteleria.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel,Long>{

        public abstract UsuarioModel findByEmail(String email);
        public abstract UsuarioModel findByNombre(String nombre);
}
