import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'

const cardsData = [
  {
    id: 1,
    title: 'Branches',
    description:
      'Abstract Branches lets you manage, version, and document your designs in one place.',
  },
  {
    id: 2,
    title: 'Manage your account',
    description:
      'Configure your account settings, such as your email, profile details, and password.',
  },
  {
    id: 3,
    title: 'Manage organizations, teams, and projects',
    description:
      'Use Abstract organizations, teams, and projects to organize your people and your work.',
  },
  {
    id: 4,
    title: 'Manage billing',
    description: 'Change subscriptions and payment details.',
  },
  {
    id: 5,
    title: 'Authenticate to Abstract',
    description:
      'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
  },
  {
    id: 6,
    title: 'Abstract support',
    description: 'Get in touch with a human.',
  },
]

function App() {
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Uncomment the following useEffect to fetch data from the server
  // and comment out the 'cardsData' variable above
  // This is just an example, you should replace the URL with your actual endpoint

  // useEffect(() => {
  //   // Fetch data from server
  //   axios
  //     .get('http://localhost:5000/api/cards') // Replace '/api/cards' with your actual endpoint
  //     .then((response) => setCards(response.data))
  //     .catch((error) => console.error('Error fetching data:', error))
  // }, [])

  // When fetching data from the server, replace 'cardsData' with 'cards?.filter'
  const filteredCards = cardsData?.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Search Section */}
      <div className="p-6 w-full text-center bg-blue-100">
        <h2 className="text-4xl mb-6">How can we help?</h2>
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded border w-72"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {filteredCards.map((card) => (
          <div key={card.id} className="bg-slate-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">{card.title}</h3>
            <hr className="my-4" style={{ borderColor: 'gray' }} />
            <p className="mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App
