"use client"

import { useState } from "react"
import { DaisyButton } from "./DaisyButton"
import { LanguageSelector } from "./LanguageSelector"

export default function App() {
  const [isTranslating, setIsTranslating] = useState(false)
  const [inputLanguage, setInputLanguage] = useState("en")
  const [outputLanguage, setOutputLanguage] = useState("es")

  const handleToggleTranslation = () => {
    setIsTranslating(!isTranslating)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#e2eff4" }}>
      {/* Header */}
      <header className="w-full py-1 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <img src="/logo-daisy.svg" alt="Daisy Logo" className="h-64 sm:h-72 lg:h-80 w-auto" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center px-4 sm:px-6 -mt-4">
        <div className="max-w-4xl w-full">
          {/* Mobile Layout - Vertical Stack */}
          <div className="lg:hidden">
            {/* Language Selectors Row */}
            <div className="flex items-center justify-center space-x-8 sm:space-x-12 mb-4">
              <LanguageSelector label="Speak in" value={inputLanguage} onChange={setInputLanguage} />
              <LanguageSelector label="Translate to" value={outputLanguage} onChange={setOutputLanguage} />
            </div>

            {/* Central Daisy Button */}
            <div className="flex flex-col items-center space-y-4">
              <DaisyButton isActive={isTranslating} onToggle={handleToggleTranslation} />
              {isTranslating && (
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Listening...</span>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:flex items-center justify-center space-x-16 xl:space-x-20">
            {/* Input Language */}
            <div className="flex flex-col items-center">
              <LanguageSelector label="Speak in" value={inputLanguage} onChange={setInputLanguage} />
            </div>

            {/* Central Daisy Button */}
            <div className="flex flex-col items-center space-y-4">
              <DaisyButton isActive={isTranslating} onToggle={handleToggleTranslation} />
              {isTranslating && (
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Listening...</span>
                </div>
              )}
            </div>

            {/* Output Language */}
            <div className="flex flex-col items-center">
              <LanguageSelector label="Translate to" value={outputLanguage} onChange={setOutputLanguage} />
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 sm:mt-12 text-center max-w-sm sm:max-w-md mx-auto px-4">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isTranslating
                ? "Speak clearly into your microphone. Translation will begin automatically."
                : "Press the daisy button to start real-time medical translation."}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 sm:py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Designed for healthcare professionals • Secure & HIPAA compliant
          </p>
        </div>
      </footer>
    </div>
  )
}
