import React from "react"

function Customer(props) {
  return (
    <div className="tw-flex  tw-text-xl tw-text-gray-400 tw-py-4  md:tw-w-3/5 tw-w-[90%] tw-bg-red-200 tw-mx-auto tw-my-4 tw-rounded-t-lg tw-rounded-b-lg tw-shadow-xl tw-shadow-gray-500">
      <img
        src={`${props.image}`}
        className=" tw-rounded-full tw-w-36 tw-h-36 tw-ml-4"
      />
      <div className="tw-pl-4 tw-self-center">
        <p>{props.feedback}</p>
        <p className="tw-text-xl tw-font-semibold tw-mt-4 ">{props.name}</p>
      </div>
    </div>
  )
}

export default Customer
