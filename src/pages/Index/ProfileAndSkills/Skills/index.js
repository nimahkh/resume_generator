import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

function Index({ Skills }) {
  const [skills, setSkills] = useState([])

  function chunk(array, size) {
    if (!array) return []
    const firstChunk = array.slice(0, size) // create the first chunk of the given array
    if (!firstChunk.length) {
      return array // this is the base case to terminal the recursive
    }
    return [firstChunk].concat(chunk(array.slice(size, array.length), size))
  }

  useEffect(() => {
    const chunkedSkills = chunk(Skills, 4)
    setSkills(chunkedSkills)
  }, [])

  return (
    <div className="yui-gf">
      <div className="yui-u first">
        <h2>Skills</h2>
      </div>
      <div className="yui-u">
        {skills!==undefined &&  skills.map((items, index) => (
          <div className="talent" key={index}>
            {items.map((item, index) => (
              <Link item={item.name} key={index} link={item.link} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index

Index.propTypes = {
  Skills: PropTypes.array,
}

function Link({ item, link }) {
  return link === "" ? (
    <h2>{item}</h2>
  ) : (
    <a href={link} title={item}>
      {" "}
      {item}
    </a>
  )
}
