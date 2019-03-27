import React from 'react'
import './FilterOptions.css'

class FilterOptions extends React.Component {
    render() {
        //so we don't have to keep typing this.props
        const { filterOption } = this.props
        return(
            <div className="FilterOptions">
                <div className="FilterOptions-option">
                    <label htmlFor="filter-all">
                        <input 
                            type="radio"
                            value="all"
                            id="filter-all"
                            name="filter" 
                            checked={filterOption === 'all'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}  
                        />
                        All
                    </label>
                </div>
                <div className="FilterOptions-option">
                    <label htmlFor="filter-uploaded">
                        <input 
                            type="radio"
                            value="uploaded"
                            id="filter-uploaded"
                            name="filter" 
                            checked={filterOption === 'uploaded'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}  
                        />
                        Uploaded
                    </label>
                </div>
                <div className="FilterOptions-option">
                    <label htmlFor="filter-synced">
                        <input 
                            type="radio"
                            value="synced"
                            id="filter-synched"
                            name="filter"
                            checked={filterOption === 'synched'}
                            onChange={e => this.props.handleFilterChange(e.target.value)}  
                        />
                        Synched
                    </label>
                </div>
                <div className="FilterOptions-option">
                    <label htmlFor="filter-new">
                        <input 
                            type="radio"
                            value="new"
                            id="filter-new"
                            name="filter" 
                            checked={filterOption === 'new'}  
                            onChange={e => this.props.handleFilterChange(e.target.value)}  
                        />
                        New
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions