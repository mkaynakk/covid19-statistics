import covidSearch from '@/assets/covid-19-search.svg'

const Loading = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-90 bg-black'>
      <div className='relative flex justify-center items-center'>
        <div className='absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-500'></div>
        <img src={covidSearch} className='rounded-full h-28 w-28 red' />
      </div>
    </div>
  )
}

export default Loading
