import "./App.css";
import AlertBox from "./AlertBox";

function App() {
  return (
    <>
      <div>
        <h1>Toast Prueba</h1>

        {/* Mensaje con color verde */}
        <AlertBox text="Correo ingresado correctamente." color="green" icon="check" />

        {/* Mensaje con color naranja */}
        <AlertBox text="mensaje de advertencia." color="orange" icon="exclamation" />

        {/* Mensaje con color rojo */}
        <AlertBox text="Correo ingresado incorrectamente." color="red" icon="cross" />
      </div>
    </>
  );
}

export default App;
