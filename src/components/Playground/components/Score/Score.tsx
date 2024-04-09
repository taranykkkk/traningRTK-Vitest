import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the 'Consecutive successsful hits' value is reset to zero.
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          label={
            <>
              Errors: <span>{state.totalUnsuccessful}</span>
            </>
          }
        ></Chip>
        <Chip
          className={styles.chipSuccess}
          label={
            <>
              Successful: <span>{state.totalSuccessful}</span>
            </>
          }
        ></Chip>
      </Stack>
    </>
  )
}

export default Score
