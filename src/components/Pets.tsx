import './Pets.css'

const PETS = [
  '/pets/pet-2.jpg',
  '/pets/pet-3.jpg',
  '/pets/pet-4.jpg',
  '/pets/pet-5.jpg',
  '/pets/pet-6.jpg',
  '/pets/pet-7.jpg',
  '/pets/pet-8.jpg',
  '/pets/pet-9.jpg',
  '/pets/pet-10.jpg',
  '/pets/pet-11.jpg',
  '/pets/pet-12.jpg',
  '/pets/pet-13.jpg',
  '/pets/pet-14.jpg',
  '/pets/pet-15.jpg',
]

function Pets() {
  return (
    <section id="pets" className="pets">
      <div className="pets-grid">
        {PETS.map((image) => (
          <img src={image} alt="Pet photo" className="pet-photo" key={image} />
        ))}
      </div>
    </section>
  )
}

export default Pets
