import * as Style from './style'

interface Prop {
    Route: () => void
}

const ReturnPage = ({Route}: Prop) => {
  return (
    <Style.BackIcon onClick={Route} />
  )
}

export default ReturnPage