import { useState, useEffect } from "react";

export const useAjax = (url, metodo, datosGuardar = "") => {
    const datos = [];
    const cargando = true;

    const getData = async () => {

        cargando = true;
        setEstado(prevEstado => ({
            ...prevEstado,
            cargando: true  
        }));

        let opciones = {
            method: "GET"
        };

        if (metodo === "GET" || metodo === "DELETE") {
            opciones.method = metodo;
        }

        if (metodo === "POST" || metodo === "PUT") {
            opciones = {
                method: metodo,
                body: JSON.stringify(datosGuardar),
                headers: {
                    "Content-Type": "application/json"
                }     
            };
        }

        try {
            const peticion = await fetch(url, opciones);
            const { data } = await peticion.json();

            setEstado({
                datos: data,
                cargando: false
            });
        } catch (error) {
            console.error("Error en la petición:", error);
            setEstado({
                ...estado,
                cargando: false
            });
        }
    };

    useEffect(() => {
        getData();
        console.log(url);
    }, [url]);

    return {
        datos: estado.datos,
        cargando: estado.cargando
    };
};
