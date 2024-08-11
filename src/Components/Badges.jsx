import React from "react";
import pic from "../asserts/myprofile.jpg";

const badge = [
  {
    title: "Achiever in Arrays",
    provider: "",
    cred_link: "",
  },
  {
    title: "Specialist in Arrays ",
    provider: "",
    cred_link: "",
  },
  {
    title: "Achiever in Binary search",
    provider: "",
    cred_link: "",
  },
];

function Badges() {
  return (
    <div className="flex flex-col w-[100%] p-3 justify-center ">
      <h2 className="text-2xl text-[teal] underline underline-offset-4 mb-5 font-serif text-center">
        My Badges{" "}
      </h2>
      <section className="flex flex-row w-[100%] bg-slate-600 justify-center p-[10px] gap-10">
        {badge ? (
          badge.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col w-[200px] h-[320px] bg-[white] rounded-md hover:w-[220px] cursor-pointer mb-5 shadow-lg"
              >
                <img
                  src={pic}
                  width={"100%"}
                  height={"200px"}
                  alt="badge"
                  className="rounded-full mb-2"
                />
                <p className="text-xl text-center h-[60px] bg-[#ff0080af] font-extralight first-letter:text-[red]  text-[black]">
                  {item.title}
                </p>
                <a
                  role="button"
                  className="w-[100px] h-6 bg-black text-white rounded-md text-center m-auto"
                  href={item.cred_link}
                >
                  See cred
                </a>
              </div>
            );
          })
        ) : (
          <h2>Not loaded...</h2>
        )}
      </section>
    </div>
  );
}

export default Badges;
