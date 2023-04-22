package com.example.pasteleria.services;
import com.example.pasteleria.repositories.UsuarioRepository;
import com.example.pasteleria.models.UsuarioModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UsuarioServices {
    @Autowired
    UsuarioRepository usuarioRepository;

    public ArrayList<UsuarioModel> obtenerUsuarios(){
        return (ArrayList<UsuarioModel>)  usuarioRepository.findAll();
    }


    public UsuarioModel saveUsuario( UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }


    public Optional<UsuarioModel> findUsuarioById(Long id){
        return usuarioRepository.findById(id);
    }

    public boolean eliminarUsuario(Long id){
        try{
            usuarioRepository.deleteById(id);
            return true;
        }catch(Exception e){
            return false;
        }
    }
    public  UsuarioModel findByEmail(String email){return usuarioRepository.findByEmail(email);}
    public  UsuarioModel findByNombre(String nombre){return usuarioRepository.findByNombre(nombre);}

    public  boolean editUsuarioById(UsuarioModel UsuarioEditado, Long id) {
        Optional<UsuarioModel> usuarioExiste = usuarioRepository.findById(id);
        if (usuarioExiste.isEmpty()) {
            return false;
        } else {
            UsuarioModel usuarioActualizado = usuarioExiste.get();// Se pasa todos los valores de la date
            usuarioActualizado.setNombre(UsuarioEditado.getNombre());
            usuarioActualizado.setTelefono(UsuarioEditado.getTelefono());
            usuarioActualizado.setEmail(UsuarioEditado.getEmail());
            usuarioActualizado.setTipoPastel(UsuarioEditado.getTipoPastel());
            usuarioActualizado.setCostoPastel(UsuarioEditado.getCostoPastel());
            usuarioRepository.save(usuarioActualizado);
            return true;
        }
    }
}
