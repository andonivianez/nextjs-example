import React from 'react'

export default function PostsLayout({children}) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>

  )
}