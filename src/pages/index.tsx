import { useState } from 'react'
import axios from 'axios'

const JokeTeller = () => {
  const [keyword, setKeyword] = useState('')
  const [joke, setJoke] = useState('')

  const handleChange = (event: any) => {
    setKeyword(event.target.value)
  }

  const handleClick = async () => {
    try {
      const response = await axios.post('/api/chatgpt3', { keyword })
      setJoke(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center">Technical Jokes Teller</h1>
      <div className="mt-8">
        <label htmlFor="keyword" className="font-medium text-lg">
          Enter a keyword:
        </label>
        <input
          id="keyword"
          type="text"
          className="w-full mt-2 p-2 rounded border border-gray-300"
          value={keyword}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded"
          onClick={handleClick}
        >
          Get Joke
        </button>
      </div>
      {joke && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p className="font-medium">{joke}</p>
        </div>
      )}
    </div>
  )
}

export default JokeTeller
