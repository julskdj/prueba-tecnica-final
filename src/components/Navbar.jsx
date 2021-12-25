import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setTareas, tareasBusqueda }) => {

    const handleChange = (e) => {
        filtrar(e.target.value);
    }

    const filtrar = (termino) => {
        var resultado = tareasBusqueda.filter((elemento) => {
          if (
            elemento.titulo
              .toString()
              .toLowerCase()
              .includes(termino.toLowerCase()) ||
            elemento.descripcion
              .toString()
              .toLowerCase()
              .includes(termino.toLowerCase())
          ) {
            return elemento;
          }
        });
        setTareas(resultado);
      };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                height="15"
                alt=""
                loading="lazy"
              />
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/busqueda">
                  Busqueda
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
              placeholder="Busqueda por Nombre o Empresa"
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
