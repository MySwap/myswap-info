import React, { useState } from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc } from 'react-feather'
import Link from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'
// import { useTranslatio } from 'react-i18next'
import zh from "../../assets/CN.png"
import en from "../../assets/EN(2).png"

const Wrapper = styled.div`
  height: ${({ isMobile }) => (isMobile ? 'initial' : '100vh')};
  background-color: ${({ theme }) => transparentize(0.4, theme.bg1)};
  color: ${({ theme }) => theme.text1};
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
  /* background-color: #1b1c22; */
  background: linear-gradient(193.68deg, #1b1c22 0.68%, #000000 100.48%);
  color: ${({ theme }) => theme.bg2};

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  display: flex;
  :hover {
    opacity: 1;
  }
`

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 500;
  display: inline-box;
  display: -webkit-inline-box;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
  a {
    color: ${({ theme }) => theme.white};
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

const Polling = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  padding: 1rem;
  color: white;
  opacity: 0.4;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green1};
`
const LanguageParent = styled.div`
color:#fff;
  display:flex;
  justify-content;
`

const Language = styled.p`
color:#fff;
  
  display:flex;
  justify-content;
  align-items: center;
  cursor: pointer;
`
const Motal = styled.ul`

width: 85px;
height: 70px;
  background:#212429;
  margin:0;
  padding:0;
  top: 777px;
  left: 115px;
  position: absolute;
  z-index:99999;
  li{
    color:#fff;
    padding:5px 10px;
    margin:5px 0;
    list-style: none;
    cursor: pointer;
  }
  
`

const Motalmove = styled.div`

  width:95vw;
  height:100vh;
  position: absolute;
  z-index: 9999;
  
`



function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()
  const { t } = useTranslation()

  let [Languagestate, setCount] = useState(false);

  // const [isDark, toggleDarkMode] = useDarkModeManager()

  const changeLanguage = (Languagestate) => {
    if (Languagestate) {
      i18n.changeLanguage("zh")
    } else {
      i18n.changeLanguage('en')
    }
    setCount(Languagestate => !Languagestate)
  }

  // const changeLanguageState = () => {

  //   i18n.changeLanguage(lng)
  // }





  return (
    <Wrapper isMobile={below1080}>
      {/* <Motalmove onClick={changeLanguageState} style={{ display: Languagestate ? "block" : "none" }}></Motalmove> */}
      {!below1080 ? (
        <DesktopWrapper>
          <AutoColumn gap="1rem" style={{ marginLeft: '.75rem', marginTop: '1.5rem' }}>
            <Title />
            {!below1080 && (
              <AutoColumn gap="1.25rem" style={{ marginTop: '0.1rem' }}>
                <BasicLink to="/home">
                  <Option activeText={history.location.pathname === '/home' ?? undefined}>
                    <TrendingUp size={20} style={{ marginRight: '.75rem' }} />
                    {t('Overview')}
                  </Option>
                </BasicLink>
                <BasicLink to="/tokens">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    <Disc size={20} style={{ marginRight: '.75rem' }} />
                    {t('Token')}
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    <PieChart size={20} style={{ marginRight: '.75rem' }} />
                    {t('pairs')}
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    <List size={20} style={{ marginRight: '.75rem' }} />
                    {t('accounts')}
                  </Option>
                </BasicLink>
              </AutoColumn>
            )}
          </AutoColumn>
          <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem' }}>
            <HeaderText>
              <Link href="https://www.myswap.vip/#/" target="_blank">
                myswap.vip
              </Link>
            </HeaderText>
            {/* <HeaderText>
              <Link href="https://v1.uniswap.info" target="_blank">
                V1 Analytics
              </Link>
            </HeaderText> */}
            <HeaderText>
              <Link href="https://docs.myswap.vip/myswap/"
                target="_blank">
                {t('Docs')}
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://myswap-finance.medium.com/" target="_blank">
                Medium
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://t.me/MySwapFinance" target="_blank">
                Telegram
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://twitter.com/MySwapDAO" target="_blank">
                {/* {t('home')} */}
                Twitter
              </Link>
            </HeaderText>
            {/* <Motal style={{ display: Languagestate ? "block" : "none" }}>
              <li value="1" onClick={() => { changeLanguage("zh") }}>中文简体</li>
              <li value="2" onClick={() => { changeLanguage('en') }}>English</li>
            </Motal> */}
            <LanguageParent onClick={() => { changeLanguage(Languagestate) }}>
              {/* <Toggle isActive={isDark} toggle={toggleDarkMode} /> */}
              <Languagebox>{t('Language')}</Languagebox>
              <Language>
                <img src={zh} style={{ width: "22px", display: !Languagestate ? "block" : "none" }}></img>
                <img src={en} style={{ width: "22px", display: Languagestate ? "block" : "none" }}></img>
              </Language>
            </LanguageParent>

          </AutoColumn>
          {!below1180 && (
            <Polling style={{ marginLeft: '.5rem' }}>
              <PollingDot />
              <a href="https://www.myswap.vip/analytics/#/home" style={{ color: 'white' }}>
                <TYPE.small color={'white'}>
                  {t('Updated')} {!!seconds ? seconds + 's' : '-'}{t('ago')} <br />
                  {/* {
                    i18n.language == 'zh-CN'
                      ? [!!seconds ? seconds + 's' : '-'] + t('Updated') + t('ago') : t('Updated') + [!!seconds ? seconds + 's' : '-'] + t('ago')} */}
                </TYPE.small>
              </a>

            </Polling>
          )}

        </DesktopWrapper>
      ) : (
        <MobileWrapper>
          <Title />
        </MobileWrapper>
      )
      }
    </Wrapper >
  )
}

export default withRouter(SideNav)
