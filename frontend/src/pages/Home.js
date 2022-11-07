import { useEffect, useState } from "react"


const Home = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/tools')
      const json = await response.json()
      // to get an array of objet
      if (response.ok) {
        setItems(json)
      }
    }
    // fire a function 
    fetchItems()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {/* chcecking are there any item and if so map them */}
        {items && items.map(item => (
          <p key={item._id}>{ item.title }</p>
        ))}
      </div>
    </div>
  )
}

export default Home
