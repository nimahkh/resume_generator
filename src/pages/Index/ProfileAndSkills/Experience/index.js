import React from "react"

function index({ experiences }) {
  return (
    <div className="yui-gf">
      <div className="yui-u first">
        <h2>Experience</h2>
      </div>

      <div className="yui-u">
        {experiences !== undefined && experiences.map((item, index) => (
          <div
            className={`job ${experiences.length - 1 === index ? "last" : ""}`}
            key={index}
          >
            <h2>{item.company}</h2>
            <h3>{item.title}</h3>
            <h4>{item.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default index
