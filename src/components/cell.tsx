import * as React from "react"

const Cell = ({title, subtitle, children}: CellProps) => {
    return (
        <div className="pb-4">
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-bold">{subtitle}</div>
          {children}
        </div>
    )
}

export type CellProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default Cell;
