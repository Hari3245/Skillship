// ==========================================================
// All course and lesson data for SkillShip lives in this one file.
// Each course has an id, title, category, description, thumbnail,
// and a list of lessons. app.js reads this `courses` array.
// ==========================================================

const courses = [
  {
    id: 1,
    title: "HTML Basics",
    category: "Web Dev",
    description:
      "Start your coding journey by learning HTML, the language that gives every web page its structure. You will build real pages with headings, links, images, and forms.",
    thumbnail: "https://placehold.co/600x400/171a21/22c55e?text=HTML+Basics",
    lessons: [
      {
        id: 1,
        title: "What is HTML?",
        duration: "8 min",
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        description:
          "Learn what HTML is, why every website uses it, and how the browser turns tags into a page you can see.",
          completed: false,
        },
      {
        id: 2,
        title: "Headings, Paragraphs, and Text",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        description:
          "Use heading and paragraph tags to organize text on a page, and learn how to make words bold and italic.",
          completed: false,
        },
      {
        id: 3,
        title: "Links and Images",
        duration: "10 min",
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        description:
          "Connect pages together with anchor tags and add pictures to your site with the image tag.",
          completed: false,
        },
      {
        id: 4,
        title: "Lists and Tables",
        duration: "11 min",
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        description:
          "Show ordered and unordered lists, and lay out rows of information with simple tables.",
          completed: false,
        },
      {
        id: 5,
        title: "Forms and Inputs",
        duration: "14 min",
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
        description:
          "Collect information from visitors with text inputs, checkboxes, and buttons inside a form.",
          completed: false,
        },
    ],
  },
  {
    id: 2,
    title: "CSS Styling",
    category: "Web Dev",
    description:
      "Make your pages look great with CSS. Learn colors, spacing, fonts, and modern layout tools like flexbox and grid.",
    thumbnail: "https://placehold.co/600x400/171a21/22c55e?text=CSS+Styling",
    lessons: [
      {
        id: 1,
        title: "What is CSS?",
        duration: "9 min",
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
        description:
          "See how CSS turns a plain HTML page into a designed website, and learn the three ways to add styles.",
          completed: false,
        },
      {
        id: 2,
        title: "Selectors and Colors",
        duration: "13 min",
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
        description:
          "Target elements with class and id selectors, and paint them with color names, hex codes, and RGB values.",
          completed: false,
        },
      {
        id: 3,
        title: "The Box Model",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
        description:
          "Understand padding, borders, and margins — the invisible boxes that control all spacing on a page.",
          completed: false,
        },
      {
        id: 4,
        title: "Flexbox Layout",
        duration: "15 min",
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
        description:
          "Line up elements in rows and columns with flexbox, the easiest way to build modern layouts.",
          completed: false,
        },
      {
        id: 5,
        title: "Responsive Design",
        duration: "14 min",
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
        description:
          "Use media queries to make your site look good on phones, tablets, and desktops.",
          completed: false,
        },
    ],
  },
  {
    id: 3,
    title: "JavaScript Logic",
    category: "JavaScript",
    description:
      "Learn the building blocks of programming: variables, conditions, loops, and functions. This course teaches you how to think like a programmer.",
    thumbnail: "https://placehold.co/600x400/171a21/22c55e?text=JavaScript+Logic",
    lessons: [
      {
        id: 1,
        title: "Variables and Data Types",
        duration: "11 min",
        videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
        description:
          "Store numbers, text, and true/false values in variables, and learn when to use let and const.",
          completed: false,
        },
      {
        id: 2,
        title: "If Statements and Comparisons",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
        description:
          "Make your code take different paths with if, else if, and else, using comparison operators.",
          completed: false,
        },
      {
        id: 3,
        title: "Loops",
        duration: "13 min",
        videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
        description:
          "Repeat work automatically with for and while loops instead of copying and pasting code.",
          completed: false,
        },
      {
        id: 4,
        title: "Functions",
        duration: "14 min",
        videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
        description:
          "Wrap reusable steps into functions that take inputs and return outputs.",
          completed: false,
        },
      {
        id: 5,
        title: "Arrays and Objects",
        duration: "16 min",
        videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
        description:
          "Group related values into arrays and objects, the two most important data structures in JavaScript.",
          completed: false, 
        },
      {
        id: 6,
        title: "Working with the DOM",
        duration: "15 min",
        videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
        description:
          "Use JavaScript to find elements on the page, change their text, and react to button clicks.",

        },
    ],
  },
  {
    id: 4,
    title: "JavaScript Projects",
    category: "JavaScript",
    description:
      "Put your JavaScript skills to work by building four small projects: a counter, a to-do list, a quiz game, and a weather card.",
    thumbnail: "https://placehold.co/600x400/171a21/22c55e?text=JavaScript+Projects",
    lessons: [
      {
        id: 1,
        title: "Project Setup and Planning",
        duration: "8 min",
        videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4",
        description:
          "Set up a clean project folder and learn how to break a project idea into small, buildable steps.",
     completed: false,
        },
      {
        id: 2,
        title: "Build a Click Counter",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4",
        description:
          "Build a counter with plus and minus buttons — your first app that responds to user clicks.",
      },
      {
        id: 3,
        title: "Build a To-Do List",
        duration: "18 min",
        videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4",
        description:
          "Create a to-do list where users can add, check off, and delete tasks.",
      completed: false,
        },
      {
        id: 4,
        title: "Build a Quiz Game",
        duration: "20 min",
        videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4",
        description:
          "Build a multiple-choice quiz that keeps score and shows the result at the end.",
      completed: false,
        },
      {
        id: 5,
        title: "Build a Weather Card",
        duration: "16 min",
        videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4",
        description:
          "Display weather information in a styled card and practice updating the page from data.",
      completed: false,
        },
    ],
  },
  {
    id: 5,
    title: "React Fundamentals",
    category: "React",
    description:
      "Learn React, the most popular library for building user interfaces. Understand components, props, state, and how React updates the page for you.",
    thumbnail: "https://placehold.co/600x400/171a21/22c55e?text=React+Fundamentals",
    lessons: [
      {
        id: 1,
        title: "Why React?",
        duration: "9 min",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description:
          "See the problems React solves and how thinking in components makes big apps manageable.",
        completed: false,
      },
      {
        id: 2,
        title: "Components and JSX",
        duration: "13 min",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description:
          "Write your first components with JSX, the HTML-like syntax that lives inside JavaScript.",
        completed: false,
      },
      {
        id: 3,
        title: "Props",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description:
          "Pass data from parent components to child components with props, like arguments to a function.",
        completed: false,
      },
      {
        id: 4,
        title: "State with useState",
        duration: "15 min",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description:
          "Give components memory with the useState hook so the page updates when data changes.",
        completed: false,
      },
      {
        id: 5,
        title: "Rendering Lists",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description:
          "Turn arrays of data into lists of elements with map, and learn why every item needs a key.",
        completed: false,
      },
      {
        id: 6,
        title: "Effects with useEffect",
        duration: "16 min",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        description:
          "Run code after the page renders — like loading saved data — with the useEffect hook.",
        completed: false,
      },
    ],
  },
  {
    id: 6,
    title: "Next.js Essentials",
    category: "React",
    description:
      "Take your React skills further with Next.js. Learn file-based routing, layouts, and how to deploy a real website to the internet.",
    thumbnail: "https://placehold.co/600x400/171a21/22c55e?text=Next.js+Essentials",
    lessons: [
      {
        id: 1,
        title: "What is Next.js?",
        duration: "10 min",
        videoUrl: "https://www.youtube.com/embed/843nec-IvW0",
        description:
          "Learn what Next.js adds on top of React and why so many companies build with it.",
        completed: false,
      },
      {
        id: 2,
        title: "Pages and Routing",
        duration: "13 min",
        videoUrl: "https://www.youtube.com/embed/843nec-IvW0",
        description:
          "Create new pages just by adding files, and link between them with the Link component.",
        completed: false,
      },
      {
        id: 3,
        title: "Layouts and Navigation",
        duration: "12 min",
        videoUrl: "https://www.youtube.com/embed/843nec-IvW0",
        description:
          "Share headers and footers across every page with layout files.",
        completed: false,
      },
      {
        id: 4,
        title: "Dynamic Routes",
        duration: "14 min",
        videoUrl: "https://www.youtube.com/embed/843nec-IvW0",
        description:
          "Build pages like /course/1 and /course/2 from a single file using dynamic route folders.",
        completed: false,
      },
      {
        id: 5,
        title: "Deploying to Vercel",
        duration: "9 min",
        videoUrl: "https://www.youtube.com/embed/843nec-IvW0",
        description:
          "Push your project to GitHub and deploy it to the internet with Vercel in a few clicks.",
        completed: false,
      },
    ],
  },
];
