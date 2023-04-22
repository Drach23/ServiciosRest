package com.example.pasteleria.controllers;

import com.example.pasteleria.models.UsuarioModel;
import com.example.pasteleria.services.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/compra")
public class UsuarioController {

    @Autowired
    UsuarioServices usuarioServices;

    @GetMapping()
    public ArrayList<UsuarioModel> obtenerUsuarios() {
        return usuarioServices.obtenerUsuarios();
    }

    @PostMapping()
    public UsuarioModel saveDate(@RequestBody UsuarioModel usuario) {
        return usuarioServices.saveUsuario(usuario);
    }

    @GetMapping(path = "/{id}")
    public Optional<UsuarioModel> findDateById(@PathVariable("id") Long id) {
        return usuarioServices.findUsuarioById(id);
    }

    @DeleteMapping(path = "/{id}")
    public boolean deleteUsuario(@PathVariable("id") Long id) {
        return usuarioServices.eliminarUsuario(id);
    }

    @GetMapping(path = "/correo")
    public UsuarioModel findByEmail(@RequestParam("correo") String correo) {
        return usuarioServices.findByEmail(correo);
    }

    @GetMapping(path = "/nombreUsuario")
    public UsuarioModel findByNombre(@RequestParam("nombreUsuario") String nombreUsuario) {
        return usuarioServices.findByNombre(nombreUsuario);
    }

    @PutMapping(path = "/{id}")
    public boolean editUsuarioById(@RequestBody UsuarioModel usuarioEditado, @PathVariable("id") Long id) {
        return usuarioServices.editUsuarioById(usuarioEditado, id);
    }
}
