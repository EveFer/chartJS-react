import React from 'react';

function RunnerCard ({runnerName, runnerKey, handlerButtonClick}) {

    return (
        <div className="col-12 col-md-6">
            <div className="card">
                <div className="card-header">
                {runnerName}
                </div>
                <div className="card-body">
                <button className='btn btn-primary' data-runner-key={runnerKey} onClick={handlerButtonClick}>Ver Gráfica</button>
            </div>
            </div>
        </div>
    )

}

export default RunnerCard