import { Card } from '@radix-ui/themes'
import { ProgressBar } from './ProgressBar'

export const Stats = () => {
  return (
    <Card>
      <div className="st:pt-6">
        <h2 className="st:text-xl st:font-semibold st:mb-4">ステータス</h2>
        <ProgressBar />
      </div>
    </Card>
  )
}
