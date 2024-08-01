import React from 'react'
import { StatisticCardProps } from '@/components/StatisticCard/type'

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  count,
  diff,
  bgColor,
  textColor,
  isPercentage,
}) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg shadow`}>
      <h2 className={`text-xl font-bold ${textColor}`}>{title}</h2>
      <p className='text-2xl'>
        {count}
        {isPercentage && '%'}
      </p>
      {diff !== undefined && <p className={`text-sm ${textColor}`}>+{diff} today</p>}
    </div>
  )
}

export default StatisticCard
