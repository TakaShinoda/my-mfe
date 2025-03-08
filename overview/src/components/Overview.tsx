import { Badge } from '@radix-ui/themes'

export const Overview = () => {
  return (
    <>
      <div className="ov:bg-muted/30 ov:rounded-lg ov:p-8 ov:flex ov:flex-col ov:items-center ov:justify-center">
        <div className="ov:relative ov:w-64 ov:h-64">
          <img
            src="http://localhost:5000/bulbasaur.png"
            alt="フシギダネ"
            className="ov:object-contain"
          />
        </div>

        <div className="ov:mt-4 ov:text-center">
          <span className="ov:text-lg ov:text-muted-foreground">0001</span>
          <h1 className="ov:text-3xl ov:font-bold ov:capitalize ov:mt-2">
            フシギダネ
          </h1>
          <div className="ov:flex ov:justify-center ov:gap-2 ov:mt-3">
            <Badge color="cyan">くさ</Badge>
            <Badge color="indigo">どく</Badge>
          </div>
        </div>
      </div>
    </>
  )
}
