import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama', 'Comédia'],
        Awards: 2
    },
    {
        Title: 'Alice no Pais das Maravilhas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Ação', 'Comédia'],
        Awards: 3
    },
]


function Chart(){
    return(
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Duração</th>
                                <th>Nota</th>
                                <th>Categorias</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Titulo</th>
                                <th>Duração</th>
                                <th>Nota</th>
                                <th>Categorias</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                tableRowsData.map((row, i) => {
                                    return <ChartRow {...row} key={i} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Chart;