import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'http://127.0.0.1:8000/api/students/'

function App() {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')

  const loadStudents = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Could not load students')
      const data = await response.json()
      setStudents(data)
    } catch {
      setMessage('Unable to connect to the backend.')
    }
  }

  useEffect(() => {
    loadStudents()
  }, [])

  const resetForm = () => {
    setName('')
    setEmail('')
    setCourse('')
    setEditingId(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const student = { name, email, course }

    try {
      const response = await fetch(
        editingId ? `${API_URL}${editingId}/` : API_URL,
        {
          method: editingId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(student),
        }
      )

      if (!response.ok) throw new Error('Save failed')

      setMessage(editingId ? 'Student updated!' : 'Student added!')
      resetForm()
      loadStudents()
    } catch {
      setMessage('Unable to save student. Please try again.')
    }
  }

  const handleEdit = (student) => {
    setName(student.name)
    setEmail(student.email)
    setCourse(student.course)
    setEditingId(student.id)
    setMessage('')
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return

    try {
      const response = await fetch(`${API_URL}${id}/`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Delete failed')

      setMessage('Student deleted!')
      loadStudents()
    } catch {
      setMessage('Unable to delete student.')
    }
  }

  return (
    <main className="container">
      <header className="header">
        <h1>Student Management System</h1>
        <p>Manage student records in one place</p>
      </header>

      <section className="form-card">
        <h2>{editingId ? 'Update Student' : 'Add New Student'}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />

          <button type="submit">
            {editingId ? 'Update Student' : 'Add Student'}
          </button>

          {editingId && (
            <button type="button" className="cancel-btn" onClick={resetForm}>
              Cancel
            </button>
          )}
        </form>

        {message && <p className="message">{message}</p>}
      </section>

      <section className="table-card">
        <h2>Student Records</h2>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>
                    <button onClick={() => handleEdit(student)}>Edit</button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td colSpan="5">No student records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default App