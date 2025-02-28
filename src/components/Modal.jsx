import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ ref, buttonCaption }) {
  const dialog = useRef();
  function handleCloseModal() {
    if (dialog.current) {
      dialog.current.close();
    }
  }
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:flex flex-col h-[18vw] w-[40vw] rounded-md bg-gray-200/90 border-8 border-stone-400 mr-80"
      ref={dialog}
    >
      <div className="flex justify-center items-center mb-2 ">
      <FontAwesomeIcon icon={faTriangleExclamation} className="text-5xl text-red-600 mt-2"/>
      </div>
      <h2 className="text-center text-2xl from-neutral-900 mb-3" >Invalid input!</h2>
      <p className="text-wrap text-lg text-center mb-4 from-neutral-300">Oops...looks like you forgot to input a value.</p>
      <form method="dialog">
        <div className="flex justify-center items-center ">
        <button className="bg-zinc-900 text-slate-200 w-20 h-10 mb-4 transition-transform duration-200 active:80" onClick={handleCloseModal}>{buttonCaption}</button>
        </div>
      </form>

    </dialog>,
    document.getElementById("modal-root")
  );
}
