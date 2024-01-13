import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`
export const Header = styled.div`
  border: 2px solid white;
  width: 90%;
  max-width: 700px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 12px;
`
export const HeaderInner = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const HeaderInnerScore = styled(HeaderInner)`
  background-color: white;
  color: #223a5f;
  width: 100px;
  border-radius: 12px;
  align-items: center;
`
export const Body = styled.div`
  width: 90%;
  max-width: 700px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ListContainer = styled.ul`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const ItemButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  width: 35%;
  max-width: 300px;
`

export const ImageItem = styled.img`
  width: 100%;
`
export const Rules = styled.div`
  align-self: flex-end;
  margin-top: 20px;
`

export const RulesButton = styled.button`
  outline: none;
  border: none;
  background-color: white;
  color: #223a5f;
  height: 30px;
  width: 120px;
  border-radius: 4px;
  font-weight: bold;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
export const InnerModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  min-width: 350px;
  max-width: 650px;
  background-color: #fff;
  padding: 12px;
`

export const ModalImage = styled.img`
  width: 90%;
`
export const RulesButtonClose = styled(RulesButton)`
  color: white;
  background-color: #223a5f;
  align-self: flex-end;
  margin-bottom: 12px;
  width: 25px;
  height: 25px;
`
export const ResultImage = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ResultText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 38px;
  margin-top: 12px;
`
export const ResultButton = styled(RulesButtonClose)`
  width: fit-content;
  height: fit-content;
  margin-top: 12px;
  align-self: center;
  background-color: #fff;
  color: #223a5f;
  padding: 4px 12px;
`
export const ResultPerson = styled(ResultText)`
  font-size: 18px;
`

export const ScoreText = styled.p`
  font-family: Roboto;
`
export const GameResultView = styled(Body)``
