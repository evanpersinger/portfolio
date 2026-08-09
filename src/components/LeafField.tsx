import './LeafField.css'

// Each leaf's position, speed and delay live in LeafField.css via :nth-child.
const LEAVES = [1, 2, 3]

// Spans rather than divs: this renders inside <a> and <button>, which only
// accept phrasing content.
function LeafField() {
  return (
    <span className="leaf-field" aria-hidden="true">
      {LEAVES.map((leaf) => (
        <span className="leaf" key={leaf} />
      ))}
    </span>
  )
}

export default LeafField
