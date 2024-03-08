import ReactDOM from "react-dom/client";
import "./index.css";

interface Experience {
  description: string;
  year: number;
}

interface Cv {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: Cv = {
  photo: `https://placehold.co/400x400`,
  name: "Krystian",
  lastName: "Ostr",
  position: "Developer",
  experience: [
    { description: "Lorem lorem", year: 2000 },
    { description: "Ipsum ipsum", year: 2005 },
  ],
  education: ["firstClass", "secondClass", "thirdClass"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main className="bg-black h-screen">
    <h1 className="text-3xl font-bold ">Hello world!</h1>
  </main>
);
