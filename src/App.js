import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros Alumnos de UES</h1>
        <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='shawn'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de vida, pero freeCodeCamp me dio la confianza que necesitaba para hacerlo. Ahora soy un ingeniero de software en Amazon. Estoy muy agradecido con freeCodeCamp por ser una organizacion sin fines de lucro.'
        />
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar JavaScrip, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades'
        />
        <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sarah'
        cargo='Ingeniera de Software'
        empresa='Chatdesk'
        testimonio='freeComCamp me dio la confianza que necesitaba para conseguir mi primer trabajo como ingeniera de software. Estoy muy agradecida con freeCodeCamp por ser una organizacion sin fines de lucro.'
        />
      </div>
    </div>
  );
}

export default App;
