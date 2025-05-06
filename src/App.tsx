import './App.css'
import { SearchBox } from './components/atoms/SearchBox/SearchBox'
import { useState } from 'react'

function App() {
  type Article = {
    id: number,
    title: string,
    date: string,
    label: string
  }

  const [searchTerm, setSearchTerm] = useState("")

  const articleArray: Article[] = [
    { id: 1, date: new Date("2018-10-09").toString(), title: "Lorem ipsum dolor sit amet", label: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back" },
    { id: 2, date: new Date("2019-05-15").toString(), title: "consectetuer adipiscing elit", label: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. " },
    { id: 3, date: new Date("2020-03-22").toString(), title: "Lorem ipsum dolor sit amet", label: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" },
    { id: 4, date: new Date("2021-12-01").toString(), title: "Lorem ipsum dolor sit amet", label: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " },
  ]

  // Finds the first match of the search word and highlights it with a yellow background.
  const highlightText = (text: string) => {
    const search = searchTerm.trim()
    if (!search) return text

    const index = text.toLowerCase().indexOf(search.toLowerCase())
    if (index === -1) return text

    const before = text.slice(0, index)
    const match = text.slice(index, index + search.length)
    const after = text.slice(index + search.length)

    return (
      <>
        {before}
        <span className="bg-yellow-300">{match}</span>
        {after}
      </>
    )
  }

  const formatedDate = (date: any) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    })
  }

  const filteredArticles = articleArray.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    formatedDate(article.date).toLowerCase().includes(searchTerm.toLowerCase()) 
  )

  return (
    <div className='bg-gray-200 p-[2%] flex flex-col gap-[50px] min-h-screen'>
      <div className='text-2xl font-black'>Search</div>
      <SearchBox value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      {filteredArticles.map((value) => (
        <div key={value.id} className='border-b-gray-300 border-b-solid border-b-2 pb-10 gap-5 flex flex-col'>
          <div className='text-xl font-black'>{highlightText(value.title)}</div>
          <div>{highlightText(formatedDate(value.date))}</div>
          <div>{highlightText(value.label)}</div>
        </div>
      ))}
    </div>
  )
}

export default App
