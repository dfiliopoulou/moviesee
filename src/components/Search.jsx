import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </FormStyle>
  );
}
export default Search;

const FormStyle = styled.form`
  margin: 30px 20px;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: 1px solid #e8a700;
    background: linear-gradient(35deg, #000000, #313131);
    font-size: 16px;
    padding: 1rem 3rem;
    border-radius: 12px;
    outline: none;
    color: #fff;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #e8a700;
  }
`;
