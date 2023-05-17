import React from 'react'
import './pagePagination.css'

const PagePagination = ({pageNum, currentPage, changePage}) => {

    const pageNumbers = [...Array(pageNum).keys()].map(num=>++num)
    const siblingCount = 1;
    const pageThreshold = 4;

  if(currentPage < 4) {
    return (
      <nav className='ram_pagination-container'>
        <ul>
        {
          pageNumbers.map((number, index)=>{
            if (index < pageThreshold) {
              return(
                <li>
                  <button type='button' onClick={()=>{changePage(number)}}>
                    {number}
                  </button>
                </li>
              )
            }
            })
        }
        <li>...</li>
        <li>
          <button type='button' onClick={()=>{changePage(pageNum)}}>
            {pageNum}
          </button>
        </li>
        </ul>
      </nav>
    )
  }

  if(currentPage >= 4 && currentPage < pageNum - 1) {
    return (
      <nav className='ram_pagination-container'>
        <ul>
          <li>
          <button type='button' onClick={()=>{changePage(1)}}>
            1
          </button>
          </li>
          <li>...</li>
        {
          pageNumbers.map((number, index)=>{
            if (currentPage-1 === number || currentPage === number || currentPage+1 === number) {
              return(
                <li>
                  <button type='button' onClick={()=>{changePage(number)}}>
                    {number}
                  </button>
                </li>
              )
            }
            })
        }
        <li>...</li>
        <li>
          <button type='button' onClick={()=>{changePage(pageNum)}}>
            {pageNum}
          </button>
        </li>
        </ul>
      </nav>
    )
  }

  if(currentPage >= pageNum-1) {
    return (
      <nav className='ram_pagination-container'>
        <ul>
          <li>
          <button type='button' onClick={()=>{changePage(1)}}>
            1
          </button>
          </li>
          <li>...</li>
        {
          pageNumbers.map((number, index)=>{
            if (currentPage-1 === number || currentPage === number || currentPage+1 === number) {
              return(
                <li>
                  <button type='button' onClick={()=>{changePage(number)}}>
                    {number}
                  </button>
                </li>
              )
            }
            })
        }
        </ul>
      </nav>
    )
  }

}

export default PagePagination
