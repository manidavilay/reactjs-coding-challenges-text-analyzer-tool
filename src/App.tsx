import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [wordsCount, setWordsCount] = useState<number>(0);
  const [charactersCount, setCharactersCount] = useState<number>(0);
  const [sentencesCount, setSentencesCount] = useState<number>(0);
  const [paragraphsCount, setParagraphsCount] = useState<number>(0);
  const [pronounsCount, setPronounsCount] = useState<number>(0);
  const [longestWord, setLongestWord] = useState<string>("-");

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox wordsCount={wordsCount} charactersCount={charactersCount} sentencesCount={sentencesCount} paragraphsCount={paragraphsCount} pronounsCount={pronounsCount} />
          <TextArea setWordsCount={setWordsCount} setCharactersCount={setCharactersCount} setSentencesCount={setSentencesCount} setParagraphsCount={setParagraphsCount} setPronounsCount={setPronounsCount} setLongestWord={setLongestWord} />
          <BottomResultBox wordsCount={wordsCount} longestWord={longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
