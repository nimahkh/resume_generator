import React from "react"
import PersonalInformation from "./PersonalInformation"
import ProfileAndSkills from "./ProfileAndSkills"
import NimaHabibkhodaResume from "../../assets/files/NimaHabibkhodaResume.pdf"

function index() {
  return (
    <>
      <PersonalInformation
        Author={"Nima Habibkhoda"}
        HeadTitle={"React Developer - Javascript Developer"}
        email={"nima.2004hkh@gmail.com"}
        phoneNumber={"+989138406080"}
        pdfLink={NimaHabibkhodaResume}
      />
      <ProfileAndSkills />
    </>
  )
}

export default index
