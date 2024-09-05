import './index.scss'

interface Props {
  wordsCount: number
  charactersCount: number
  sentencesCount: number
  paragraphsCount: number
  pronounsCount: number
}

const ResultBox = ({ wordsCount, charactersCount, sentencesCount, paragraphsCount, pronounsCount }: Props) => {
  const resultBar = [
    {
      title: 'Words',
      value: wordsCount,
    },
    {
      title: 'Characters',
      value: charactersCount,
    },
    {
      title: 'Sentences',
      value: sentencesCount,
    },
    {
      title: 'Paragraphs ',
      value: paragraphsCount,
    },
    {
      title: 'Pronouns',
      value: pronounsCount,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
