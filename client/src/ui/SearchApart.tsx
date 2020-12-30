import React, { useEffect, useRef, useState } from 'react'
import SearchUrl from '../image/icon/btn_search.svg'
import SearchList from './SearchList'

interface iProps {
  setKeyword: Function
  keyword?: string
}

function useOutsideAlerter(ref: any, setKeyword: Function) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setKeyword('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

function SearchApart() {
  let [keyword, setKeyword] = useState<string>('')
  let wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setKeyword)

  return (
    <div ref={wrapperRef} className="SearchApart">
      <div className="SearchInput">
        <input
          type="text"
          placeholder="아파트 이름"
          onChange={(e) => {
            setKeyword(e.target.value)
          }}

          value={keyword}
        />
        <img src={SearchUrl} alt="Search Icon" />
      </div>
      <SearchList keyword={keyword} />
    </div>
  )
}

export default SearchApart
