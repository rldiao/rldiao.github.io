import * as React from "react"
import Cell, { CellProps } from "../components/cell"
import Footer from "../components/footer"

const experience = [
  {
    title: "Canva",
    subtitle: "Software Engineer",
    content: <div>
      <p className="pb-4">
        Currently I am helping build the worlds best company at Canva, and empowering the world
        to design. Canva is one of the fastest growing campanies in the world. This means that
        we are facing some of the most exciting and toughest challenges everyday to meet the needs
        of our community.
      </p>
      <p>
        At Canva, I help ensure that our world class content library is accessable to all our users.
        My responsibilities include designing, building, and maintaining microservices. Technologies
        I work with include, Java, AWS, Finagle, Protobuf, MySQL, and Terraform.
      </p>
    </div>,
  },
  {
    title: "BlackStream",
    subtitle: "Software Engineer",
    content: <div>
      <p className="pb-4">
        BlackStream is a digital and technology business exploring disruptive technologies
        in the wagering and gaming space. We developed technologies to improve operational efficiency
        as well as customer experience.
      </p>
      <p>
        My responsibilities included maintaining legacy code,
        building new containerised application, and liasing with stalkholders.
        Technologies I worked with include, Azure, Python / Django, Celery, Redis, Docker.
      </p>
    </div>
    ,
  },
  {
    title: "Deloitte",
    subtitle: "Platform Engineer",
    content: <div>
      <p className="pb-4">
        Deloitte Platform Engineering helped ensure business build modern technology platforms.
        Platform Engineering works with many of the largest companies in Australia to ensure their
        technology platform continues to meet the business's needs.
      </p>
      <p>
        My time at Deloitte gave me insight into the problems faced by Enterprise
        businesses. I have learnt how to work in a complex enriovment, staging adaptable, and maintaining
        effective communication. I have worked with a range of customers from Fiancal, 
        Education, and Public sectors. My work included but not limited to, application 
        development, and system integrations. Technologies include Python, Django, AWS, and Mule4.
      </p>
    </div>,
  },
  {
    title: "University of Melbourne",
    subtitle: "BSc of Science - Computing & Software",
    content: <div>
      <p>
        At The University of Melbourne I studied critical thinking, problem solving, and the fundamentals
        of computer science. During my spare time, I partook in dance performances as part of Flare Dance Ensemble,
        and competed in a number of hackathons to hone my skills as a developer.
      </p>
    </div>,
  },
]

const IndexPage = () => (
  <div>
    <div className="flex-column m-8">
      <h1 className="text-8xl font-bold h-screen">Robert Diao</h1>
      <h2 className="text-4xl font-bold">My Journey</h2>
      <div className="mt-8 mb-8">
        {experience.map(element => {
          return (
            <Cell
              title={element.title}
              subtitle={element.subtitle}>
              {element.content}
            </Cell>)
        })}
      </div>
    </div>
    <Footer />
  </div>
)

export default IndexPage;
