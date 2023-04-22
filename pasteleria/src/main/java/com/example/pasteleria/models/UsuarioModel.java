package com.example.pasteleria.models;
import jakarta.persistence.*;

@Entity
@Table(name = "encargos")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)

    private long id;
    String nombre;
    Long telefono;
    String email;

    String tipoPastel;
    String costoPastel;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getTelefono() {
        return telefono;
    }

    public void setTelefono(Long telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTipoPastel() {
        return tipoPastel;
    }

    public void setTipoPastel(String tipoPastel) {
        this.tipoPastel = tipoPastel;
    }

    public String getCostoPastel() {
        return costoPastel;
    }

    public void setCostoPastel(String costoPastel) {
        this.costoPastel = costoPastel;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
