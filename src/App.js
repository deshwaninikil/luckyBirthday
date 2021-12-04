import { useState } from "react";
import "./App.css";

function App() {
  const [birthdayDate, setBirthdayDate] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [message, setMessage] = useState("");
  var dateString;

  function birthdayDateHandler(e) {
    setBirthdayDate(e.target.value);
  }

  function luckyNumberHandler(e) {
    setLuckyNumber(e.target.value);
  }

  function checkLucky() {
    if (birthdayDate && luckyNumber) {
      dateString = birthdayDate.toString().split("-");
      dateString = dateString.toString().split(",").join("");
      // dateString = dateString.toString().replace(/\,/g, "");
      // var dateInt = Number(dateString);

      var number = dateString,
        sum = 0;
      while (number !== 0) {
        sum += number % 10;
        number = parseInt(number / 10);
      }

      if (sum % luckyNumber === 0) {
        setMessage("You are lucky!Congratulations!");
      } else {
        setMessage("Sorry...Your birthdate is not lucky!");
      }
    } else {
      setMessage("Please enter birth date and lucky number");
    }
  }

  return (
    <div className="App">
      <section className="main-section">
        <h1>is your birthday lucky?</h1>
        <h5>To know please enter your birthdate and luckyNumber</h5>
        <div className="alert">
          Privacy Notice! We are not storing your data
        </div>

        <div className="bday-div">
          <div>
            <label>Enter date</label>
            <input type="date" onChange={birthdayDateHandler} />
          </div>

          <div>
            <label>Enter your lucky Number</label>
            <input type="number" onChange={luckyNumberHandler} />
          </div>

          <button onClick={checkLucky}>Click to check</button>
          <div className="mesaage-txt">{message}</div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-header">Connect with me on</div>
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/deshwaninikil">
              <i className="fab fa-github"></i>
            </a>
          </li>

          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/NDeshwani">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/nikil-deshwani-a77324188/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <p className="copyright">
          Copyright © <span className="copyright-date">2021</span> Nikil Deshwani.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
