import { Progress } from '@radix-ui/themes'

export const PokeStats = () => {
  const statItems = [
    { name: 'HP', value: 45 },
    { name: 'こうげき', value: 49 },
    { name: 'ぼうぎょ', value: 49 },
    { name: 'とくこう', value: 65 },
    { name: 'とくぼう', value: 65 },
    { name: 'すばやさ', value: 45 },
  ]

  return (
    <div className="space-y-4">
      {statItems.map((stat) => (
        <div key={stat.name} className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{stat.name}</span>
            <span className="text-sm text-muted-foreground">{stat.value}</span>
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
