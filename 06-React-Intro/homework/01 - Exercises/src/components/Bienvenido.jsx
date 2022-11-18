import React from "react";
import Botones from "./Botones";

const studentName = "Santi Barajas";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
 
  return(
  <div>
    <h1>Primera App</h1>
    <h3>{studentName}</h3>
    <ul>
      {techSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    <Botones alert={alerts} />
  </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
