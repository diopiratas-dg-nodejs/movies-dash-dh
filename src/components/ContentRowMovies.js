import React from 'react';
import propTypes from 'prop-types';

function ContentRowMovies(props){
    return(
        <React.Fragment>
            {/*<!-- Content Row Movies--> */}			            
            <div className="col-md-4 mb-4">                
                <div className={"card " +  props.dado.borderColor + " shadow h-100 py-2"}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={"text-xs font-weight-bold text-" + props.dado.textColor + " text-uppercase mb-1"}>{props.dado.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.dado.qtd}</div>
                            </div>
                            <div className="col-auto">
                                <i className={"fas " + props.dado.icon +" fa-2x text-gray-300"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- End movies in Data Base --> */}
        </React.Fragment>
    )
}

ContentRowMovies.propTypes = { 
    dado: propTypes.shape({
        title: propTypes.string.isRequired,
        icon: propTypes.string.isRequired,
        qtd: propTypes.number.isRequired,
        textColor: propTypes.string.isRequired,  
        borderColor: (
            propTypes.string.isRequired,
            propTypes.oneOf(['border-left-primary', 'border-left-success', 'border-left-warning'])
        )
    }).isRequired    
}

ContentRowMovies.defaultProps = {
    title: 'Star',
    icon: 'fa-film',
    qtd: 9,
    borderColor: 'border-left-success',
    textColor: 'success'
}

export default ContentRowMovies;