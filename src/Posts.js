import React from 'react'
import { useQuery } from '@apollo/client'
import * as GetPostList from './GetPostList.graphql'
import './App.css'

const API_URL = 'https://uwatch.live'

const Posts = () => {
  const input = { type: 'post', locale: 'en', projectId: '1' }
  const { loading, error, data } = useQuery(GetPostList, { input })

  if (loading) return <div className="status">...Loading</div>
  if (error) return <div className="status">Error!{error.message}</div>

  return (
    <div className="posts">
      <div className="container">
        <h1 className="logo">1988</h1>
        <div className="posts-wrapper">
          {data.posts.items.map((item) => (
            <div className="post" key={item.id}>
              <div className="post-lay">
                <img src={`${API_URL}${item.thumbnail}`} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts
