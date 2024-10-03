import { Close } from "@/public/icon/icon";
import React, { useEffect } from "react";

export default function Modal({ showModal, setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Scroll stop
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";x
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div>
      <div onClick={handleClick} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
        <form
          onClick={(e) => e.stopPropagation()} 
          className="flex flex-col gap-6 rounded-2xl bg-blacc md:w-3/4 max-md:w-full max-md:mx-6 p-10"
        >
          <div className="flex items-center justify-between">
            <div className="text-white max-md:text-sm">
              <h2>Ma’lumot qoldiring</h2>
              <p className="max-md:text-xs">
                Mutaxassislarimiz siz bilan tez orada bog’lanishadi :)
              </p>
            </div>
            <div>
              <button onClick={closeModal}>
                <Close />
              </button>
            </div>
          </div>
          <div className="flex justify gap-6 max-md:flex-col">
            <input
              type="text"
              name="modalName"
              placeholder="Ism familiya"
              className="w-1/2 max-md:w-full bg-ingrey placeholder-black outline-none max-md:text-xs rounded-lg pl-3 py-2"
            />
            <input
              type="text"
              name="modalTel"
              placeholder="Telefon raqaminggiz"
              className="w-1/2 max-md:w-full bg-ingrey placeholder-black outline-none max-md:text-xs rounded-lg pl-3 py-2"
            />
          </div>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Qaysi Xizmat turimizga qiziqish bildirmoqchisiz ?"
              className="w-full bg-ingrey placeholder-black outline-none max-md:text-xs rounded-lg pl-3 py-2"
            />
            <textarea
              id="message"
              required
              placeholder="Sizni har bir fikringiz biz uchun muhim..."
              className="p-3 rounded-md bg-[#B7B8B9] placeholder-black opacity-70 max-md:text-sm outline-none text-black w-full h-52 max-md:h-32 resize-none"
              rows="4"
            />
            <button className="bg-green flex justify-center px-14 max-md:ml-11 max-md:w-2/3 py-4 text-base font-bold shadow-inner rounded-3xl max-md:text-sm custom-shadow">
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
