import React from "react"
import renderer from "react-test-renderer"
import Layout from "../layout"
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Layout><div/></Layout>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
