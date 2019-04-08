import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft, KeyboardArrowRight } from 'styled-icons/material';

const PaginationCenter = styled.div`
  justify-content: center;
  display: flex;
  font-size: 1rem;
  line-height: 1;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const PaginationFirst = styled.div`
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationLast = styled.div`
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationPrevious = styled.div`
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationNext = styled.div`
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PreviousArrow = styled(KeyboardArrowLeft)`
  width: 30px;
  height: 30px;
  opacity: .6;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const NextArrow = styled(KeyboardArrowRight)`
  width: 30px;
  height: 30px;
  opacity: .6;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationItem = styled.div`
  font-size: 1rem;
  margin-left: .25rem;
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationCurrent = styled.div`
  margin-left: .25rem;
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #ff7547;
  border: 1px solid #ff7547;

`;

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      // pagesArray: currentPage <= 3 ? [1, 2, 3, 4, 5] : [e.currentTarget.textContent - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2],
      pagesArray: [1, 2, 3, 4, 5],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const pageClicked = parseInt(e.currentTarget.textContent, 10);
    console.log('page clicked:', pageClicked);
    console.log('state is:', this.state);
    this.setState({
      currentPage: pageClicked,
      pagesArray: pageClicked <= 3 ? [1, 2, 3, 4, 5] : [pageClicked - 2, pageClicked - 1, pageClicked, pageClicked + 1, pageClicked + 2],
    });
  }

  render() {
    const { handleClickReviewsPanel } = this.props;
    const { pagesArray, currentPage } = this.state;
    return (
      <div className="row-container">
        <div className="small-12 columns">
          <div className="intro">
            <p>
              current page is
              {currentPage}
            </p>
            <PaginationCenter>
              <PaginationFirst>First</PaginationFirst>

              <PaginationPrevious>
                <PreviousArrow />
              </PaginationPrevious>
              {
                pagesArray.map((pageNumber) => {
                  if (currentPage === pageNumber) {
                    return (
                      <PaginationCurrent
                        key={`page-num-${pageNumber}`}
                        id={`page-num-${pageNumber}`}
                      >
                        {pageNumber}
                      </PaginationCurrent>
                    );
                  }
                  return (
                    <PaginationItem
                      key={`page-num-${pageNumber}`}
                      id={`page-num-${pageNumber}`}
                      onClick={(e) => {
                        handleClickReviewsPanel(e);
                        this.handleClick(e);
                      }}
                    >
                      {pageNumber}
                    </PaginationItem>
                  );
                })
              }

              <PaginationNext>
                <NextArrow />
              </PaginationNext>

              <PaginationLast>Last</PaginationLast>
            </PaginationCenter>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationComponent;
