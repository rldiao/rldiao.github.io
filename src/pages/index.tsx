import * as React from "react"
import Cell, { CellProps } from "../components/cell"
import Footer from "../components/footer"

const experience: CellProps[] = [
  {
    title: "Canva",
    subtitle: "Software Engineer",
    content: "content",
  },
  {
    title: "BlackStream",
    subtitle: "Software Engineer",
    content: "content",
  },
  {
    title: "Deloitte",
    subtitle: "Developer",
    content: "content",
  },
  {
    title: "University of Melbourne",
    subtitle: "BSc of Science - Computing & Software",
    content: "content",
  },
]

const IndexPage = () => (
  <main>
    <h1>Robert Diao</h1>
    <h2>My Journey</h2>
    <div className="experience">
      {experience.map(element => {
        return <Cell
          title={element.title}
          subtitle={element.subtitle}
          content={element.content} />
      })}
    </div>
    <Footer></Footer>
  </main>
)

export default IndexPage
