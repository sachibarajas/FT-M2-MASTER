import React from 'react'

export default function Species (props) {
  const species =  props.species;
  return (
    <div>
      <h2>Species</h2>
      {species.map(specie =>(
        <button key={specie} 
          onClick={props.handleSpecies} 
          value={specie}>{specie}
        </button>
      ))}
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}
