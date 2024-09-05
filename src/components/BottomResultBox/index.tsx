import './index.scss'

interface Props {
  wordsCount: number
  longestWord: string | undefined
}

const BottomResultBox = ({ wordsCount, longestWord }: Props) => {

  const readingTime = (wordsCount: number) => {
    const time = wordsCount/225
    if (time === 0) {
      return "-"
    }
    if (time > 0 && time < 1) {
      return "~" + 1 + "minute"
    }
    return "~" + Math.ceil(time) + "minutes"
  }

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: readingTime(wordsCount),
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
