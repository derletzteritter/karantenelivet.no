import React from 'react';

const Header: React.FC = () => {
	return (
		<div className="p-2 justify-between flex-wrap">
			<div className="flex items-center justify-between flex-no-shrink">
				<div>
					<h1 className="text-white font-medium text-2xl">Karantene Livet</h1>
				</div>
				<div className="flex">
					<h3 className="mr-3 text-white">Informasjon</h3>
					<h3 className="text-white">Retningslinjer</h3>
				</div>
			</div>
		</div>
	)
}

export default Header;