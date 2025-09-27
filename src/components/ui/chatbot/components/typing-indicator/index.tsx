import React from 'react'

export const TypingIndicator: React.FC = () => {
  return (
    <div className="mb-4 flex items-center">
      <div className="flex w-fit items-center space-x-0.5 rounded-md bg-gray-100 p-2">
        <div
          className="size-1 animate-pulse rounded-full bg-gray-400"
          style={{ animationDelay: '0ms' }}
        ></div>
        <div
          className="size-1 animate-pulse rounded-full bg-gray-400"
          style={{ animationDelay: '300ms' }}
        ></div>
        <div
          className="size-1 animate-pulse rounded-full bg-gray-400"
          style={{ animationDelay: '600ms' }}
        ></div>
      </div>
    </div>
  )
}
