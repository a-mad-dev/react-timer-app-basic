import { useState, useEffect } from 'react';
import Controls from './Controls'

function Timer() {
	const duration = 1500;
	const [isRunning, setIsRunning] = useState(false);
	const [timeLeft, setTimeLeft] = useState(duration);
	

	function startTimer() {
		setIsRunning(true);
	}

	function pauseTimer() {
		setIsRunning(false);
	}

	function resetTimer() {
		pauseTimer();
		setTimeLeft(duration);
	}

	useEffect(() => {
		if (!isRunning) return;
		const interval = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(interval);

	}, [isRunning]);

	return (
		<>
			<div className="timer flex flex-col justify-evenly items-center bg-white rounded-3xl h-[50%] w-[90%] sm:w-[60%] md:w-[40%] lg:w-[20%] min-w-80 shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-8">

				<div className="timer-screen flex justify-center items-center bg-gray-100 rounded-2xl w-56 h-28 text-5xl font-bold text-gray-800 shadow-inner">
					{formatTime(timeLeft)}
				</div>

				<Controls start={startTimer} pause={pauseTimer} reset={resetTimer}/>
			</div>
		</>
	)
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${minutes}:${String(secs).padStart(2, "0")}`;
}


export default Timer;