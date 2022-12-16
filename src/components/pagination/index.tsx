// node_modules
import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";

// props type
type Props = {
    allPagesNumber: number;
    pageChange: (page: number) => void;
};

const PaginationComponent: React.FC<Props> = ({
    allPagesNumber,
    pageChange,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        pageChange(currentPage);
    }, [currentPage, pageChange]);

    useEffect(() => {
        if (currentPage > allPagesNumber) {
            setCurrentPage(allPagesNumber ? allPagesNumber : 1);
        }
    }, [allPagesNumber, setCurrentPage, currentPage]);

    const onFirstPage = (): void => {
        setCurrentPage(1);
    };

    const onLastPage = (): void => {
        setCurrentPage(allPagesNumber);
    };

    const onNextPage = (): void => {
        setCurrentPage(currentPage + 1);
    };

    const onPreviousPage = (): void => {
        setCurrentPage(currentPage - 1);
    };

    const getPageNumbers = () => {
        if (allPagesNumber < 5) {
            return Array.from(Array(allPagesNumber + 1).keys()).slice(1);
        } else if (currentPage <= 4) {
            return [1, 2, 3, 4, 5];
        } else if (currentPage > allPagesNumber - 4) {
            return Array.from(Array(5).keys()).reverse()
                .map(v => allPagesNumber - v);
        } else {
            return [currentPage -1, currentPage,
                currentPage + 1];
        }
    }
    
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Button disabled={currentPage <= 1} onClick={() => onFirstPage()}>
                First
            </Button>
            <Button
                disabled={currentPage <= 1}
                onClick={() => onPreviousPage()}
            >
                Previous
            </Button>
            <Box className="pagination-btns">
                { currentPage > 4 &&
                    <React.Fragment>
                        <button className="btn btn-secondary mx-1"
                            onClick={ () => setCurrentPage(1)}>1</button>
                        <span className="h4">...</span>
                    </React.Fragment>
                }
                { getPageNumbers().map(num =>
                    <button className={ `btn mx-1 ${num === currentPage
                        ? "btn-primary": "btn-secondary"}`}
                        onClick={ () => setCurrentPage(num)} key={ num }>
                        { num }
                    </button>)}
                { currentPage <= (allPagesNumber - 4) &&
                    <React.Fragment>
                        <span className="h4">...</span>
                        <button className="btn btn-secondary mx-1"
                            onClick={ () => setCurrentPage(allPagesNumber)}>
                            { allPagesNumber }
                        </button>
                    </React.Fragment>
                }
            </Box>
            <Button
                disabled={currentPage >= allPagesNumber}
                onClick={() => onNextPage()}
            >
                Next
            </Button>
            <Button
                disabled={currentPage >= allPagesNumber}
                onClick={() => onLastPage()}
            >
                Last
            </Button>
        </Box>
    );
};

export default PaginationComponent;
