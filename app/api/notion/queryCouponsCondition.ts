const sortExpireAtAsc = {
  sorts: [
    {
      property: "expireAt",
      direction: "ascending",
    },
  ],
};

const filterUnUsed = {
  filter: [
    {
      property: "used",
      checkbox: {
        equals: false,
      },
    },
  ],
};

const filterUsed = {
  filter: [
    {
      property: "used",
      checkbox: {
        equals: true,
      },
    },
  ],
};

type Condition = string;

const conditionAll: Condition = JSON.stringify(sortExpireAtAsc);

const conditonUnUsed: Condition = JSON.stringify({
  ...sortExpireAtAsc,
  ...filterUnUsed,
});

const conditionUsed: Condition = JSON.stringify({
  ...sortExpireAtAsc,
  ...filterUsed,
});

export type { Condition };
export { conditionAll, conditionUsed, conditonUnUsed };
