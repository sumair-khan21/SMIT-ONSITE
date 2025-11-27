import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [editId, setEditId] = useState(null)

    // fetch todos
    const fetchtodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/getTodos')
            const data = await response.json()
            console.log(data.todos)
            setTodos(data.todos || [])
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchtodos()
    }, [])

    // add todo and add validation
    const addTodo = async () => {
        try {
            if (!title || !description) {
                alert('Please enter a title and description')
                return
            }
            const response = await fetch('http://localhost:3000/addTodo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            })
            const data = await response.json()
            console.log(data)
            setTitle('')
            setDescription('')
            fetchtodos()
        } catch (error) {
            console.log(error)
        }
    }


    // update todo and add validation
    const updateTodo = async () => {
        try {
            if (!title || !description) {
                alert('Please enter a title and description')
                return
            }
            const response = await fetch(`http://localhost:3000/updateTodo/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            })
            const data = await response.json()
            console.log(data)
            setEditId(null)
            setTitle('')
            setDescription('')
            fetchtodos()
        } catch (error) {
            console.log(error)
        }
    }

    // delete todo
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/deleteTodo/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(data)
            fetchtodos()
        } catch (error) {
            console.log(error)
        }
    }

    // toggle complete
    const toggleComplete = async (todo) => {
        console.log('Toggling todo:', todo)
        try {
            const newStatus = todo.status === 'completed' ? 'pending' : 'completed'
            const response = await fetch(`http://localhost:3000/updateTodo/${todo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    title: todo.title, 
                    description: todo.description, 
                    status: newStatus 
                })
            })
            const data = await response.json()
            console.log(data)
            fetchtodos()
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (todo) => {
        setEditId(todo.id)
        setTitle(todo.title)
        setDescription(todo.description)
    }


    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5, 
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, x: -20 }
    }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 ring-1 ring-black/5">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 px-8 py-12 text-white relative overflow-hidden">
                <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-sm">My Tasks</h1>
                    <p className="mt-3 text-indigo-100 text-xl font-medium opacity-90">Manage your day efficiently.</p>
                </motion.div>
                
                {/* Decorative animated circles */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-900 opacity-20 blur-3xl"
                />
            </div>

            {/* Input Section */}
            <div className="p-8 border-b border-gray-100 bg-gray-50/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-4 md:space-y-0 md:flex md:gap-4">
                        <motion.input 
                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What needs to be done?" 
                            className="w-full md:w-1/2 px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white shadow-sm text-gray-700 placeholder-gray-400 text-lg"
                        />
                        <motion.input 
                            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                            type="text" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add details (optional)" 
                            className="w-full md:w-1/2 px-5 py-4 rounded-2xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white shadow-sm text-gray-700 placeholder-gray-400 text-lg"
                        />
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={editId ? updateTodo : addTodo}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 cursor-pointer text-lg"
                    >
                        {editId ? (
                            <>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                Update
                            </>
                        ) : (
                            <>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                Add
                            </>
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Todo List */}
            <div className="bg-white min-h-[400px] relative">
                {todos.length === 0 ? (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full py-24 text-center"
                    >
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-inner"
                        >
                            <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900">No tasks found</h3>
                        <p className="text-gray-500 mt-2 max-w-xs mx-auto text-lg">Your list is empty. Add a new task above to get started.</p>
                    </motion.div>
                ) : (
                    <ul className="divide-y divide-gray-100">
                        <AnimatePresence>
                            {todos.map((todo) => (
                                <motion.li 
                                    key={todo.id}
                                    variants={itemVariants}
                                    layout
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={`group hover:bg-indigo-50/30 transition-colors duration-200 ${todo.status === 'completed' ? 'opacity-75' : ''}`}
                                >
                                    <div className="p-6 flex items-start gap-5">
                                        <div className="pt-1">
                                            <motion.button 
                                                whileHover={{ scale: 1.1, borderColor: "#6366f1" }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => toggleComplete(todo)}
                                                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-indigo-200 cursor-pointer ${todo.status === 'completed' ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-300 text-transparent hover:text-indigo-600'}`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            </motion.button>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors truncate ${todo.status === 'completed' ? 'line-through text-gray-500' : ''}`}>{todo.title}</h3>
                                            {todo.description && <p className={`text-gray-500 mt-1 text-base leading-relaxed ${todo.status === 'completed' ? 'line-through opacity-70' : ''}`}>{todo.description}</p>}
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <motion.button 
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleEdit(todo)}
                                                className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-xl transition-all cursor-pointer" 
                                                title="Edit"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </motion.button>
                                            <motion.button 
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => deleteTodo(todo.id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-100 rounded-xl transition-all cursor-pointer" 
                                                title="Delete"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                )}
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center">
                <span className="font-medium">{todos.length} {todos.length === 1 ? 'task' : 'tasks'} remaining</span>
                <div className="flex gap-4">
                    {['All', 'Active', 'Completed'].map((filter) => (
                        <motion.button 
                            key={filter}
                            whileHover={{ scale: 1.05, color: "#4f46e5" }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-indigo-600 transition-colors cursor-pointer font-medium"
                        >
                            {filter}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Todo