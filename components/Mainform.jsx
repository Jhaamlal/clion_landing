import { Button } from "@mui/material"
import React from "react"

function Mainform() {
  return (
    <div className=" tw-font-serif">
      <header className="tw-bg-red-100  tw-h-28 tw-py-4  tw-px-4 tw-z-10 tw-shadow-lg tw-min-w-full  main-Header">
        <img
          src="Logo.png"
          alt="Clion care Logo"
          className="tw-w-36 md:tw-w-44"
        />
        <Button
          className="md:tw-h-10 tw-h-12 tw-my-auto tw-bg-red-600 "
          color="error"
          variant="contained"
        >
          Book now
        </Button>
      </header>
      {/* ---------------------------two------------------------------------------------- */}
      <div className="part-2 tw-relative">
        <p className="tw-absolute  tw-font-extrabold md:tw-text-black tw-text-red-600 tw-text-5xl md:tw-bottom-10 tw-top-10 md:tw-pl-8 tw-pl-3">
          100% guarantee of Result
        </p>
        <p className="tw-absolute tw-text-5xl tw-font-bold md:tw-bottom-4 tw-top-56 md:tw-text-white md:tw-pl-8 tw-pl-3 tw-text-black">
          Single day process,Done by Experts
        </p>
      </div>
      {/* -----------------------------Three----------------------------------------------- */}
    </div>
  )
}

export default Mainform
