import React from 'react'
import ReactStars from 'react-stars'

class SearchStars extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviews()
    }

    matches() {
        const matches = this.props.reviews.filter(review => review.restaurant_id === this.props.restaurantId)

        return matches
    }

    rating() {


        let count = 0

        for (let i = 0; i < this.matches().length; i++) {
            count += this.matches()[i].overall_rating
        }

        return Math.round((count / this.matches().length) * 10) / 10
    }

    description(rating){

        if (rating >4.5){
            return "Exceptional"
        } else if (rating > 4){
            return "Awesome"
        } else if (rating > 3.5) {
            return "Very Good"
        } else if(rating > 3){
            return "Good"
        }else if (rating > 2.5){
            return "Fair"
        } else if (rating > 1.5) {
            return "Okay"
        }else if (rating >= 0){
            return "Poor"
        }
    }

    render() {

        if (this.props.reviews.length <= 0) {
            return null
        }
        return (
            <span className="srch-str">
                <ReactStars
                    className="r-icon-strs"
                    id="past-str"
                    count={5}
                    value={this.rating()}
                    color1={'lightgray'}
                    color2={'goldenrod'}
                    size={17}
                    edit={false}
                />
                <p>{this.description(this.rating())}</p>
                <p>{`(${this.matches().length})`}</p>
                {/* <p>{this.matches().length} reviews</p> */}
            </span>
        )
    }


}

export default SearchStars

