import React from "react"

function ElementOne(props) {
  return (
    <div className="tw-flex md:tw-justify-center tw-align-middle">
      <div className="tw-rounded-full md:tw-w-10 tw-w-6 tw-h-6 md:tw-h-10 tw-shadow-lg tw-shadow-gray-500 tw-my-6 tw-self-center tw-mx-2 md:tw-mx-0 tw-hidden md:tw-block "></div>
      <div className="tw-w-[90%] tw-ml-4  md:tw-w-1/2 tw-h-16 tw-rounded-full tw-bg-red-300 tw-my-6 tw-text-center md:tw-ml-10 tw-align-middle tw-py-4 tw-text-lg tw-font-bold">
        {props.item}
      </div>
    </div>
  )
}

export default ElementOne
