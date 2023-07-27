import CheckOut from '../components/CheckOut/CheckOut'
import { CheckOutProvider } from '../components/CheckOut/CheckOutContext'
// import { CheckOutProvider } from '../Context/CheckOutContext'

export const CheckOutPage = () => {
  return (
    <CheckOutProvider>
        <CheckOut />
      </CheckOutProvider>
  )
}
