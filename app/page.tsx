import Card from '@/components/Card'
import { queryCoupons } from './api/notion/queryCoupons'

export default async function Projects() {
  const couponsResponse = await queryCoupons()
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
            {
              couponsResponse.results.map((result) => (
                <Card
                key={result.id}
                pageId={result.id}
                title={result.properties.name.title[0].plain_text}
                dueDate={result.properties.expireAt.date.start}
                imgSrc={result.properties.image.files[0].file.url}
                href={result.properties.image.files[0].file.url}
                status={result.properties.used.checkbox}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
