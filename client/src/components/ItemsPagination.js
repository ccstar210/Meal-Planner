import React from 'react';
import { Pagination, 
         PaginationItem, 
         PaginationLink 
} from 'reactstrap';


const ItemsPagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <Pagination className="mt-4 d-flex justify-content-center" >
            <PaginationItem>
                <PaginationLink className="text-dark" first onClick={() => paginate(1)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink className="text-dark" previous onClick={() => currentPage > 1 ? paginate( currentPage - 1) : paginate(1)} />
            </PaginationItem>
            {pageNumbers.map(number => (
                <PaginationItem key={number}>
                <PaginationLink className="text-dark" onClick={() => paginate(number)}>
                {number}
                </PaginationLink>
            </PaginationItem>
            ))}
            
            <PaginationItem>
                <PaginationLink className="text-dark" next onClick={() => currentPage < pageNumbers.length ? paginate( currentPage + 1) : paginate(pageNumbers.length)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink className="text-dark" last onClick={() => paginate(pageNumbers.length)} />
            </PaginationItem>
        </Pagination>  
    )
}


export default ItemsPagination;