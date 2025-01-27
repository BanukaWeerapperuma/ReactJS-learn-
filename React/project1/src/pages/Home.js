import React from 'react'

import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

function Home() {
  return (
    <div>
        <h1>Home page</h1>
        
        <TopicBox food="car" price ="rs 200">
          <span>
            this is car
          </span>
        </TopicBox>
        <TopicBox food="dog" price ='rs 100'>
          <span>
            this is dog
          </span>
        </TopicBox>
        <TopicBox food="cat" price ="rs300">
          <button> this is button </button>
        </TopicBox>
        <Content/>
    </div>
  )
}

export default Home
