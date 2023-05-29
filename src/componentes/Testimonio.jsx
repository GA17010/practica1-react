import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props) {
    const palabrasEnNegrita = ['JavaScript', 'freeCodeCamp', 'organizacion sin fines de lucro'];
    let testimonioConNegrita = props.testimonio;

    palabrasEnNegrita.forEach(palabra => {
        const expresionRegular = new RegExp(palabra, 'gi');
        testimonioConNegrita = testimonioConNegrita.replace(
        expresionRegular,
        '<strong>$&</strong>'
        );
    });
    return (
        <div className='contenedor-testimonio'>
            <img className='img-testimonio'
            src={require(`../imagenes/testimonio-${props.imagen}.png`)}
            alt='foto de Emma'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>
                    {props.cargo} en 
                    <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: testimonioConNegrita }}></p>
            </div>
        </div>
    );
}
// exportar componente default
// export default Testimonio;