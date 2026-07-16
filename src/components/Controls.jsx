function Controls({start, pause, reset}) {
	return (
		<>
			<div className="controls gap-4 p-2 flex">
				<button 
					className="bg-green-500 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:bg-green-600 active:scale-95 transition"
					onClick={start}
				>
					Start
				</button>

				<button 
					className="bg-yellow-500 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:bg-yellow-600 active:scale-95 transition"
					onClick={pause}
				>
					Pause
				</button>

				<button 
					className="bg-red-500 text-white font-medium px-4 py-2 rounded-xl shadow-md hover:bg-red-600 active:scale-95 transition"
					onClick={reset}
				>
					Reset
				</button>
			</div>
		</>
	)
}

export default Controls;