'use client'

import { useState, useEffect } from 'react'

const useTypewriter = (phrases: string[], typingSpeed = 200, pause = 1500) => {
	const [text, setText] = useState('')
	const [index, setIndex] = useState(0)
	const [subIndex, setSubIndex] = useState(0)
	const [forward, setForward] = useState(true)

	useEffect(() => {
		if (phrases.length === 0) return

		let timeout: NodeJS.Timeout

		if (forward) {
			if (subIndex < phrases[index].length) {
				timeout = setTimeout(() => {
					setText(phrases[index].slice(0, subIndex + 1))
					setSubIndex(prev => prev + 1)
				}, typingSpeed)
			} else {
				timeout = setTimeout(() => setForward(false), pause)
			}
		} else {
			if (subIndex > 0) {
				timeout = setTimeout(() => {
					setText(phrases[index].slice(0, subIndex - 1))
					setSubIndex(prev => prev - 1)
				}, typingSpeed / 2)
			} else {
				setForward(true)
				setIndex(prev => (prev + 1) % phrases.length)
			}
		}

		return () => clearTimeout(timeout)
	}, [subIndex, forward, index, phrases, typingSpeed, pause])

	return text
}

export default useTypewriter
