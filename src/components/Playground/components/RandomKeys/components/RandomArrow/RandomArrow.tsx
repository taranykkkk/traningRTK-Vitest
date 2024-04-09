import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"
import cn from "classnames"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrow.module.css"

const RandomArrow = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandpmKeys = (elem: IPlaygroundStepsState): string => {
    if (elem.success && elem.success !== null) {
      return cn(styles.iconSuccess, stylesCommon.icon)
    }
    if (!elem.success && elem.success !== null) {
      return cn(styles.iconUnsuccess, stylesCommon.icon)
    }

    return stylesCommon.icon
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((elem) => (
        <span className={getStylesRandpmKeys(elem)} key={elem.step}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrow
