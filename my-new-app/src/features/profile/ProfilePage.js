/**
 * Created by JingHongGang on 2022/12/26.
 */
import React, {useState, Suspense} from 'react'
import Loadable from 'react-loadable'

function Loading({error}) {
  return error ? 'Failed' : 'Loading...'
}

const HelloLazyLoad = Loadable({
  loader: () => import('./RealProfilePage'),
  loading: Loading
})

export default function () {
  return <HelloLazyLoad />
}