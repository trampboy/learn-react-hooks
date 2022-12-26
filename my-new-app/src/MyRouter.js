import _ from 'lodash'
import {useHash} from 'react-use'
import React from 'react'

/**
 * Created by JingHongGang on 2022/12/26.
 */
export default function MyRouter({children}) {
  const props = children.map((child) => {
    return child.props
  })
  const routes = _.keyBy(props, 'path')
  const [hash] = useHash()
  const Page = routes[hash.replace('#', '')]?.component
  return Page ? <Page/> : `Not Found.`
}