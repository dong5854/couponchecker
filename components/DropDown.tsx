'use client'

import { useState, useEffect } from 'react'

const DropDown = ()=> {
    return (
        <details className="dropdown">
            <summary className="m-1 btn">전체</summary>
             <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>전체</a></li>
                <li><a>미사용 쿠폰만</a></li>
                <li><a>사용한 쿠폰만</a></li>
            </ul>
        </details>
    )
}

export default DropDown