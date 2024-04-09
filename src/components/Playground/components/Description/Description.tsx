import React from "react"
import { TypographyHeader, TypographyText } from "../../../UI"

const Description = () => {
  return (
    <div>
      <TypographyHeader>
        <span style={{ fontSize: "25px" }}>React Game</span> description
      </TypographyHeader>
      <TypographyText>
        Player`s goal is to press the keyboard arrow key was shown to him before
        the next one appers.
      </TypographyText>
      <TypographyText>
        After three consecutive successful hits - game win, after three errors -
        lost.
      </TypographyText>
      <img
        style={{ width: "100%", borderRadius: "20px" }}
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmF4d2l5ZWE1dXp5bTV2b2hjdWU4MzdxYzZxb2sxbTQ1ZGV1N3ZjOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5Zesu5VPNGJlm/giphy.gif"
        alt="GIF"
      />
    </div>
  )
}

export default Description
