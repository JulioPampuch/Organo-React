import "./team.css"

const Team = (props) => {

  return (
    <section className="team" style={{ backgroundColor: props.secundaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  )
}

export default Team