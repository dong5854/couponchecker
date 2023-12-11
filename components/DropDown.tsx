'use client'

const DropDown = () => {
  return (
    <details className="dropdown">
      <summary className="btn m-1">전체</summary>
      <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <a>전체</a>
        </li>
        <li>
          <a>미사용 쿠폰</a>
        </li>
        <li>
          <a>사용한 쿠폰</a>
        </li>
      </ul>
    </details>
  )
}

export default DropDown
