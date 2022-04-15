import * as React from "react"

const Cell = ({title, subtitle, children}: CellProps) => {
    return (
        <div className="mb-4 p-4 border rounded-2xl border-gray">
          <div className="text-2xl font-bold text-blue">{title}</div>
          <div className="font-bold text-red">{subtitle}</div>
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
