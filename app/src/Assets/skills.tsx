import * as SimpleIcons from 'react-icons/si';
import * as Devicons from 'react-icons/di';
const skills = [
  {
    title: 'JavaScript',
    icon: <Devicons.DiJavascript1 />,
    color: '#F0BE25',
    desc: `JavaScript is a programming language that is one of the core technologies of the World Wide Web along side HTML and CSS. JavaScript is one of the languages I use whenever I'm building a website. I like how you can use different libraries to aid you on your vision.`,
  },
  {
    title: 'CSharp',
    icon: <SimpleIcons.SiCsharp />,
    color: '#6A1577',
    desc: `C# is a general-purpose, multi-paradigm progamming language. It encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented and component-oriented programming disciplines. This is the first backend language I've learnt. I used this mostly in my school days since then I have not used it that much, but I'm always prepared to expand my knowledge of it.`,
  },
  {
    title: 'ReactJS',
    icon: <SimpleIcons.SiReact />,
    color: '#61DBFB',
    desc: `ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on UI components. This is my favorite language. This website is also made in ReactJS. I just love how you can use and re-use different components for different parts of your website. It's also great with using libraries to aid you.`,
  },
  {
    title: 'Neo4j',
    icon: <SimpleIcons.SiNeo4J />,
    color: '#008CFF',
    desc: `Neo4j is a graph database management system developed by Neo4j, Inc. Described by its developers as an ACID-compliant transactional database with native graph storage and processing. This is the first graph database I've learnt. I used this during my internship while I did my graduate of programming. The fact that you can progress fast using Neo4J was really fascintaing to me. It's nice to use since you don't need foreign keys to relate tables to eachother like in MySQL.`,
  },
  {
    title: 'MySQL',
    icon: <SimpleIcons.SiMysql />,
    color: '#00618B',
    desc: `MySQL is an open-source relational database management system. It's a langauge programmers use to create, modify and extract data from relational databases. This is the first relational database that I've learnt. I like doing database related stuff such as setting up difficult queries, using stored procedures etc. I found MySQL always a flattering language.`,
  },
  {
    title: 'HTML',
    icon: <SimpleIcons.SiHtml5 />,
    color: '#E54C21',
    desc: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It's usually combined with CSS and/or JavaScript for nicer looking websites. This is the first language I've learnt and I'm using it for pretty much every project. I enjoy making websites, I primarily make it in ReactJS but ofcourse there is some HTML mixed in to that.`,
  },
  {
    title: 'CSS',
    icon: <SimpleIcons.SiCss3 />,
    color: '#244ADD',
    desc: `Cascading Style Sheets or CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. It's a cornerstone technology of the making websites alongside HTML and JavaScript. I mostly use CSS for the parts I can't do when I'm using a framework like Tailwind. The way CSS works is very simple and easy to learn so I liked it when I first started to learn it.`,
  },
  {
    title: 'VueJS',
    icon: <SimpleIcons.SiVuedotjs />,
    color: '#3FB27F',
    desc: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. This was the first thing I learned other than a plain HTML, CSS and JavaScript website. I prefer using ReactJS over VueJS but it's still fun to use!`,
  },
  {
    title: 'Tailwind',
    icon: <SimpleIcons.SiTailwindcss />,
    color: '#38BDF8',
    desc: `Tailwind is a utility-first CSS framework packed with custom classes that can be composed to build any design, directly in your markup. Tailwind is a must in almost all my websites I've built. I just like how you can add Tailwind inside your HTML classes to reduce the amount of CSS you need to write. It's also very nice that you can create your own extensions of it that you can use all over your website.`,
  },
];
export default skills;
