const Card = props => {
  return (
    <>
      <div className="card-container" id="linkedin">
        <div className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          dignissimos inventore dicta eveniet earum sint ea. Totam voluptatem ad
          consequatur dignissimos odit sint deserunt cum magni minus? Soluta,
          nesciunt praesentium! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. At earum hic ipsum tempora accusantium suscipit
          saepe iusto debitis necessitatibus molestias dolorum et quos nam non,
          similique vel soluta aut mollitia.
        </div>

        <div className="card">
          <div className="card-wrapper">
            <h2>
              <a href="https://www.linkedin.com/in/lejonu/">LinkedIn</a>
            </h2>
            <p>Acompanhe minha carreira</p>
          </div>
        </div>
      </div>
      <div className="card-container" id="github">
        <div className="card">
          <div className="card-wrapper">
            <h2>
              <a href="https://github.com/lejonu">Github</a>
            </h2>
            <p>Veja meus projetos</p>
          </div>
        </div>
        <div className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          dignissimos inventore dicta eveniet earum sint ea. Totam voluptatem ad
          consequatur dignissimos odit sint deserunt cum magni minus? Soluta,
          nesciunt praesentium! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. At earum hic ipsum tempora accusantium suscipit
          saepe iusto debitis necessitatibus molestias dolorum et quos nam non,
          similique vel soluta aut mollitia.
        </div>
      </div>
    </>
  )
}

export default Card
