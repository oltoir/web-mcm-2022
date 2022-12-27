import { BottomRow, TopRow } from './libs';

export function Header() {
	return (
		<div
			className="bg-white pb-3"
			style={{
				boxShadow: '0 0 10px #e1e1e1',
			}}
		>
			<div
				className="flex flex-col gap-y-1 mx-auto"
				style={{ maxWidth: '1200px' }}
			>
				<TopRow />
				<BottomRow />
			</div>
		</div>
	);
}
