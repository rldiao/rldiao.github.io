import * as React from "react"

const Cell = ({title, subtitle, content}: CellProps) => {
    return (
        <div className="row">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="content">{content}</div>
        </div>
    )
}

export type CellProps = {
  title: string;
  subtitle: string;
  content: string;
}

export default Cell;