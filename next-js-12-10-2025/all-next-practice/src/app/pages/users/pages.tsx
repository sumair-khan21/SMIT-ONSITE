import React from 'react'

const UsersPage = () => {
    const users = [
    { id: 1, name: 'Alice Johnson', email: 'abc@gmail.com'},
     { id: 2, name: 'Alice Johnson', email: 'abc@gmail.com'},
      { id: 3, name: 'Alice Johnson', email: 'abc@gmail.com'}
    ]
  return (
    <div>
      {
        users.map((user)=>{
            return (
                <div key={user.id} style={{ 
                    border: '2px solid blue', 
                    padding: '20px',
                    marginBottom: '10px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 16px 0 #1e2746cc',
                    background: 'linear-gradient(135deg, #0a0a23 0%, #1e2746 100%)',
                    color: '#b0b8c9'
                  }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 8, color: '#6c8ae4' }}>{user.name}</h2>
                    <p style={{ fontSize: '1.2rem' }}>Email: {user.email}</p>
                  </div>
            )
        })
      }
    </div>
  )
}

export default UsersPage
