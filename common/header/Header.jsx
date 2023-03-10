import React from 'react'
import Link from 'next/link'
import { Items, Num, Btn } from './style.header'
import { CART_ACTION_TYPE } from '../../config/action_type'

const Header = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <>
      <header>
        <Items isLoading={isLoading}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Num className="bg-red-600 text-yellow">12</Num>
            <Link href="/shop">shop</Link>
          </li>
        </Items>
      </header>

  

    </>
  )
}
export default Header
