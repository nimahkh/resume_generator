import React from "react"
import PropTypes from "prop-types"

function index({ summary }) {
  return (
    <div className="yui-gf">
      <div className="yui-u first">
        <h2>Profile</h2>
      </div>
      <div className="yui-u">
        <p className="enlarge">{summary}</p>
      </div>
    </div>
  )
}
export default index

index.propTypes = {
  summary: PropTypes.string,
}
