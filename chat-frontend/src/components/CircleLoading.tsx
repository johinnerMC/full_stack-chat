import "./style.css";
export const CircleLoading = () => {
	return (
		<main className="h-screen bg-[#1e1e1e] overflow-hidden flex items-center justify-center">
			<div className="h-[200px] w-[200px] relative">
				<div id="spinner" className="h-full flex items-center justify-center">
					<span className="absolute border-[5px] border-transparent rounded-full animate-spin w-full h-full" />
					<span className="absolute border-[5px] border-transparent rounded-full animate-spin h-3/4 w-3/4" />
					<span className="absolute border-[5px] border-transparent rounded-full animate-spin w-1/2 h-1/2" />
				</div>
			</div>
		</main>
	);
};
