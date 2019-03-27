import React from 'react'
import './FilterableList.css'
import ListItem from '../ListItem/ListItem'

class FilterableList extends React.Component {
    render() {
        //create vars searchTerm and filterOption so we don't have to type in this.props a zillion times
        const { searchTerm, filterOption } = this.props

        //use .filter to iterate over file values we got from props, keep files that match filter criteria - file name contains searchTerm and file status is equal to the filterOption OR the filterOption is 'all'
        //then map over the files we kept, creating a new instance of ListItem for each file
        const list = this.props.files
            .filter(file => file.name.includes(searchTerm)
                && (filterOption === 'all' || file.status === filterOption))
            .map((file, id) => <ListItem {...file} id={id} />)

        return(
            <div className="FilterableList">
                {list}
            </div>
        )
    }
}

export default FilterableList