import * as SimpleIcons from 'react-icons/si';
import * as Devicons from 'react-icons/di';
import { TbCSharp, TbBrandCss3, TbBrandHtml5 } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';

const skills = [
  {
    title: 'JavaScript',
    icon: <Devicons.DiJavascript1 />,
    color: 'bg-[#F0BE25]',
    appreciation: 4,
    desc: `JavaScript is a high-level programming language that is used primarily for web development.`,
  },
  {
    title: 'CSharp',
    icon: <TbCSharp />,
    color: 'bg-[#6A1577]',
    appreciation: 4,
    desc: `C# is an object-oriented programming language for .NET applications.`,
  },
  {
    title: 'ReactJS',
    icon: <SimpleIcons.SiReact />,
    color: 'bg-[#61DBFB]',
    appreciation: 4.5,
    desc: `React is a JavaScript library for building user interfaces.`,
  },
  {
    title: 'Neo4j',
    icon: <SimpleIcons.SiNeo4J />,
    color: 'bg-[#008CFF]',
    appreciation: 4,
    desc: `Neo4j is a graph database management system that uses graph structures to store and manage data.`,
  },
  {
    title: 'MySQL',
    icon: <GrMysql />,
    color: 'bg-[#00618B]',
    appreciation: 4,
    desc: `MySQL is a relational database management system that is used for storing and managing structured data.`,
  },
  {
    title: 'HTML',
    icon: <TbBrandHtml5 />,
    color: 'bg-[#E54C21]',
    appreciation: 3.5,
    desc: `HTML is a markup language used to create the structure and content of web pages.`,
  },
  {
    title: 'CSS',
    icon: <TbBrandCss3 />,
    color: 'bg-[#244ADD]',
    appreciation: 3.5,
    desc: `CSS is a style sheet language used for designing the visual appearance of web pages.`,
  },
  {
    title: 'VueJS',
    icon: <SimpleIcons.SiVuedotjs />,
    color: 'bg-[#3FB27F]',
    appreciation: 2.5,
    desc: `VueJS is a progressive JavaScript framework for building user interfaces.`,
  },
  {
    title: 'Tailwind',
    icon: <SimpleIcons.SiTailwindcss />,
    color: 'bg-[#38BDF8]',
    appreciation: 4.5,
    desc: `Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.`,
  },
];
export default skills;
