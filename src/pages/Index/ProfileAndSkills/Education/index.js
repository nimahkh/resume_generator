import React from "react"

function index({ educations }) {
  return (
    <div className="yui-gf last">
      <div className="yui-u first">
        <h2>Education</h2>
      </div>
      {educations!==undefined && educations.map((item, index) => {
        return (
          <div className="yui-u" key={index}>
            <h2>
              {item.inistitute} - {item.city}
            </h2>
            <h3>{item.field} </h3>
          </div>
        )
      })}
    </div>
  )
}

export default index
