import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Component', () => {
  it('renderiza Header, Main y Footer', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /landing/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /¡bienvenido usuario!/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/© 2025 Proyecto 4/i)).toBeInTheDocument()
  })
  it('al clickear se ejecuta el onclick', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /cambiar tema/i })
    const body = document.body

    const backgroundBefore = getComputedStyle(body).backgroundColor

    fireEvent.click(button)

    const backgroundBeAfter = getComputedStyle(body).backgroundColor

    expect(backgroundBefore).not.toBe(backgroundBeAfter)
  })
})
