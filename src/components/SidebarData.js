import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Alpha',
    path: '/alpha',
    icon: <TbIcons.TbLetterA />,
    cName: 'nav-text'
  },
  {
    title: 'Model',
    path: '/model',
    icon: <FaIcons.FaUncharted />,
    cName: 'nav-text'
  },
  {
    title: 'Position and Risk',
    path: '/position_and_risk',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text'
  },
  {
    title: 'Reporting',
    path: '/reporting',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
