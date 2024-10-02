import { Close } from "@/public/icon/icon";
import React from "react";

export default function Modal() {
  return (
    <div>
      <div className="container w-full z-10 fixed top-0 mx-auto">
        <div>
          <div className="flex justify-center items-center h-[100vh] bg-lights">
            <form className="flex flex-col gap-6 rounded-2xl bg-blacc w-3/4 p-10">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h2>Ma’lumot qoldiring</h2>
                  <p>Mutaxassislarimiz siz bilan tez orada bog’lanishadi :)</p>
                </div>
                <div>
                  <Close />
                </div>
              </div>
              <div className="flex gap-6">
                <input
                  type="text"
                  name="modalName"
                  placeholder="Ism familiya"
                  id=""
                  className="w-1/2 bg-ingrey  placeholder-black outline-none  rounded-lg pl-3 py-2"
                />
                <input
                  type="text"
                  name="modalTel"
                  placeholder="Telefon raqaminggiz"
                  id=""
                  className="w-1/2 bg-ingrey placeholder-black outline-none rounded-lg pl-3 py-2"
                />
              </div>
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  name=""
                  placeholder="Qaysi Xizmat turimizga qiziqish bildirmoqchisiz ?"
                  id=""
                  className="w-full bg-ingrey placeholder-black outline-none  rounded-lg pl-3 py-2"
                />
                <textarea
                  id="message"
                  required
                  placeholder="Sizni har bir fikringiz biz uchun muhim..."
                  className="p-3 rounded-md bg-[#B7B8B9] placeholder-black opacity-70 outline-none text-black w-full h-[184px] resize-none"
                  rows="4"
                  //   onChange={(e) => setMessage(e.target.value)}
                  //   value={message}
                />
              </div>
              <button className="bg-green px-14 py-4 text-base font-bold shadow-inner rounded-3xl custom-shadow">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
