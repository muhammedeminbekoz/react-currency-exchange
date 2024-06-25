/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function Currency() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(3);
    setResult(result);
  };

  return (
    <div>
      <div className="currency-div">
        <div
          style={{
            marginTop: "-20px",
            backgroundColor: "black",
            fontFamily: "arial",
            color: "white",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3>Currency Exchange Application</h3>
        </div>

        <div style={{ marginTop: "25px" }}>
          <input
            type="number"
            className="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            onChange={(e) => {
              setFromCurrency(e.target.value);
            }}
            className="from-currency-option"
          >
            <option>USD</option>
            <option>TRY</option>
            <option>EUR</option>
          </select>
          <FaRegArrowAltCircleRight style={{ fontSize: "25px", marginRight: "10px" }} />
          <select
            className="to-currency-option"
            onChange={(e) => {
              setToCurrency(e.target.value);
            }}
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input type="number" className="result" value={result} />
        </div>
        <div>
          <button className="exchange-button" onClick={exchange}>
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
