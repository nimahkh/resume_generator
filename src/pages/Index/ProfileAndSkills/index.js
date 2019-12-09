import React from "react"
import Skills from "./Skills"
import Summary from "./Summary"
import Experience from "./Experience"
import Education from "./Education"
import experiences from "../../../components/ProfileAndSkills/Experience/experiences"
import skills from "../../../components/ProfileAndSkills/Skills/skills"
import educations from "../../../components/ProfileAndSkills/Education/educations"

function index() {
  const summary =
    "Creative React Developer with 5+ years of extensive knowledge in Javascript and scripting languages,developing, and managing complex financial sites and block chain trading platforms. Specializes in ReactJS and responsive design."
  return (
    <div id="bd">
      <div id="yui-main">
        <div className="yui-b">
          <Summary summary={summary} />

          <Skills Skills={skills} />

          <Experience experiences={experiences} />

          <Education educations={educations} />
        </div>
      </div>
    </div>
  )
}

export default index
