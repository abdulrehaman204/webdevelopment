import React from 'react'
import { AuthProvider } from './AuthContext'
import Main from './Main'

function A() {
  return (
    <AuthProvider>
        <Main/>
    </AuthProvider>

  )
}

export default A
