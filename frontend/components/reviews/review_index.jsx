import React from 'react'
import ReactStars from 'react-stars';
import { openModal } from '../../actions/modal_actions';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviews()
    }

    reviews() {
        if (this.props.reviews) {

            return Object.values(this.props.reviews).filter(review => review.restaurant_id == this.props.restaurant.id)
        }
    }

    overallRating() {
        let rating = 0

        for (let i = 0; i < this.reviews().length; i++) {
            rating += this.reviews()[i].overall_rating
        }

        return Math.round((rating / this.reviews().length) * 10) / 10
    }

    foodRating() {
        let rating = 0

        for (let i = 0; i < this.reviews().length; i++) {
            rating += this.reviews()[i].food_rating
        }

        return Math.round((rating / this.reviews().length) * 10) / 10
    }

    valueRating() {
        let rating = 0

        for (let i = 0; i < this.reviews().length; i++) {
            rating += this.reviews()[i].value_rating
        }

        return Math.round((rating / this.reviews().length) * 10) / 10
    }
    ambienceRating() {
        let rating = 0

        for (let i = 0; i < this.reviews().length; i++) {
            rating += this.reviews()[i].ambience_rating
        }

        return Math.round((rating / this.reviews().length) * 10) / 10
    }
    serviceRating() {
        let rating = 0

        for (let i = 0; i < this.reviews().length; i++) {
            rating += this.reviews()[i].service_rating
        }

        return Math.round((rating / this.reviews().length) * 10) / 10
    }

    percentRec(){
        const approve = this.reviews().filter(review => review.would_recommend === true)

        return Math.floor((approve.length / this.reviews().length) * 100)
    }

    reviewsList() {
        debugger

        const that = this
  
        return this.reviews().map(review => {
            let initials = review.nickname.split("")
   

            for (let i = 0; i < initials.length; i++) {
                if (initials[i] !== initials[i].toUpperCase()) {
                    initials.splice(i, 1)
                    i = 0;
                }
            }

            let vDate = new Date(review.visited)
            vDate = new Date(vDate.getTime() + vDate.getTimezoneOffset() * 60000)
            const format = { year: 'numeric', month: 'long', day: 'numeric' }
            const colors = ["pinkish", "purplish", "blueish", "orangeish"]

            return (
                <div className="review-holder">
                    <div className="review-l">
                        <div class="rev-circle">
                            <i class={`fas fa-circle ${colors[Math.floor(Math.random() * 4)]}`}></i>
                            <span>{initials.slice(0, 2).join("")}</span>
                        </div>
                        <div class="rev-user">
                        <span>
                            {review.nickname}
                        </span>
                        <span>

                        <i class="far fa-comment-alt"></i> 
                        <span>

                            {Object.values(that.props.reviews).filter(greview => greview.guest_id === review.guest_id).length === 1 ? ` ${Object.values(that.props.reviews).filter(greview => greview.guest_id === review.guest_id).length} review` : ` ${Object.values(that.props.reviews).filter(greview => greview.guest_id === review.guest_id).length} reviews`}
                        </span>
                        </span>
                        </div>
                    </div>
                    <div className="review-r">
                        <div className="din-o">

                            <ReactStars
                                className="rev-stars"
                                id="past-str"
                                count={5}
                                value={review.overall_rating}
                                color1={'lightgray'}
                                color2={'#B22222'}
                                size={17}
                                edit={false}
                            />
                            <span className="din-bull">&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                            <span>Dined on {vDate.toLocaleDateString(undefined, format)}</span>
                        </div>
                        <div className="rat-list">
                            <span>
                                Overall
                            </span>
                            <span className="rat-hl">
                                {review.overall_rating}
                            </span>
                            <span className="din-bull">
                                &nbsp;&bull;&nbsp;
                            </span>
                            <span>
                                Food
                            </span>
                            <span className="rat-hl">
                                {review.food_rating}
                            </span>
                            <span className="din-bull">
                                &nbsp;&bull;&nbsp;
                            </span>
                            <span>
                                Service
                            </span>
                            <span className="rat-hl">
                                {review.service_rating}
                            </span>
                            <span className="din-bull">
                                &nbsp;&bull;&nbsp;
                            </span>
                            <span>
                                Ambience
                            </span>
                            <span className="rat-hl">
                                {review.ambience_rating}
                            </span>
                        </div>
                        <span className="rev-r-body">
                            {review.body}
                        </span>
                        <div className="report-rev">
                            <span onClick={() => this.props.openModal('report')}>
                                <i class="far fa-flag"></i>
                                <span>Report</span>
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        )

    }

    render() {
        // if (typeof this.props.reviews === 'undefined'){
        //     return null
        // }

        return (
            <div>
                <div className="res-revs" id="r-reviews-link">
                    <h2>What {this.reviews().length > 1 ? `${this.reviews().length} ` : null}people are saying</h2>
                    <p className="res-rev-p">Overall ratings and reviews</p>
                    <div className="revs-only">
                        <span>Reviews can only be made by diners who have eaten at this restaurant</span>
                    </div>
                    <span className="icn-strs2">
                        <ReactStars
                            className="rev-stars"
                            id="past-str"
                            count={5}
                            value={this.overallRating() ? this.overallRating() : 5 }
                            color1={'lightgray'}
                            color2={'#B22222'}
                            size={17}
                            edit={false}
                        />
                        {/* <i className="fas fa-star ifpst2"></i>
                        <i className="fas fa-star ifpst2"></i>
                        <i className="fas fa-star ifpst2"></i>
                        <i className="fas fa-star ifpst2"></i>
                        <i className="fas fa-star-half ifpstr2"></i>
                        <i className="fas fa-star-half fpstl2"></i> */}
                        <p>{this.overallRating() ? this.overallRating() : 5} overall based on average ratings</p>
                    </span>
                    <div className="res-rating">

                        <div className="rate-div-f">
                            <span>{this.foodRating() ? this.foodRating() : 5}</span><p>Food</p>
                        </div>
                        <div className="rate-div">
                            <span>{this.serviceRating() ? this.serviceRating() : 5}</span><p>Service</p>
                        </div>
                        <div className="rate-div">
                            <span>{this.ambienceRating() ? this.ambienceRating() : 5}</span><p>Ambience</p>
                        </div>
                        <div className="rate-div">
                            <span>{this.valueRating() ? this.valueRating() : 5}</span><p>Value</p>
                        </div>
                    </div>
                    <div className="res-nl">
                        <i className="fas fa-signal nl-bars"></i>
                        <p>Noise &bull;</p>
                        <p>{this.props.restaurant.noise_level}</p>
                    </div>
                    <div className="res-tu">
                        <i className="far fa-thumbs-up"></i>
                        <p>{this.percentRec() ? this.percentRec() : `100`}% of people &nbsp;</p>
                        <p> would reccommend it to a friend</p>
                    </div>
                </div>
                {this.reviewsList()}
            </div>
        )
    }
}

export default ReviewIndex