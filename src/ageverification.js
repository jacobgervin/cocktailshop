import React, { useState } from "react";

function AgeVerificationModal() {
  const [showModal, setShowModal] = useState(true);
  const [showNo, setShowNo] = useState(false);
  const handleYesClick = () => {
    setShowModal(false);
    // Call a function to allow the user to view the site
  };
  const handleNoClick = () => {
    setShowNo(true);
    // Call a function to show a large modal with a message
  };
  return (
    <>
      {showModal && (
        <div className="w-full bg-slate-900/[.90] fixed h-full z-[100] flex flex-col items-center justify-center">
          <div className="text-white text-center bg-slate-900 p-12">
            <h2 className="text-3xl  font-extrabold mb-10">Are you over 18 years old?</h2>
            <div className="w-full flex flex-row justify-evenly mb-5">

            <button className="bg-green-600 px-6 py-2 text-x rounded font-extrabold" onClick={handleYesClick}>Yes</button>
            <button className="bg-rose-700 px-6 py-2 text-xl rounded font-extrabold" onClick={handleNoClick}>No</button>

            </div>
            {showNo && (<p>You have to be over 18 to view this page!</p>)}
          </div>
        </div>
      )}
    </>
  );
}

export default AgeVerificationModal;