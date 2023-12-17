const sortExpireAtAsc = {
  sorts: [
    {
      property: 'expireAt',
      direction: 'ascending',
    },
  ],
}

const filterUnUsed = {
  filter: {
    and: [
      {
        property: 'used',
        checkbox: {
          equals: false,
        },
      },
    ],
  },
}

const filterUsed = {
  filter: {
    and: [
      {
        property: 'used',
        checkbox: {
          equals: true,
        },
      },
    ],
  },
}

interface Condition {
  text: string
  conditionBody: string
}

const conditionAll: Condition = {
  text: `전체`,
  conditionBody: JSON.stringify(sortExpireAtAsc),
}

const conditonUnUsed: Condition = {
  text: `미사용 쿠폰`,
  conditionBody: JSON.stringify({
    ...sortExpireAtAsc,
    ...filterUnUsed,
  }),
}

const conditionUsed: Condition = {
  text: `사용 쿠폰`,
  conditionBody: JSON.stringify({
    ...sortExpireAtAsc,
    ...filterUsed,
  }),
}

export type { Condition }
export { conditionAll, conditionUsed, conditonUnUsed }
