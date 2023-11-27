import Card from '@/components/Card'

export default function Projects() {
  const dummyData = [
    {
      title: '스타벅스 쿠폰',
      description: `XX은행에서 발급받은 쿠폰`,
      imgSrc: 'https://i.namu.wiki/i/9p8OVxJTce_f2HnuZF1QOU6qMSHqXBHdkcx3q_hlGxvhcyaOXKxBVyoDkeg-Cb4Nx2p60W0AUh6RzjAH59vHwQ.svg',
      href: 'https://namu.wiki/w/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4',
    },
    {
      title: '투썸플레이스 쿠폰',
      description: `XX대학교 행사`,
      imgSrc: 'https://i.namu.wiki/i/0m7UBgRqRjORses_DJGH-I47-etuhyyHEMsvW9K722NR4KQSaXvqBE94utIr7COkdvqiiFAm3jgYBT2Qejt9FA.svg',
      href: 'https://namu.wiki/w/%ED%88%AC%EC%8D%B8%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4',
    },
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            쿠폰함
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            쿠폰의 사용을 체크하세요.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {dummyData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
