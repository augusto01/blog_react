import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { Inicio } from "../components/pages/inicio";
import { Articulo } from "../components/pages/Articulo";
import { Articulos } from "../components/pages/articulos";

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/**LAYOUT */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/articulo/:id" element={<Articulo />} /> {/* Ruta para Articulo */}
        </Routes>
      </section>
    </BrowserRouter>
  );
}
