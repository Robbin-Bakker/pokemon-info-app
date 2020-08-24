import React from 'react';
import './Pokemon.css';

interface Props {
  pokemonInfo: {
    name: string
    image: string
    moves: Array<{
      move: {
        name: string
      }
    }>
    types: Array<{
      type: {
        name: string
      }
    }>
  }
}

const Pokemon: React.FC<Props> = (props) => {
  const { name, image, moves, types } = props.pokemonInfo;

  return <div className="pokemon-container">
    <div className="pokemon-main">
      <div className="pokemon-name">Name: {name}</div>
      <img className="pokemon-image" src={image} alt={name+'_image'}/>
      <div className="pokemon-types"><h4>Types:</h4>
        <ul className="pokemon-typelist">
          {types.map(item =>
            <li className="pokemon-typelist-item" key={item.type.name}>{item.type.name}</li>
          )}
        </ul>
      </div>
    </div>
    <div className="pokemon-moves"><h4>Moves:</h4>
      <ul className="pokemon-movelist">
        {moves.map(item =>
          <li className="pokemon-movelist-item" key={item.move.name}>{item.move.name}</li>
        )}
      </ul>
    </div>
    
  </div>
}
export default Pokemon;