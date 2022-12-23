/**
 * Created by JingHongGang on 2022/12/16.
 */
import React from 'react'

function getSize() {
  return window.innerWidth > 1000 ? "lager" : "small"
}

export default function () {
  const [size, setSize] = React.useState(getSize())
}