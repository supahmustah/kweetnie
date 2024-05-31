import * as SimpleIcons from 'react-icons/si';
import * as Devicons from 'react-icons/di';
import { TbBrandCSharp, TbBrandCss3, TbBrandHtml5 } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';
import { FaJava, FaAndroid } from 'react-icons/fa';

const skills = [
  {
    title: 'JavaScript',
    icon: <Devicons.DiJavascript1 />,
    color: 'bg-[#F0BE25]',
    knowledge: 4,
    desc: `JavaScript is a high-level programming language that is used primarily for web development.`,
  },
  {
    title: 'CSharp',
    icon: <TbBrandCSharp />,
    color: 'bg-[#6A1577]',
    knowledge: 4,
    desc: `C# is an object-oriented programming language for .NET applications.`,
  },
  {
    title: 'ReactJS',
    icon: <SimpleIcons.SiReact />,
    color: 'bg-[#61DBFB]',
    knowledge: 4.5,
    desc: `React is a JavaScript library for building user interfaces.`,
  },
  {
    title: 'Neo4j',
    icon: <SimpleIcons.SiNeo4J />,
    color: 'bg-[#008CFF]',
    knowledge: 3.5,
    desc: `Neo4j is a graph database management system that uses graph structures to store and manage data.`,
  },
  {
    title: 'MySQL',
    icon: <GrMysql />,
    color: 'bg-[#00618B]',
    knowledge: 4,
    desc: `MySQL is a relational database management system that is used for storing and managing structured data.`,
  },
  {
    title: 'HTML',
    icon: <TbBrandHtml5 />,
    color: 'bg-[#E54C21]',
    knowledge: 4,
    desc: `HTML is a markup language used to create the structure and content of web pages.`,
  },
  {
    title: 'CSS',
    icon: <TbBrandCss3 />,
    color: 'bg-[#244ADD]',
    knowledge: 4,
    desc: `CSS is a style sheet language used for designing the visual appearance of web pages.`,
  },
  {
    title: 'VueJS',
    icon: <SimpleIcons.SiVuedotjs />,
    color: 'bg-[#3FB27F]',
    knowledge: 2.5,
    desc: `VueJS is a progressive JavaScript framework for building user interfaces.`,
  },
  {
    title: 'Tailwind',
    icon: <SimpleIcons.SiTailwindcss />,
    color: 'bg-[#38BDF8]',
    knowledge: 4.5,
    desc: `Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.`,
  },
  {
    title: 'Java',
    icon: <FaJava />,
    color: 'bg-[#0074BD]',
    knowledge: 4,
    desc: `Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.`,
  },
  {
    title: 'Kotlin',
    icon: <SimpleIcons.SiKotlin />,
    color: 'bg-[#7F52FF]',
    knowledge: 4,
    desc: `Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference.`,
  },
  {
    title: 'SpringBoot',
    icon: <SimpleIcons.SiSpringboot />,
    color: 'bg-[#69AD3C]',
    knowledge: 3.5,
    desc: `Spring Boot is an open-source Java framework used for programming standalone, production-grade Spring-based applications with minimal effort.`,
  },
];
export default skills;
