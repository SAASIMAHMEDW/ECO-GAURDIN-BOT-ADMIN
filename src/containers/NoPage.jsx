import React from "react";
import styled from "styled-components";

const NoPage = () => {
  return (
    <StyledWrapper>
      <div className="main_wrapper">
        <div className="main">
          <div className="antenna">
            <div className="antenna_shadow" />
            <div className="a1" />
            <div className="a1d" />
            <div className="a2" />
            <div className="a2d" />
            <div className="a_base" />
          </div>
          <div className="tv">
            <div className="cruve">
              <svg
                xmlSpace="preserve"
                viewBox="0 0 189.929 189.929"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="curve_svg"
              >
                <path
                  d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                />
              </svg>
            </div>
            <div className="display_div">
              <div className="screen_out">
                <div className="screen_out1">
                  <div className="screen">
                    <span className="notfound_text"> NOT FOUND</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lines">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
            <div className="buttons_div">
              <div className="b1">
                <div />
              </div>
              <div className="b2" />
              <div className="speakers">
                <div className="g1">
                  <div className="g11" />
                  <div className="g12" />
                  <div className="g13" />
                </div>
                <div className="g" />
                <div className="g" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="base1" />
            <div className="base2" />
            <div className="base3" />
          </div>
        </div>
        <div className="text_404">
          <div className="text_4041">4</div>
          <div className="text_4042">0</div>
          <div className="text_4043">4</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Make the component take full width and height */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .main_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Existing styles for components */
  .antenna {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #f27405;
    margin-bottom: -6em;
    margin-left: 0em;
    z-index: -1;
  }
  .antenna_shadow {
    position: absolute;
    background-color: transparent;
    width: 50px;
    height: 56px;
    margin-left: 1.68em;
    border-radius: 45%;
    transform: rotate(140deg);
    border: 4px solid transparent;
    box-shadow:
      inset 0px 16px #a85103,
      inset 0px 16px 1px 1px #a85103;
    -moz-box-shadow:
      inset 0px 16px #a85103,
      inset 0px 16px 1px 1px #a85103;
  }
  .antenna::after {
    content: "";
    position: absolute;
    margin-top: -9.4em;
    margin-left: 0.4em;
    transform: rotate(-25deg);
    width: 1em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .antenna::before {
    content: "";
    position: absolute;
    margin-top: 0.2em;
    margin-left: 1.25em;
    transform: rotate(-20deg);
    width: 1.5em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .a1 {
    position: relative;
    top: -102%;
    left: -130%;
    width: 12em;
    height: 5.5em;
    border-radius: 50px;
    background-image: linear-gradient(
      #171717,
      #171717,
      #353535,
      #353535,
      #171717
    );
    transform: rotate(-29deg);
    clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
  }
  .a1d {
    position: relative;
    top: -211%;
    left: -35%;
    transform: rotate(45deg);
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }
  .a2 {
    position: relative;
    top: -210%;
    left: -10%;
    width: 12em;
    height: 4em;
    border-radius: 50px;
    background-color: #171717;
    background-image: linear-gradient(
      #171717,
      #171717,
      #353535,
      #353535,
      #171717
    );
    margin-right: 5em;
    clip-path: polygon(
      47% 0,
      47% 0,
      34% 34%,
      54% 25%,
      32% 100%,
      29% 96%,
      49% 32%,
      30% 38%
    );
    transform: rotate(-8deg);
  }
  .a2d {
    position: relative;
    top: -294%;
    left: 94%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }

  .notfound_text {
    background-color: black;
    padding-left: 0.3em;
    padding-right: 0.3em;
    font-size: 0.75em;
    color: white;
    letter-spacing: 0;
    border-radius: 5px;
    z-index: 10;
  }

  .tv {
    width: 17em;
    height: 9em;
    margin-top: 3em;
    border-radius: 15px;
    background-color: #d36604;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2em #e69635;
  }
  .tv::after {
    content: "";
    position: absolute;
    width: 17em;
    height: 9em;
    border-radius: 15px;
    background:
      repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px
        2500px,
      repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px
        2500px;
    background-blend-mode: difference;
    opacity: 0.09;
  }

  .curve_svg {
    position: absolute;
    margin-top: 0.25em;
    margin-left: -0.25em;
    height: 12px;
    width: 12px;
  }

  .display_div {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 3.5px 3.5px 0px #e69635;
  }
  .screen_out {
    width: auto;
    height: auto;
    border-radius: 10px;
  }
  .screen_out1 {
    width: 11em;
    height: 7.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  .screen {
    width: 13em;
    height: 7.85em;
    font-family: Montserrat;
    border: 2px solid #1d0e01;
    background:
      repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px
        2500px,
      repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px
        2500px;
    background-blend-mode: difference;
    animation: b 0.2s infinite alternate;
    border-radius: 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
  }
  @keyframes b {
    100% {
      background-position:
        50% 0,
        60% 50%;
    }
  }

  .lines {
    display: flex;
    column-gap: 0.1em;
    align-self: flex-end;
  }
  .line1,
  .line3 {
    width: 2px;
    height: 0.5em;
    background-color: black;
    border-radius: 25px;
  }
  .line2 {
    width: 2px;
    height: 1em;
    background-color: black;
    border-radius: 25px;
  }

  .buttons_div {
    display: flex;
    align-items: center;
    margin-top: 0.8em;
  }

  .b1,
  .b2 {
    width: 1em;
    height: 1em;
    margin: 0 1.5em;
    background-color: #313131;
    border-radius: 50%;
    position: relative;
    z-index: 99;
  }

  .b2 {
    background-color: #2f2f2f;
  }

  .speakers {
    display: flex;
    flex-direction: column;
    row-gap: 0.2em;
  }
  .g1,
  .g {
    display: flex;
    flex-direction: column;
    gap: 0.1em;
  }
  .g1 {
    margin-right: 0.6em;
  }
  .g1 div,
  .g div {
    width: 0.25em;
    height: 0.3em;
    background-color: black;
    border-radius: 10%;
  }

  .bottom {
    display: flex;
    margin-top: 2em;
    column-gap: 0.4em;
    justify-content: center;
  }

  .base1,
  .base2,
  .base3 {
    width: 2em;
    height: 1em;
    background-color: black;
    border-radius: 10%;
  }

  .text_404 {
    display: flex;
    font-weight: 700;
    color: black;
    font-size: 15em;
    text-align: center;
  }

  .text_4041,
  .text_4042,
  .text_4043 {
    display: inline-block;
    position: relative;
    z-index: 5;
  }
`;

export default NoPage;