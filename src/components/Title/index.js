import React, { Component, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo_white.svg'
import Wordmark from '../../assets/wordmark_white.svg'

import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'

import Navigation from "../../assets/Navigation.png"

import Lottie from 'react-lottie'
import animationData from '../../assets/data(8).json'
import zh from "../../assets/CN.png"
import en from "../../assets/EN(2).png"
import i18n from '../../i18n'
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
          width={160}
        />
      </div>
    )
  }
}

const TitleWrapper = styled.div`
  text-decoration: none;
  z-index: 10;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  display: flex;

  margin:10px 0  0 20px;
  :hover {
    opacity: 1;
  }
`

const BasicLink1 = styled(BasicLink)`
@media screen and (max-width: 786px) {
  display: none;
}

`

const BasicLink2 = styled(BasicLink)`
@media screen and (max-width: 786px) {
  display: none;
}

`

const Leftdiv = styled.div`
height: 100vh;
  width:55%;
  position: fixed;
  right:0;
  top:0;
  background-image: linear-gradient(#1a1b21 , #0e0f12);
  box-shadow: -5px 0px 8px  #1a1b21 ;
  >ul{
    padding:0;
    height: 100vh;
    list-style-type: none;
    margin:40px 0 0;
    li{
      // border-bottom:1px solid #eee
      align-items: center
      display: flex;
      margin:10px 0;
      height: 40px;
      >a{
        padding: 6px 47px;;
        color:#fff;
        width:90%;
        font-size:16px;
      }
    }
  }
`
const Languagebox = styled.div`
margin-right: 0.75rem;
font-size: 0.825rem;
font-weight: 500;
display: inline-box;
display: -webkit-inline-box;
opacity: 0.8;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
:hover {
  opacity: 1;
}
a {
  color: ${({ theme }) => theme.white};
}
`

const RightDiv = styled.div`
height: 100vh;
  width:45%;
  position: absolute;
  left:0;
  top:0;
`
const LanguageParent = styled.div`
color:#fff;
  display:flex;
  justify-content;
  margin: 11px 0 0 20px;
`


const Language = styled.p`
color:#fff;
  
  display:flex;
  justify-content;
  align-items: center;
  cursor: pointer;
`
export default function Title() {
  const history = useHistory()
  const below1080 = useMedia('(max-width: 1080px)')
  const { t } = useTranslation()
  const [isVisible, setVisible] = useState(false)
  let [Languagestate, setCount] = useState(false);
  const changeLanguage = (Languagestate) => {
    if (Languagestate) {
      i18n.changeLanguage("zh")
    } else {
      i18n.changeLanguage('en')
    }
    setCount(Languagestate => !Languagestate)
  }
  return (
    <TitleWrapper >
      <Flex alignItems="center" style={{ justifyContent: 'space-between' }}>
        {/* <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'24px'} src={Logo} alt="logo" />
          </UniIcon>
          {!below1080 && (
            <img width={'84px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Wordmark} alt="logo" />
          )}
        </RowFixed> */}
        <UncontrolledLottie></UncontrolledLottie>
        {below1080 && (
          <RowFixed style={{ alignItems: 'flex-end' }}>
            <BasicLink1 to="/home">
              <Option activeText={history.location.pathname === '/home' ?? undefined}>{t('Overview')}</Option>
            </BasicLink1>
            <BasicLink1 to="/tokens">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'tokens' ||
                    history.location.pathname.split('/')[1] === 'token') ??
                  undefined
                }
              >
                {t('Token')}
              </Option>
            </BasicLink1>
            <BasicLink1 to="/pairs">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'pairs' ||
                    history.location.pathname.split('/')[1] === 'pair') ??
                  undefined
                }
              >
                {t('pairs')}
              </Option>
            </BasicLink1>

            <BasicLink1 to="/accounts" >
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'accounts' ||
                    history.location.pathname.split('/')[1] === 'account') ??
                  undefined
                }
              >
                {t('accounts')}
              </Option>
            </BasicLink1>
            <img style={{ width: "30px" }} src={Navigation} onClick={() => { setVisible(!isVisible) }} ></img>
            <Leftdiv style={{
              display: isVisible ? 'block' : 'none'
            }}>
              <div style={{ margin: "35px 0 0" }}>
                <BasicLink to="/home" onClick={() => { setVisible(!isVisible) }}>
                  <Option activeText={history.location.pathname === '/home' ?? undefined}>{t('Overview')}</Option>
                </BasicLink>
                <BasicLink to="/tokens" onClick={() => { setVisible(!isVisible) }}>
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    {t('Token')}
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs" onClick={() => { setVisible(!isVisible) }}>
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    {t('pairs')}
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts" onClick={() => { setVisible(!isVisible) }}>
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    {t('accounts')}
                  </Option>
                </BasicLink>

                <LanguageParent onClick={() => { changeLanguage(Languagestate) }}>
                  {/* <Toggle isActive={isDark} toggle={toggleDarkMode} /> */}
                  <Languagebox>{t('Language')}</Languagebox>
                  <Language>
                    <img src={zh} style={{ width: "22px", display: !Languagestate ? "block" : "none" }}></img>
                    <img src={en} style={{ width: "22px", display: Languagestate ? "block" : "none" }}></img>
                  </Language>
                </LanguageParent>
              </div>


            </Leftdiv>
            <RightDiv onClick={() => { setVisible(!isVisible) }} style={{
              display: isVisible ? 'block' : 'none'
            }} ></RightDiv>
          </RowFixed>

        )}
      </Flex>
    </TitleWrapper >
  )
}
