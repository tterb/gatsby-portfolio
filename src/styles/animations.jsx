import styled, { keyframes, css } from 'styled-components'


const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`
export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

const glitch = keyframes`
  0%   { clip: rect( 31px, 9999px,  94px, 0) }
  10%  { clip: rect(112px, 9999px, 156px, 0) }
  20%  { clip: rect( 65px, 9999px,  77px, 0) }
  30%  { clip: rect(257px, 9999px, 290px, 0) }
  40%  { clip: rect( 64px, 9999px, 138px, 0) }
  50%  { clip: rect( 31px, 9999px,  55px, 0) }
  60%  { clip: rect( 59px, 9999px,  84px, 0) }
  70%  { clip: rect( 34px, 9999px, 115px, 0) }
  80%  { clip: rect(193px, 9999px, 276px, 0) }
  90%  { clip: rect( 98px, 9999px, 129px, 0) }
  100% { clip: rect(202px, 9999px, 284px, 0) }
`
export const glitchAnimation = length => css`
  animation: ${glitch} ${length} infinite linear alternate-reverse;
`

const glitchHover = keyframes`
  0%  { transform: translate(0) }
  20% {
    transform: translate(-5px, 5px);
    transform: skewX(10deg);
  }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px) }
  80% { transform: translate(5px, -5px) }
  to  { transform: translate(0) }
`
export const glitchHoverAnimation = (length, delay, option) => css`
  animation: ${glitchHover} ${length} ${delay} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${option} both infinite;
`
