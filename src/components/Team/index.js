import Collaborator from "../Collaborators"
import "./team.css"

const Team = (props) => {

  return (
    (props.collaborators.length)> 0 &&
    <section className="team" style={{ backgroundColor: props.secundaryColor }}>
      <h3>{props.name}</h3>
      <div className="border" style={{ borderColor: props.primaryColor }}></div>
      {props.collaborators.map((collaborator, index) => {
        return (
          <Collaborator key={index} name={collaborator.nome} job={collaborator.time} img={collaborator.imagem} color={props.primaryColor} />
        )
      })}
    </section>
  )
}

export default Team