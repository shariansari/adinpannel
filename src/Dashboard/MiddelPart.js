import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { LeftLinks } from "./LeftLinkData";
import Rightarrow from '../images/rightwhite.png'
import Downarrow from '../images/Down.png'

function MiddelPart() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (

    <div className="px-3 my-5" >

      {LeftLinks.map((item, index) => {
        return (
          <div>
            <Accordion open={open === 1 ? false : open === item.id}>
              <AccordionHeader onClick={() => handleOpen(item.id)} className="text-xs font-light text-white hover:text-white border-0">
                <div>
                  <div className="flex items-start gap-x-2 ">
                    <img src={open === item.id ?Downarrow :Rightarrow } alt="" className="w-1.5 mt-1"/>
                    <div>
                      {item.title}
                    </div>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="text-white p-2 mt-1 bg-blue-gray-600 hover:bg-black rounded-lg">
              <div>
                {item.child[0]?.title }
              </div>
              </AccordionBody>
            </Accordion>

          </div>
        )
      })

      }


    </div>


  )
}

export default MiddelPart