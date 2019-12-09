import React from "react"
import PropTypes from "prop-types"

function index({ Author, HeadTitle, email, phoneNumber, pdfLink }) {
  return (
    <div id="hd">
      <div className="yui-gc">
        <div className="yui-u first">
          <h1>{Author}</h1>
          <h2>{HeadTitle}</h2>
        </div>

        <div className="yui-u">
          <div className="contact-info">
            <h3>
              <a id="pdf" href={pdfLink}>
                Download PDF
              </a>
            </h3>
            <h3>
              <a href={`mailto:${email}`}>{email}</a>
            </h3>
            <h3>{phoneNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

index.propTypes = {
  Author: PropTypes.string,
  HeadTitle: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
}
