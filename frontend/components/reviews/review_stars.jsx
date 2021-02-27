import React from 'react'
import ReactStars from 'react-stars'

class ReviewStars extends React.Component {
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
        debugger
        return Math.round((count / this.matches().length) * 10) / 10
    }

    render() {
        debugger
        if (this.props.reviews.length <= 0) {
            return null
        }
        return (
            <span className="icn-strs">
                <ReactStars
                    className="r-icon-strs"
                    id="past-str"
                    count={5}
                    value={this.rating() ? this.rating() : 5}
                    color1={'lightgray'}
                    color2={'#B22222'}
                    size={17}
                    edit={false}
                />

                <p>{this.matches().length} reviews</p>
            </span>
        )
    }


}

export default ReviewStars

