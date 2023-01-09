import React from 'react'
import Botones from '../Botones/Botones.jsx'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import redux from '../../assets/redux.png'
import s from './Bienvenido.module.css'

const studentName = 'Sachibara'
const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]
const alerts = { m1: 'Aprobado', m2: 'En curso' }

export default function Bienvenido () {
  return (
    <div className={s.divBienvenido}>
      <h1 className={s.title}>soy Henry!</h1>
      <h3 className={s.subtitle}>{studentName}</h3>
      <ul className={s.unorderedList}>
        {techSkills.map(skill => (
          <li className={s.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { studentName, techSkills, alerts }
