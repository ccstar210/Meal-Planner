import React, { Component } from 'react';
import { 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Spinner
 } from 'reactstrap';
import AddInventoryItemModal from './AddInventoryItemModal';
import InventorySearch from './InventorySearch';
import InventoryList from './InventoryList';
import { connect } from 'react-redux';
import { getPantryItems, addPantryItem, deletePantryItem, updatePantryItem, searchPantryItems } from '../../actions/itemPantryActions';
import { getFridgeItems, addFridgeItem, deleteFridgeItem, updateFridgeItem, searchFridgeItems } from '../../actions/itemFridgeActions';
import { getFreezerItems, addFreezerItem, deleteFreezerItem, updateFreezerItem, searchFreezerItems } from '../../actions/itemFreezerActions';
import PropTypes from 'prop-types';



class InventoryTabs extends Component {
    state = {
        activeTab: '1'
    }

    componentDidMount() {
        this.props.getPantryItems();
        this.props.getFridgeItems();
        this.props.getFreezerItems();
    }

    /**
     * Sets the state to the correct tab based on the tab number selected
     * @param   {String} tab The selected tab number (1=Pantry, 2=Fridge, 3=Freezer)
     */
    toggle = tab => {
        if( this.state.activeTab !== tab) {
            this.setState( {
                activeTab: tab
            });
        }   
    }

    render() {
        const { pantryItems, pantryLoading } = this.props.pantryItem; 
        const { fridgeItems, fridgeLoading } = this.props.fridgeItem; 
        const { freezerItems, freezerLoading } = this.props.freezerItem; 

        return (
            <div className="container">
                <Nav tabs>
                    <NavItem className="tabs">
                        {/* Pantry is activeTab 1 */}
                        <NavLink onClick={() => {this.toggle('1')}} >Pantry</NavLink>
                    </NavItem>
                    <NavItem className="tabs">
                        {/* Fridge is activeTab 2 */}
                        <NavLink onClick={() => { this.toggle('2')}}>Fridge</NavLink>
                    </NavItem>
                    <NavItem className="tabs">
                        {/* Freezer is activeTab 3 */}
                        <NavLink onClick={() => {this.toggle('3')}} >Freezer</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane key="1" tabId="1">
                        <div className="row mt-4">
                            <div className="col-md-4 d-flex justify-content-center"><AddInventoryItemModal addInventoryItem={this.props.addPantryItem} inventoryType="Add to pantry" /></div>
                            <div className="col-md-8">
                                <InventorySearch
                                    placeHolderMsg="Search for an item in pantry..."
                                    searchInventoryItems={this.props.searchPantryItems}>
                                </InventorySearch>
                            </div>
                        </div>

                        {/* set loading feature, when fetching the inventoryItems */}
                        {pantryLoading ? <div className="d-flex justify-content-center pt-4">
                            <Spinner color="dark" /></div> : 
                            <InventoryList 
                                inventoryItems={pantryItems} 
                                deleteInventoryItem={this.props.deletePantryItem} 
                                updateInventoryItem={this.props.updatePantryItem} 
                                inventoryType="Update pantry item">
                            </InventoryList> }
                    </TabPane>

                    <TabPane key="2" tabId="2">
                        <div className="row mt-4">
                            <div className="col-md-4 d-flex justify-content-center"><AddInventoryItemModal addInventoryItem={this.props.addFridgeItem} inventoryType="Add to fridge" /></div>
                            <div className="col-md-8">
                                    <InventorySearch 
                                        placeHolderMsg="Search for an item in fridge..."
                                        searchInventoryItems={this.props.searchFridgeItems}>
                                    </InventorySearch>
                            </div>

                            {/* set loading feature, when fetching the inventoryItems */}
                            {fridgeLoading ? <div className="d-flex justify-content-center pt-4">
                                <Spinner color="dark" /></div> : 
                                <InventoryList 
                                    inventoryItems={fridgeItems} 
                                    deleteInventoryItem={this.props.deleteFridgeItem}
                                    updateInventoryItem={this.props.updateFridgeItem}
                                    inventoryType="Update fridge item">
                                </InventoryList> }
                        </div>
                    </TabPane>

                    <TabPane key="3" tabId="3">
                        <div className="row mt-4">
                            <div className="col-md-4 d-flex justify-content-center" ><AddInventoryItemModal addInventoryItem={this.props.addFreezerItem} inventoryType="Add to freezer" /></div>
                            <div className="col-md-8">
                                <InventorySearch 
                                    placeHolderMsg="Search for an item in freezer..."
                                    searchInventoryItems={this.props.searchFreezerItems}>
                                </InventorySearch>
                            </div>
                        </div>
                        
                        {/* set loading feature, when fetching the inventoryItems */}
                        {freezerLoading ? <div className="d-flex justify-content-center pt-4">
                            <Spinner color="dark" /></div> : 
                            <InventoryList 
                                inventoryItems={freezerItems} 
                                deleteInventoryItem={this.props.deleteFreezerItem}
                                updateInventoryItem={this.props.updateFreezerItem}
                                inventoryType="Update freezer item">
                            </InventoryList> }

                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

InventoryTabs.propTypes = {
    getPantryItems: PropTypes.func.isRequired,
    pantryItem: PropTypes.object.isRequired,
    getFridgeItems: PropTypes.func.isRequired,
    fridgeItem: PropTypes.object.isRequired,
    getFreezerItems: PropTypes.func.isRequired,
    freezerItem: PropTypes.object.isRequired 
}

const mapStateToProps = (state) => ({
        pantryItem: state.pantryItem,
        fridgeItem: state.fridgeItem,
        freezerItem: state.freezerItem 
    }
)

export default connect(
    mapStateToProps, 
    {   getPantryItems, addPantryItem, deletePantryItem, updatePantryItem, searchPantryItems, 
        getFridgeItems, addFridgeItem, deleteFridgeItem, updateFridgeItem, searchFridgeItems,
        getFreezerItems, addFreezerItem, deleteFreezerItem, updateFreezerItem, searchFreezerItems
    }
) (InventoryTabs);




    
