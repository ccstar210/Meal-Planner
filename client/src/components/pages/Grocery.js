import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import Header from '../layout/Header';
import AddGroceryItem from '../grocery/AddGroceryItem';
import GroceryList from '../grocery/GroceryList'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getGroceryItems, deleteGroceryItem, updateGroceryItem, addGroceryItem  } from '../../actions/itemGroceryActions';
import PropTypes from 'prop-types';



class Grocery extends Component {
    componentDidMount() {
        this.props.getGroceryItems();
    }
    
    render() {
        const { groceryItems, groceryLoading } = this.props.groceryItem; 
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {/* Sidebar to display suggested items and items in season for the month, items hardcoded for now */}
                        <div className="col-lg-3 secondaryColor text-center">
                            <h2>Suggested Items</h2>
                            <p>Brocolli</p>
                            <p>Plums</p>
                            <h2>In Season for <Moment format ="MMMM">{Date.now()}</Moment></h2>
                            <p>Chard</p>
                            <p>Blueberries</p>
                        </div>
                        <div className="col-lg-9">
                            <Header title="Grocery List" />
                            <div className="w-75 m-auto">
                                <AddGroceryItem addGroceryItem={this.props.addGroceryItem}></AddGroceryItem>
                                {/* set loading feature, when fetching the grocery list */}
                                {groceryLoading ? <div className="d-flex justify-content-center pt-4">
                                <Spinner color="dark" /></div> : 
                                <GroceryList
                                    groceryItems={groceryItems}
                                    updateGroceryItem={this.props.updateGroceryItem}
                                    deleteGroceryItem={this.props.deleteGroceryItem}>
                                </GroceryList> }
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        )
    }  
}

Grocery.propTypes = {
    getGroceryItems: PropTypes.func.isRequired,
    deleteGroceryItem: PropTypes.func.isRequired,
    updateGroceryItem: PropTypes.func.isRequired,
    addGroceryItem: PropTypes.func.isRequired,
    groceryItem: PropTypes.object.isRequired 
}

//set state
const mapStateToProps = state => {
    return {
        groceryItem: state.groceryItem
    }
}

//connect to component with redux
export default connect(
    mapStateToProps, 
    { getGroceryItems, deleteGroceryItem, updateGroceryItem, addGroceryItem  } 
) (Grocery);
