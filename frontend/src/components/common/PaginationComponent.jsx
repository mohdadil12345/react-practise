import React from 'react'

import "../../styles/paginationcomponent.scss"

const PaginationComponent = ({ pageNo,setPageNo,totalPage, setlimit, limit}) => {

    const handle_limit=(e) => {
        setlimit(Number(e.target.value))
        setPageNo(1)

    }

    return (
        <div className='pagination-compo'>

            <div className="btnlist">

                <button disabled={pageNo==1} onClick={() => setPageNo(prev => prev - 1)}>prev</button>
                <p>{pageNo}/{totalPage}</p>
                <button disabled={pageNo==totalPage} onClick={() => setPageNo(prev => prev + 1)}>Next</button>

            </div>

            <div className="limit">

                <select value={limit} name="" id="" onChange={(e) => handle_limit(e)}>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                </select>

            </div>

        </div>
    )
}

export default PaginationComponent