import React from 'react'
import SearchContents from './searchContent/searchContents'
import searchassestsStyle from './searchassests.module.css'
export default function searchassests() {
  return (
    <div className={searchassestsStyle.container}>
<SearchContents/>
    </div>
  )
}
