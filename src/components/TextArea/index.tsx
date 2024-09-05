import { useRef } from 'react'
import { pronouns } from "../../data/pronouns"
import './index.scss'

interface Props {
  setWordsCount: (value: number) => void
  setCharactersCount: (value: number) => void
  setSentencesCount: (value: number) => void
  setParagraphsCount: (value: number) => void
  setPronounsCount: (value: number) => void
  setLongestWord: (value: string) => void
}

const TextArea = ({ setWordsCount, setCharactersCount, setSentencesCount, setParagraphsCount, setPronounsCount, setLongestWord }: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextAreaChange = () => {
    const textValue = textAreaRef.current?.value || ""

    const whiteSpaceRegex = /\s+(?=\s*\S)/
    const characterRegex = ""
    const sentenceRegex = /[.?!]+(?=\s*\S)/
    const paragraphBreakRegex = /\r?\n+(?=\s*\S)/
    const pronounRegex = /\s+|[\W_]+/
    const specialCharacterRegex = /[\s,?.!]+/

    const handleCounting = (regex: RegExp | string) => {
      return textValue ? textValue.split(regex).length : 0
    }

    const wordsCountValue = handleCounting(whiteSpaceRegex)
    const charactersCountValue = handleCounting(characterRegex)
    const sentencesCountValue = handleCounting(sentenceRegex)
    const paragraphsCountValue = handleCounting(paragraphBreakRegex)
    const pronounsCountValue = textValue ? textValue.split(pronounRegex).filter(word => pronouns.includes(word.toLowerCase())).length : 0
    const longestWordValue = textValue ? (textValue.split(specialCharacterRegex)).reduce((longestWord: string, currentWord: string) => {
      return currentWord.length > longestWord.length ? currentWord : longestWord
    }) : "-"

    setWordsCount(wordsCountValue)
    setCharactersCount(charactersCountValue)
    setSentencesCount(sentencesCountValue)
    setParagraphsCount(paragraphsCountValue)
    setPronounsCount(pronounsCountValue)
    setLongestWord(longestWordValue)
  }

  return <textarea className="text-area" placeholder="Paste your text here..." autoFocus onChange={handleTextAreaChange} ref={textAreaRef} />
}

export default TextArea
