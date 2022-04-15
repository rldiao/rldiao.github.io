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
  <div className="flex-column">
    <h1 className="text-8xl font-bold">Robert Diao</h1>
    <h2 className="text-4xl font-bold">My Journey</h2>
    <div className="experience">
      {experience.map(element => {
        return <Cell
          title={element.title}
          subtitle={element.subtitle}
          content={element.content} />
      })}
    </div>
    <Footer></Footer>
  </div>
)

export default IndexPage;
