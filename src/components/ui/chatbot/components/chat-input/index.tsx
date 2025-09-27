import React, { useState } from 'react'
import type { ChatInputProps } from '../../types'

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [input, setInput] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSendMessage(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-transparent p-4">
      <div className="flex items-center border border-gray-300 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribir mensaje..."
          className="flex-1 px-2 py-1 text-sm outline-none"
          disabled={disabled}
        />
        <button
          type="submit"
          className={`p-2 ${
            input.trim() && !disabled ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'
          }`}
          disabled={!input.trim() || disabled}
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </form>
  )
}
