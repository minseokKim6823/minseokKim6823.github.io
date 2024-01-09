import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import React from 'react';
// import axios from "axios"
const Head = styled.div`
  display: flex;

  .right-menu{
    position: absolute;
    right: 0px;
    display: flex;
    textDecoration:none;
  }

  button{
    border: none;
    background-color:white;
  }

  a{
    text-decoration: none;
    color:black;
  }
`;
const Header = () => {
  // const [data, setData] = useState(null);
  //   axios.get('http://localhost:8080/api/visitor/count').then(response => {
  //       setData(response.data);});

  return (
    <Head>
      <div class="left-menu">
        <button>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
        </button>
      </div>
      <div class="right-menu">
        <div>
          <button>
            <NavLink to="/Menu1">
              <h2>Menu1</h2>
            </NavLink>
          </button>
        </div>
        <div>
          <button>
            <NavLink to="/Menu2">
              <h2>Menu2</h2>
            </NavLink>
          </button>
        </div>
        <div>
          <button>
            <NavLink to="/SignIn" >
              <h2>SignIn</h2>
            </NavLink>
          </button>
          
        </div>
      </div>
    </Head>
  );
}

export default Header;