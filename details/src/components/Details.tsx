import { Card } from '@radix-ui/themes'

export const Details = () => {
  return (
    <Card>
      <div className="de:pt-6">
        <h2 className="de:text-xl de:font-semibold de:mb-4">詳細</h2>
        <dl className="de:grid de:grid-cols-2 de:gap-4">
          <div>
            <dt className="de:text-sm de:font-medium de:text-muted-foreground">
              高さ
            </dt>
            <dd>0.5 m</dd>
          </div>
          <div>
            <dt className="de:text-sm de:font-medium de:text-muted-foreground">
              重さ
            </dt>
            <dd>0.9 kg</dd>
          </div>
          <div>
            <dt className="de:text-sm de:font-medium de:text-muted-foreground">
              分類
            </dt>
            <dd className="de:capitalize">モンスター</dd>
          </div>
          <div>
            <dt className="de:text-sm de:font-medium de:text-muted-foreground">
              特性
            </dt>
            <dd>カラフル</dd>
          </div>
        </dl>
      </div>
    </Card>
  )
}
