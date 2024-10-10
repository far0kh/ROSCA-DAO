import React from "react";
import MainButton from "./MainButton";
import ContactModal from "./ContactModal";

function FooterBar() {
  const data = {
    social: [
      { name: "X.com", link: "https://x.com/piltonet" },
      { name: "Instagram", link: "https://instagram.com/piltonet" },
      { name: "Facebook", link: "https://facebook.com/piltonet" },
      { name: "LinkedIn", link: "https://linkedin.com/company/piltonet" },
    ],
    // product: [
    //   "Changelog",
    //   "Customer stories",
    //   "Security",
    // ],
    // company: ["About", "Careers", "Blog", "Startip program"],
    // support: ["Help Center", "Talk to support", "API docs", "System status"],
  };
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[90px]">
      <div className="flex gap-2 items-center">
        <img src="/images/logo.png" alt="Piltonet Logo" width={35} height={35} />
        <p className="font-[700] text-gray-300">
          PILTONET
        </p>
      </div>
      <div>
        <p className="font-[100] text-[0.9rem] text-gray-500">
          Blockchain-Based ROSCA (Rotating Savings and Credit Associations)
        </p>
      </div>

      <div className="mt-[32px] pb-[50px] flex justify-between w-full gap-8 flex-col md:flex-row flex-wrap">
        <div>
          <p className="text-[#9098A0] mb-[12px]">Social</p>
          <div className="flex flex-col gap-3">
            {data.social.map((item, index) => (
              <a key={index} href={item.link} target="_blank" className="text-[#555E67] hover:cursor-pointer">
                {item.name}
              </a>
              // <Link href={item.link} key={index} className="text-[#555E67] hover:cursor-pointer">
              // </Link>
            ))}
          </div>
        </div>
        {/* <div>
          <p className="text-[#9098A0] mb-[12px]">Company</p>
          <div className="flex flex-col gap-3">
            {data.company.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#9098A0] mb-[12px]">Support</p>
          <div className="flex flex-col gap-3">
            {data.support.map((item, index) => (
              <p key={index} className="text-[#555E67] hover:cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div> */}
        <div className="min-w-[300px]">
          <p className="font-medium text-[#9098A0] mb-4">Ready to start?</p>
          <div className="flex flex-col gap-[12px] justify-start">
            <MainButton
              text="Start for free"
              size="small"
              width="full_width"
              className="border-none bg-[#31373D] hover:bg-[#31373D] rounded-[12px]"
            />
            <ContactModal />
          </div>
        </div>
      </div>

    </section>
  );
}

export default FooterBar;
