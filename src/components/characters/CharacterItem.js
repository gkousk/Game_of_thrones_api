import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.imageUrl} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.fullName}</h1>
          <ul>
            <li>
              <strong>Nickname:</strong> {item.title}
            </li>
            <li>
              <strong>Family:</strong> {item.family}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem