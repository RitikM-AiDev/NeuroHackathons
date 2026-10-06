import { useEffect, useState } from "react";

type Hackathon_Structure = {
  name : string;
  date : string;
  location : string;
  description : string;
  link : string;
  category : string;
};

function App(){
  function showloading(){
    const loading = document.getElementById("loading")
    const content = document.getElementById("content")
    if (loading && content) {                                               
      loading.style.display = "flex";
      content.style.display = "none";
    }
  }
  function hideloading(){
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");
    if (loading && content) {
      loading.style.display = "none";
      content.style.display = "block";
    }
  }
  const [hackathons, setHackathons] = useState<Hackathon_Structure[]>([]);
  useEffect( ()=>{
    
    const getHackathons = async () => {
    try{
      showloading();
      const response = await fetch("http://127.0.0.1:8002/get/all/hackathons");
      const data = await response.json();
      setHackathons(data.hackathons);
      hideloading();
    }
    catch(error){
      console.error("Error fetching hackathons:", error);
      hideloading();
    }
  };
  getHackathons();
    
  },[])
  const [user_email, setUserEmail] = useState<string>("");
  const [user_name, setUserName] = useState<string>("");
  const [hackathons_attended, setHackathonsAttended] = useState<string>("");
  const [selected_category, setSelectedCategory] = useState<string>("All");
  const [search_query, setSearchQuery] = useState<string>("");
  const filteredHackathons = hackathons.filter((hackathon) => {
  if (
    (selected_category === "All" || selected_category === "") &&
    search_query === ""
  ) {
    return true;
  }
  else if (
    selected_category === "All" &&
    hackathon.name.toLowerCase().includes(search_query.toLowerCase())
  ) {
    return true;
  }
  else if (
    hackathon.category.toLowerCase() === selected_category.toLowerCase() &&
    hackathon.name.toLowerCase().includes(search_query.toLowerCase())
  ) {
    return true;
  }
  else if (
    hackathon.category.toLowerCase() === selected_category.toLowerCase() &&
    search_query === ""
  ) {
    return true;
  }
  else if (
    hackathon.name.toLowerCase().includes(search_query.toLowerCase()) &&
    selected_category === ""
  ) {
    return true;
  }
  else {
    return false;
  }
});
  const categories = [
  "All",
  "AI & Machine Learning",
  "Generative AI",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Cybersecurity",
  "Blockchain & Web3",
  "Cloud Computing",
  "IoT",
  "Robotics",
  "AR/VR/XR",
  "Game Development",
  "Healthcare",
  "FinTech",
  "Education",
  "Climate & Sustainability",
  "Agriculture",
  "Space Technology",
  "Smart Cities",
  "Social Impact",
  "Open Source",
  "UI/UX Design",
  "Automotive",
  "Other"
];
  return (
    <div className="App">
      <h1>Welcome to NeuroHackathons - Your Hackathon Finder</h1>
      <div id="loading" className="loading">
          <h1>It may take a moment to load the Hackathons...</h1>
          <div id="spinner" className="spinner"></div>
      </div>
      <div id="content" className="content">
      <div className="category-section">
          {
            categories.map((category, index)=>{
              return(
                <div key={index} className="category-card">
                   <button onClick={(e) => {
                      e.preventDefault();
                      setSelectedCategory(category);
                   }} className={`category-btn ${selected_category === category ? "active" : ""}`}>{category} </button>
                </div>
              )
            })
          }
      </div>
      <div className="filter-section">  
        <input type="text" placeholder="Search hackathons..." onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className="hackathon-list">
          {
            filteredHackathons.map((hackathon, index)=>{
              return(
                <div key={index} className="hackathon-card">
                  <h2>{hackathon.name}</h2>
                  <p><strong>Date:</strong> {hackathon.date}</p>
                  <p><strong>Location:</strong> {hackathon.location}</p>
                  <p><strong>Category:</strong> {hackathon.category}</p>
                  <p>{hackathon.description}</p>
                  <a href={hackathon.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
              )
            })
          } 
      </div>
      </div>
    </div>
  );
}
export default App;
