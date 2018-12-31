import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.div`
  margin-left: 2rem;
  position: relative;
  padding: 2rem;
  a {
    padding: 0.5rem 1rem;
    color: white;
    font-weight: 600;
    font-family: ${props => props.theme.fontDisplay};
    font-size: 3.2rem;
    text-decoration: none;
    .javascript {
      color: ${props => props.theme.orange};
    }
  }
  @media screen and (max-width: 1350px) {
    margin: 0;
    text-align: center;
    a {
      padding: 0.25rem 0;
      font-size: 2.7rem;
      margin: 0.1rem;
      padding: 0.1rem;
    }
  }
  @media screen and (max-width: 700px) {
    a {
      font-size: 2.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    a {
      padding: 0;
      font-size: 2rem;
    }
  }
`;

const StyleHeader = styled.header`
  .bar {
    z-index: 5;
    border-bottom: 2px solid ${props => props.theme.orange};
    display: inline-block;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background: black;
    @media (max-width: 1350px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .short-text {
    display: none;
  }
  @media (max-width: 1350px) {
    .short-text {
      display: inline-block;
    }
    .full-text {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .bar {
    }
  }
`;

const Header = () => (
  <StyleHeader>
    <div className="bar">
      <Logo>
        <Link href="/contact">
          <a>
            <span className="full-text">
              Full Stack <span className="javascript">JavaScript</span>{" "}
              Developer
            </span>
            <span className="short-text">
              <span className="javascript">JavaScript</span> Developer
            </span>
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyleHeader>
);

export default Header;
