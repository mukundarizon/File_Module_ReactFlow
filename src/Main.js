import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaFolderPlus,
  FaLock,
  FaUserCircle,
  FaBuffer,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import firebaseDb from "./firebase";

const Main = ({ handleToggleSidebar }) => {
  const [charts, setCharts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebaseDb.child("charts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setIsLoading(false);
        setCharts({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const deleteFile = (file) => {
    if (window.confirm("Are you sure to delete this file")) {
      firebaseDb.child(`charts/${file}`).remove();
    }
  };
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // useEffect(() => {
  //   Object.keys(charts).map((id) => {
  //     if (charts[id].name.includes(searchTerm)) {
  //       console.log(charts[id].name);
  //     }
  //   });
  //   // const results = asArray.filter((chart) => chart.name.includes(searchTerm));
  //   // setSearchResults(results);
  //   // console.log(searchResults);
  // }, [searchTerm]);

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <div
          style={{
            padding: "20px 24px",
          }}
        >
          <Link
            to="/flow-chart"
            className="link add-project"
            style={{ textDecoration: "none", borderRadius: "5px" }}
          >
            <FaFolderPlus />
            <span className="add"> New Project</span>
          </Link>
          <Link
            to="/new-node"
            className="link add-node"
            style={{
              textDecoration: "none",
              marginLeft: "20px",
              borderRadius: "5px",
            }}
          >
            <FaBuffer />
            <span className="add"> Add Custom Node</span>
          </Link>
        </div>
        {/* <div className="right">
          <input
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={handleChange}
          />
        </div> */}
      </header>
      <div className="main-content">
        {isLoading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
        {Object.keys(charts).map((id) => {
          var d = new Date(charts[id].date);
          return (
            <div className="main-content-list" key={id}>
              <div className="title">
                <Link
                  to={{
                    pathname: "/edit",
                    state: `${charts[id].values}`,
                    id: `${id}`,
                    name: `${charts[id].name}`,
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>
                    <FaLock style={{ color: "#ff7a00" }} />
                    <span>{charts[id].name}</span>
                  </h2>
                </Link>
              </div>
              <div className="content">
                <div className="author">
                  <FaUserCircle style={{ color: "#000" }} />
                  <span className="name">mukund.shridaran</span>
                  <span className="date">
                    - updated on {`${d.toDateString()}`}
                  </span>
                </div>
                <button
                  onClick={() => deleteFile(id)}
                  className="delete main-delete"
                >
                  Delete
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <footer>
        <small>Copyright @ 2021 Arizon Systems</small>
      </footer>
    </main>
  );
};

export default Main;
