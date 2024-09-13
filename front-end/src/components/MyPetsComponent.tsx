import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function MyPetsComponent() {
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 text-4xl font-semibold">
        <img
          onClick={handleShowDetails}
          className="w-36 h-36 object-cover object-center rounded-full cursor-pointer md:w-48 md:h-48"
          src="https://tvazteca.brightspotcdn.com/dims4/default/1029d5c/2147483647/strip/true/crop/1920x1080+0+0/resize/928x522!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F38%2Fe6%2F7b33cdd042d5a378d56a7f81fa73%2Fperritos-primeros-auxilios.jpg"
          alt=""
        />
        <h2 className="bg-white p-2 rounded-md">Max</h2>
      </div>

      {showDetails && (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-20 bg-[#00000057]">
          <div className="bg-white p-4 rounded-md flex flex-col gap-4 shadow-md shadow-black text-4xl w-3/4 md:w-3/5 lg:w-3/6 xl:w-4/12">
            <div className="flex justify-between items-center">
              <p>Details</p>
              <span
                className="bg-black text-white rounded-full cursor-pointer"
                onClick={handleShowDetails}
              >
                <RxCross2 />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Name: </p>
                <p>Max</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Age: </p>
                <p>2 years</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Breed: </p>
                <p>Golden Retriever</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Weight: </p>
                <p>25kg</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyPetsComponent;