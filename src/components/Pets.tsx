import { Fragment } from 'react'
import Terminal from './Terminal'
import './Pets.css'

// The terminal takes the top-right cell (4th on the first row of the 4-column
// grid), which is why pet4 is out of order, after pet24.
const TERMINAL_INDEX = 3

const PETS = [
  '/pets/pet1.jpg',
  '/pets/pet2.jpg',
  '/pets/pet3.jpg',
  '/pets/pet5.jpg',
  '/pets/pet6.jpg',
  '/pets/pet7.jpg',
  '/pets/pet8.jpg',
  '/pets/pet9.jpg',
  '/pets/pet10.jpg',
  '/pets/pet11.jpg',
  '/pets/pet12.jpg',
  '/pets/pet13.jpg',
  '/pets/pet14.jpg',
  '/pets/pet15.jpg',
  '/pets/pet16.jpg',
  '/pets/pet17.jpg',
  '/pets/pet18.jpg',
  '/pets/pet19.jpg',
  '/pets/pet20.jpg',
  '/pets/pet21.jpg',
  '/pets/pet22.jpg',
  '/pets/pet23.jpg',
  '/pets/pet24.jpg',
  '/pets/pet4.jpg',
  '/pets/pet25.jpg',
  '/pets/pet26.jpg',
  '/pets/pet27.jpg',
]

function Pets() {
  return (
    <section id="pets" className="pets">
      <div className="pets-grid">
        {PETS.map((image, index) => (
          <Fragment key={image}>
            {index === TERMINAL_INDEX && <Terminal />}
            <img src={image} alt="Pet photo" className="pet-photo" loading="lazy" />
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default Pets
