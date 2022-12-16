import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';

/* Criação de objetos para envio do contentRowMovies */

/* <!-- Movies in DB --> */

let moviesInDB = {
	title: 'Movies in Data Base',
	borderColor: 'border-left-primary',
	qtd: 21,
	icon: 'fa-film',
	textColor: 'primary'
}

/* <!-- Total awards --> */

let totalAwards = {
	title: 'Total Awards',
	borderColor: 'border-left-success',
	qtd: 79,
	icon: 'fa-award',
	textColor: 'sucess'
}

/* <!-- Actors Quantity --> */

let actorsQuantity = {
	title: 'Actors Quantity',
	borderColor: 'border-left-warning',
	qtd: 49,
	icon: 'fa-user',
	textColor: 'warning'
}

let mvProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowTop(){
    return (
        <React.Fragment>
            {/*<!-- Content Row Top --> */}
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
			
					<div className="row">
					{
						mvProps.map((mv, i) => 
							<ContentRowMovies dado={mv} key={i}/>					
						)
					}
					</div>
					
	
					{/*<!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
						<LastMovieInDb />

						{/*<!-- Genres in DB --> */}
						<GenresInDb />
					</div>
					<Chart />
				</div>
				{/*<!--End Content Row Top--> */}
        </React.Fragment>
    )
}

export default ContentRowTop;