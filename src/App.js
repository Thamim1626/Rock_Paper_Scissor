import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameItem from './Components/GameItem'
import {
  MainContainer,
  GameResultView,
  Header,
  HeaderInner,
  HeaderInnerScore,
  Body,
  ItemButton,
  ListContainer,
  ScoreText,
  ImageItem,
  Rules,
  ModalContainer,
  ModalImage,
  InnerModelContainer,
  RulesButton,
  RulesButtonClose,
  ResultImage,
  ResultText,
  ResultButton,
  ResultPerson,
} from './styleComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    myItem: choicesList[0].id,
    opponentItem: choicesList[0].id,
    isScoreBoard: false,
    score: 0,
    result: 'WIN',
  }

  scoreIncrease = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  scoreDecrease = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  onClickToHome = () => {
    this.setState({isScoreBoard: false})
  }

  randomCall = id => {
    const idSeparate = choicesList.map(eachItem => eachItem.id)
    const randomNumber = Math.ceil(Math.random() * 3)
    const finalRandomid = idSeparate[randomNumber - 1]
    this.setState({opponentItem: finalRandomid}, this.switchWhichMe)
  }

  switchWhichMe = () => {
    const {myItem} = this.state
    switch (myItem) {
      case 'ROCK':
        this.findRock(myItem)
        break
      case 'SCISSORS':
        this.findScissors(myItem)
        break

      default:
        this.findPaper(myItem)
        break
    }
  }

  findRock = id => {
    const {opponentItem} = this.state
    let result
    switch (opponentItem) {
      case 'SCISSORS':
        result = 'YOU WON'
        this.scoreIncrease()

        break
      case 'PAPER':
        result = 'YOU LOSE'
        this.scoreDecrease()
        break

      default:
        result = 'IT IS DRAW'
    }
    this.setState({result})
  }

  findScissors = id => {
    const {opponentItem} = this.state
    let result
    switch (opponentItem) {
      case 'SCISSORS':
        result = 'IT IS DRAW'
        break
      case 'PAPER':
        result = 'YOU WON'
        this.scoreIncrease()
        break

      default:
        result = 'YOU LOSE'
        this.scoreDecrease()
        break
    }
    this.setState({result}, this.renderScoreHome)
  }

  findPaper = id => {
    const {opponentItem} = this.state
    let result
    switch (opponentItem) {
      case 'SCISSORS':
        result = 'YOU LOSE'
        this.scoreIncrease()
        break
      case 'PAPER':
        result = 'IT IS DRAW'
        break

      default:
        result = 'YOU WON'
        this.scoreDecrease()

        this.setState({result})
    }
  }

  itemClickOnClick = id => {
    this.setState({myItem: id, isScoreBoard: true})

    this.randomCall(id)
  }

  renderHomeBody = () => {
    const {score} = this.state
    return (
      <Body>
        <ListContainer>
          {choicesList.map(eachItem => (
            <GameItem
              key={eachItem.id}
              itemClickOnClick={this.itemClickOnClick}
              eachItem={eachItem}
            />
          ))}
        </ListContainer>
        <Rules>
          <Popup
            trigger={<RulesButton className="button">Rules </RulesButton>}
            modal
            nested
          >
            {close => (
              <ModalContainer>
                <InnerModelContainer>
                  <RulesButtonClose
                    className="button"
                    onClick={() => {
                      close()
                    }}
                  >
                    <RiCloseLine />
                  </RulesButtonClose>
                  <ModalImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </InnerModelContainer>
              </ModalContainer>
            )}
          </Popup>
        </Rules>
      </Body>
    )
  }

  renderScoreHome = () => {
    const {myItem, opponentItem, result} = this.state
    const getMyImageUrl = choicesList.filter(eachItem => myItem === eachItem.id)
    const getoppoImageUrl = choicesList.filter(
      eachItem => opponentItem === eachItem.id,
    )
    const myImageUrl = getMyImageUrl[0].imageUrl
    const oppoImageUrl = getoppoImageUrl[0].imageUrl

    return (
      <GameResultView>
        <ResultImage>
          <ListContainer>
            <ItemButton>
              <ResultPerson>YOU</ResultPerson>
              <ImageItem src={myImageUrl} alt="your choice" />
            </ItemButton>
            <ItemButton>
              <ResultPerson>OPPONENT</ResultPerson>
              {/* Display the opponent's choice image */}
              <ImageItem src={oppoImageUrl} alt="opponent choice" />
            </ItemButton>
          </ListContainer>
        </ResultImage>
        <ResultText>{result}</ResultText>
        <ResultButton onClick={this.onClickToHome}>PLAY AGAIN</ResultButton>
        <Rules>
          <Rules>
            <Popup
              trigger={<RulesButton className="button">Rules </RulesButton>}
              modal
              nested
            >
              {close => (
                <ModalContainer>
                  <InnerModelContainer>
                    <RulesButtonClose
                      className="button"
                      onClick={() => {
                        close()
                      }}
                    >
                      <RiCloseLine />
                    </RulesButtonClose>
                    <ModalImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </InnerModelContainer>
                </ModalContainer>
              )}
            </Popup>
          </Rules>
        </Rules>
      </GameResultView>
    )
  }

  render() {
    const {isScoreBoard, score} = this.state
    return (
      <MainContainer>
        <h1>Rock Paper Scissors</h1>
        <Header>
          <HeaderInner>
            <h1>Stone</h1>
            <h1>Paper</h1>
            <h1>Sessior</h1>
          </HeaderInner>
          <HeaderInnerScore>
            <ScoreText>Score</ScoreText>
            <ScoreText>{score}</ScoreText>
          </HeaderInnerScore>
        </Header>

        {isScoreBoard ? this.renderScoreHome() : this.renderHomeBody()}
      </MainContainer>
    )
  }
}

export default App
