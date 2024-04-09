import React from "react"
import { TypographyText } from "../../../../../UI"
export interface IResultMessageProps {
  isSuccessEndGame: boolean
}
const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props
  return isSuccessEndGame ? (
    <TypographyText>
      Congratulations!
      <br />
      You Win
    </TypographyText>
  ) : (
    <TypographyText>
      My regrets.
      <br />
      You Lose
    </TypographyText>
  )
}

export default ResultMessage
