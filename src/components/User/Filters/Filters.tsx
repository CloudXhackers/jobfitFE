import React from "react"
import FilterComp from "./FilterComp"

const Filters = ({ filterList }) => {
  return (
    <div className="flex-row flex flex-wrap px-4 justify-start pb-6 max-w-full">
      <div className="text-base font-bold text-[#3C3D37] pt-1 mr-4">
        Filters
      </div>
      <div className="flex-row flex flex-wrap gap-x-6 gap-y-2">
        {Object.entries(filterList).map(([filter, filtercontents]) => (
          <FilterComp title={filter} contents={filtercontents} />
        ))}
      </div>
    </div>
  )
}

export default Filters
