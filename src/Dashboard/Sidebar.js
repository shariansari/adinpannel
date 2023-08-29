import React from "react";
import { Leftarrow, pin } from "../Constant/icons";
import { SidebarLink } from "./SidebarLinks";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { LeftLinks } from "./LeftLinkData";
import Rightarrow from "../images/rightwhite.png";
import Downarrow from "../images/Down.png";

function Sidebar() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-white border b-2 border-gray-400 rounded  px-3 w-56 p-3 h-[87vh] fixed top-[70px]">
      <div className="flex items-center justify-between">
        <div className="text-black font-normal">Administration</div>
        <div className="text xs text-green-500">{Leftarrow}</div>
      </div>
      <div className="mt-2 rounded p-2 bg-green-100 text-sm flex px-6 gap-2 text-green-700">
        <div>{pin}</div> <div>Overview</div>{" "}
      </div>
      <div className="mt-2 ">
        {SidebarLink.map((item, index) => {
          return (
            <div key={index}>
              <Accordion open={open === item.id}>
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="border-0 text-xs bg-white hover:bg-gray-300 my-1 rounded py-3 px-2"
                >
                  <div>
                    <div className="flex items-center gap-x-2 justify-center ">
                      <img
                        src={open === item.id ? Downarrow : Rightarrow}
                        alt=""
                        className="w-2 mt-1"
                      />
                      <div>{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionBody className=" p-2 mt-1">
                  <div>
                    {item.child.map((e, i) => {
                      return (
                        <div className="flex">
                          <div className=" rounded p-2bg-white hover:bg-gray-300 w-full py-3 text-sm flex px-4 gap-2 ">
                            <div>{e.icon}</div> <div>{e.title}</div>{" "}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
