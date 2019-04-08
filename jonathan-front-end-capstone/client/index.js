import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import MiniSummaryRating from './components/MiniSummaryRating';
import ReviewsPanel from './components/ReviewsPanel';


ReactDOM.render(<ReviewsPanel />, document.getElementById('reviews'));


window.Reviews = Reviews;
