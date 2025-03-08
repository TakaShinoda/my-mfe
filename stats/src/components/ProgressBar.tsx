import { Progress } from '@radix-ui/themes'

export const ProgressBar = () => {
  const statItems = [
    { name: 'HP', value: 45 },
    { name: 'こうげき', value: 49 },
    { name: 'ぼうぎょ', value: 49 },
    { name: 'とくこう', value: 65 },
    { name: 'とくぼう', value: 65 },
    { name: 'すばやさ', value: 45 },
  ]

  return (
    <div className="st:space-y-4">
      {statItems.map((stat) => (
        <div key={stat.name} className="st:space-y-1">
          <div className="st:flex st:justify-between">
            <span className="st:text-sm st:font-medium">{stat.name}</span>
            <span className="st:text-sm st:text-muted-foreground">
              {stat.value}
            </span>
          </div>
          <Progress
            value={stat.value}
            className="h-2"
            color="indigo"
            highContrast
          />
        </div>
      ))}
    </div>
  )
}
