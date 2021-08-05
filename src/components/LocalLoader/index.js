import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useDarkModeManager } from '../../contexts/LocalStorage'

import Lottie from 'react-lottie'
import animationData from '../../assets/data(15).json'

class UncontrolledLottie extends Component {


  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
        <Lottie options={defaultOptions}
          width={120}
        />
      </div>
    )
  }
}

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`

const AnimatedImg = styled.div`
  animation: ${pulse} 800ms linear infinite;
  & > * {
    width: 72px;
  }
`

const LocalLoader = ({ fill }) => {
  const [darkMode] = useDarkModeManager()

  return (
    <Wrapper fill={fill}>
      <AnimatedImg>
        <UncontrolledLottie></UncontrolledLottie>
        {/* <img src={require(darkMode ? '../../assets/logo_white.svg' : '../../assets/logo.svg')} alt="loading-icon" /> */}
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader
