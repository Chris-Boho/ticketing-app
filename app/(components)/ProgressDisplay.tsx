import React from "react";

type Props = {
	progress: number;
};

export default function ProgressDisplay({ progress }: Props) {
	return (
		<div className="w-full bg-gray-200 rounded-full h-2.5">
			<div
				className="bg-blue-600 h-2.5 rounded-full"
				style={{ width: `${progress}%` }}
			></div>
		</div>
	);
}
