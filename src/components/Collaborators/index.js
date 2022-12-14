import "./collaborators.css"

const Collaborator = (props) => {
  return (
    <div className="collaborator">
        <div className="header" style={{backgroundColor: props.color}}>
          <div className="img" style={{backgroundImage: `url(${props.img})`}}>  
          </div>
          {/* <img src="https://github.com/JulioPampuch.png" alt="Julio Pampuch" /> */}
      </div>
      <div className="collaborator-footer">
        <h4>{props.name}</h4>
        <h5>{props.job}</h5>
      </div>
    </div>
  )
}

export default Collaborator