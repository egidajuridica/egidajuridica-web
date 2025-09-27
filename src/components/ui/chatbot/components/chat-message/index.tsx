import React from 'react'
import type { ChatMessageProps } from '../../types'

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, props }) => {
  const isBot = message.sender === 'bot'
  function getFormattedTime(): string {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }
  return (
    <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="flex flex-col">
          <p className={`mb-2 text-xs text-gray-500 ${isBot ? 'text-left' : 'text-right'}`}>
            {isBot ? '' : `${props.you}`} {getFormattedTime()}
          </p>
          {isBot ? (
            <div
              dangerouslySetInnerHTML={{ __html: message.content }}
              className={`whitespace-pre-line rounded-bl-md rounded-br-md rounded-tr-md bg-gray-100 px-2 py-2 text-sm text-gray-600`}
            ></div>
          ) : (
            <div
              className={`whitespace-pre-line rounded-bl-md rounded-br-md rounded-tl-md bg-gray-900 px-2 py-2 text-sm text-white`}
            >
              {message.content}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
