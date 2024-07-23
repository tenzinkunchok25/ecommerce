'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useCart } from '../../_providers/Cart'

import classes from './index.module.scss'

export const CartLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props
  const { cart } = useCart()
  const [length, setLength] = useState<number>()

  useEffect(() => {
    setLength(cart?.items?.length || 0)
  }, [cart])

  return (
    <Link className={[classes.cartLink, className].filter(Boolean).join(' ')} href="/cart">
      <Fragment>
      <Image
            className={classes.logo}
            src="/assets/icons/cart.svg" 
            alt="Payload Logo" 
            width={20} 
            height={20} 
          /> 
        {typeof length === 'number' && length > 0 && (
          <small className={classes.quantity}>({length})</small>
        )}
      </Fragment>
    </Link>
  )
}
