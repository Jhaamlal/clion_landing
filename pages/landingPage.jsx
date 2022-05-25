import ElementOne from "../components/ElementOne"
import Customer from "../components/Customer"
import useHasMounted from "../components/useHasMounted"
import { useState } from "react"
import Faq from "../components/Faq"
import { db } from "../components/firebase"
import { useRouter } from "next/router"
import { collection, addDoc, Timestamp } from "firebase/firestore"

function LandingPage() {
  const hasMounted = useHasMounted()
  const router = useRouter()
  const [customer, setCustomer] = useState({
    name: "",
    age: "",
    mobile: "",
    baldness: "",
  })
  if (!hasMounted) {
    return null
  }

  const submitData = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "CustomerData"), {
        Name: customer.name,
        Age: customer.age,
        mobile: customer.mobile,
        Baldness: customer.baldness,
      })
      setCustomer(() => ({
        name: "",
        age: "",
        mobile: "",
        baldness: "",
      }))
      router.push("/Thank")
      setTimeout(() => {
        router.push("https://clioncare.com/")
      }, 2000)
      // onclose()
    } catch (error) {
      alert(error)
    }
    console.log(customer)
  }
  return (
    <div className="tw-font-serif">
      <nav className="tw-flex tw-justify-between tw-px-3 md:tw-px-5 tw-py-5 tw-bg-clion-gray">
        <img src="Logo.png" alt="" className="tw-w-28" />
        <button className="tw-bg-red-600 tw-px-4 tw-py-1.5 tw-rounded tw-shadow tw-text-white tw-font-semibold">
          <a href="#form">BOOK NOW</a>
        </button>
      </nav>
      <main>
        <section className="tw-max-h-screen md:tw-min-h-screen tw-flex tw-justify-center md:tw-justify-start  tw-items-center part-2 tw-px-6 md:tw-px-8 lg:tw-px-10 tw-relative md:tw-static">
          <h1 className="tw-flex tw-flex-col tw-px-3 md:tw-py-5 tw-bottom-0 tw-bg-transparent tw-rounded-md tw-absolute md:tw-static">
            <span className="tw-text-4xl tw-font-semibold tw-text-red-600">
              100% guarantee of Result
            </span>
            <span className="tw-text-4xl tw-font-semibold md:tw-text-white  tw-text-black">
              Single day process,Done by Experts
            </span>
          </h1>
        </section>

        <section className="tw-bg-gray-200 tw-rounded-t-2xl ">
          <h1 className=" tw-text-red-600 tw-text-3xl tw-py-6 tw-text-center tw-font-bold">
            Result
          </h1>
          <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1">
            <img src="After_Before_1.jpg" className=" tw-my-2" />
            <img src="After_Before_2.jpg" className=" tw-my-2" />
            <img src="After_Before_3.jpg" className=" tw-my-2" />
            <img src="After_Before_4.jpg" className=" tw-my-2" />
            <img src="After_Before_5.jpg" className=" tw-my-2" />
            <img src="After_Before_8.jpg" className=" tw-my-2" />
            <img src="After_Before_9.jpg" className=" tw-my-2" />
          </div>
        </section>

        <section>
          <h1 className="tw-text-center tw-font-bold tw-text-red-500 tw-my-4 tw-text-3xl  ">
            Why Clion care ?
          </h1>
          <ElementOne item="100% Result" />
          <ElementOne item="2500+ Surgeries" />
          <ElementOne item="Expert Doctors" />
          <ElementOne item="After surgery services" />
        </section>

        <section className="tw-py-6 tw-px-8">
          <h1 className="tw-mb-6 tw-text-4xl tw-text-clion-red tw-text-center md:tw-my-8 tw-my-4">
            Hair transplant
          </h1>
          <Faq />
          <hr className="tw-bg-red-400 tw-w-[70%] tw-h-3 tw-mx-auto tw-mt-4 " />
        </section>

        <section className="tw-min-w-full">
          <h1 className="tw-text-center tw-font-bold tw-text-red-500  tw-text-4xl ">
            Happy Customer
          </h1>
          <Customer
            name="Bhart Bhai"
            image="dummy.png"
            feedback="Great, after surgery service."
          />
          <Customer
            name="Kishan Naidu"
            image="dummy.png"
            feedback="Here they changed my look 360 degree"
          />
          <Customer
            name="Yogesh Patel"
            image="dummy.png"
            feedback="Great counsling which remove my fear"
          />
        </section>
        <section id="form" className="tw-mx-2 ">
          <h1 className="tw-text-red-600 tw-text-4xl tw-font-bold tw-text-center tw-my-4 tw-mt-8 ">
            Know Your Hair Transplant Cost !
          </h1>
          <div className="tw-min-w-full tw-bg-clion-gray  tw-rounded-3xl">
            <input
              className="tw-w-[90%] md:tw-w-[60%] tw-h-16 tw-rounded-full  tw-bg-white tw-my-6 tw-text-center md:tw-ml-60  tw-ml-4"
              type={"text"}
              placeholder="Your Name"
              value={customer.name}
              onInput={(e) =>
                setCustomer((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />

            <input
              className="tw-w-[90%]  md:tw-w-[60%] tw-h-16 tw-rounded-full  tw-bg-white tw-my-6 tw-text-center md:tw-ml-60 tw-ml-4"
              type={"tel"}
              placeholder="Your number"
              onInput={(e) =>
                setCustomer((prev) => ({
                  ...prev,
                  mobile: e.target.value,
                }))
              }
            />

            <input
              className="tw-w-[90%] md:tw-w-[60%] tw-h-16 tw-rounded-full  tw-bg-white tw-my-6 tw-text-center md:tw-ml-60 tw-ml-4"
              placeholder="Your age"
              type={"number"}
              onInput={(e) =>
                setCustomer((prev) => ({
                  ...prev,
                  age: e.target.value,
                }))
              }
            />

            <p className="tw-text-black tw-shadow-md tw-text-center tw-text-2xl tw-capitalize">
              Click on image
            </p>
            <div className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-4 tw-grid-cols-2 tw-w-full ">
              <div className="tw-flex ">
                <input
                  type="radio"
                  name="bald"
                  id="1"
                  value={1}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 1,
                    }))
                  }
                ></input>
                <label htmlFor="1">
                  <img src="Icon-01.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
              <div className="tw-flex ">
                <input
                  type="radio"
                  name="bald"
                  id="2"
                  value={2}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 2,
                    }))
                  }
                ></input>
                <label htmlFor="2">
                  <img src="Icon-02.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
              <div className="tw-flex ">
                <input
                  type="radio"
                  name="bald"
                  id="3"
                  value={3}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 3,
                    }))
                  }
                ></input>
                <label htmlFor="3">
                  <img src="Icon-03.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
              <div className="tw-flex ">
                <input
                  type="radio"
                  name="bald"
                  id="4"
                  value={4}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 4,
                    }))
                  }
                ></input>
                <label htmlFor="4">
                  <img src="Icon-04.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
              <div className="tw-flex  ">
                <input
                  type="radio"
                  name="bald"
                  id="5"
                  value={5}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 5,
                    }))
                  }
                ></input>
                <label htmlFor="5">
                  <img src="Icon-05.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
              <div className="tw-flex ">
                <input
                  type="radio"
                  name="bald"
                  id="6"
                  value={6}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 6,
                    }))
                  }
                ></input>
                <label htmlFor="6">
                  <img src="Icon-06.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
              <div className="tw-flex tw-pl-4">
                <input
                  type="radio"
                  name="bald"
                  id="7"
                  value={7}
                  className="tw-self-center"
                  onClick={(e) =>
                    setCustomer((prev) => ({
                      ...prev,
                      baldness: 7,
                    }))
                  }
                ></input>
                <label htmlFor="7">
                  <img src="Icon-07.png" className="tw-w-[90%] tw-h-[90%]" />
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={submitData}
              className="tw-bg-clion-red tw-text-white tw-border-2 tw-text-center tw-font-bold tw-w-[50%] tw-h-12 tw-my-4 tw-ml-[20%] md:tw-px-4"
            >
              {" "}
              submit
            </button>
          </div>
        </section>

        <a
          href="https://wa.me/9327443271"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-sticky tw-bottom-8   "
        >
          <img
            src="whatsapp.svg"
            width={100}
            height={100}
            className="tw-ml-auto"
          />
        </a>
      </main>
    </div>
  )
}

export default LandingPage
