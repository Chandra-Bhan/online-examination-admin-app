import logo from "./logo.svg";
import "./App.css";
import AdminPage from "./pages/adminpage/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/studentpage/StudentPage";
import LoginPage from "./pages/loginpage/LoginPage";
import AdminLogin from "./pages/adminlogin/AdminLogin";
import { useEffect } from "react";

function App() {
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];
  const qna = [
    {
      id: "2023-05-07T14:31:01.902",
      question: "Everything in React is a _____________      ",
      option1: "Module",
      option2: "Component",
      option3: "Package",
      option4: "Class",
      rightAns: "2",
      image:
        "https://www.freecodecamp.org/news/content/images/2022/02/react-interview-questions-1.png",
    },
    {
      id: "2023-05-07T14:31:",
      question: "What is Babel?",
      option1: "A transpiler.",
      option2: "An interpreter",
      option3: "A Compiler",
      option4: "Both Compiler and Transpilar",
      rightAns: "4",
      image: "https://i.ytimg.com/vi/39ZiaKb1bSA/maxresdefault.jpg",
    },
    {
      id: "2023-05-07T14:31:01.9",
      question: "How many elements does a react component return?",
      option1: "1 Element",
      option2: "2 Elements",
      option3: "Multiple Elements",
      option4: "None of the above",
      rightAns: "3",
      image:
        "https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/336/original/What_are_keys_in_React.png?1640091613",
    },
    {
      id: "2023-05-07T14:31:01.",
      question: "What is ReactJS?",
      option1: "Server-side Framework",
      option2: "User-interface framework",
      option3: "A Library for building interaction interfaces",
      option4: "None of the Above",
      rightAns: "3",
      image:
        "https://static.javatpoint.com/interview/images/react-interview-questions4.png",
    },
  ];

  localStorage.setItem("questions", JSON.stringify([...qna]));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
