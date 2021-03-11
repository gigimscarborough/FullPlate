import React from 'react'
import ReviewIndex from '../reviews/review_index'
import ReservationWidget from '../reservations/reservation_widget'
import { HashLink as Link } from 'react-router-hash-link'
import ReactStars from 'react-stars'

class ShowContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photo: 0
        }
    }

    componentDidMount() {
        this.props.fetchReviews()
    }

    reviews() {
        if (this.props.reviews) {

            return Object.values(this.props.reviews).filter(review => review.restaurant_id == this.props.restaurant.id)
        }
    }

    rating() {
        if (this.props.reviews) {

            const reviews = Object.values(this.props.reviews).filter(review => review.restaurant_id == this.props.restaurant.id)

            let rating = 0

            for (let i = 0; i < reviews.length; i++) {
                rating += reviews[i].overall_rating
            }

            return Math.round((rating / reviews.length) * 10) / 10
        }
    }


    pmClose() {
        document.getElementById('pm-bg').style.display = 'none'
    }

    photoModal(idx){

        document.getElementById('pm-bg').style.display = 'block'
        
        this.setState({photo: idx})

        if (idx === 0){
            document.getElementById('l-a').style.borderColor = "#3c3b3b"
            document.getElementById('l-b').style.cursor = "default"
            document.getElementById('l-b').style.outline = "none"
        }

        if (idx === this.props.restaurant.photoUrls.length - 1){
            document.getElementById('r-a').style.borderColor = "#3c3b3b"
            document.getElementById('r-b').style.cursor = "default"
            document.getElementById('r-b').style.outline = "none"
        }


    }

    photo(){
        return (
            <img id="p-mdl" src={this.props.restaurant.photoUrls[this.state.photo]} alt="" />
        )

    }

    clickLeft(){
        if (this.state.photo > 0){

            this.setState({ photo: this.state.photo - 1 })
            document.getElementById('r-a').style.removeProperty("border-color")
            document.getElementById('r-b').style.cursor = "pointer"
            document.getElementById('r-b').style.removeProperty("outline")

        } else {
            document.getElementById('l-a').style.borderColor = "#3c3b3b"
            document.getElementById('l-b').style.cursor = "default"
            document.getElementById('l-b').style.outline = "none"
        }



    }

    clickRight() {
        if (this.state.photo < this.props.restaurant.photoUrls.length-1) {
        this.setState({ photo: this.state.photo + 1 })
            document.getElementById('l-a').style.removeProperty("border-color")
            document.getElementById('l-b').style.cursor = "pointer"
            document.getElementById('l-b').style.removeProperty("outline")


        } else {
            document.getElementById('r-a').style.borderColor = "#3c3b3b"
            document.getElementById('r-b').style.cursor = "default"
            document.getElementById('r-b').style.outline = "none"
        }


    }

    render() {

        const restaurant = this.props.restaurant;
        if (typeof restaurant === "undefined") {

            return null;

        }

        const priceRange = this.props.restaurant.price_range === "$$" ? "$30 and under"
            : this.props.restaurant.price_range === "$$$" ? "$31 to $50" : "$50 and over"

        const menu = !this.props.restaurant.website_url ? "Sorry, this restaurant has not yet provided a menu"
            : <div id="rms"><i className=" url-icon fas fa-external-link-alt"></i><a className="menu-url" href={this.props.restaurant.website_url}>Visit this restaurant's website to view the full menu</a></div>

        // const photos = this.props.restaurant.photoUrls.length === 1 ? "1 Photo" 
        // : this.props.restaurant.photoUrls.length > 1 ? `${this.props.restaurant.photoUrls.length} Photos` : "No Photos"

        // const operatingHours = 

        const first = 0
        const second = 1
        const third = 2
        const fourth = 3
        const fifth = 4
        const rformat = this.props.restaurant.address.split(/\s+/).join("+")

        return (
            <div className="res-content-div">
                <div className="rest-info-div" id="r-ov-link">
                    <div className="rest-olinks">
                        <div className="lnk-cnt">
                            <Link to={`/restaurants/${this.props.restaurant.id}/#r-ov-link`}><p>Overview</p></Link>
                        </div >
                        <div className="lnk-cnt">
                            <Link to={`/restaurants/${this.props.restaurant.id}/#r-ph-link`}><p>Photos</p></Link>
                        </div>
                        <div className="lnk-cnt">
                            <Link to={`/restaurants/${this.props.restaurant.id}/#r-menu-link`}><p>Menu</p></Link>
                        </div>
                        <div className="lnk-cnt">
                            <Link to={`/restaurants/${this.props.restaurant.id}/#r-reviews-link`}><p>Reviews</p></Link>
                        </div>
                    </div>
                    <div className="rest-name">
                        <h1>{this.props.restaurant.name}</h1>
                    </div>
                    <div className="rest-intro-div">
                        <span className="icn-strs3">
                            <ReactStars
                                className="rev-stars"
                                id="past-str"
                                count={5}
                                value={this.rating() ? this.rating() : 5}
                                color1={'lightgray'}
                                color2={'#B22222'}
                                size={17}
                                edit={false}
                            />
                        </span>
                        <p>
                            {this.rating() ? this.rating() : 5}
                        </p>
                        <i className="cmnt  far3 far fa-comment-alt"></i><p id="revs">{this.reviews().length > 0 ? `${this.reviews().length} ` : `No `}Reviews</p>
                        <i className="fas fa-money-bill"></i><p>{priceRange}</p>
                        <i className="fas fa-utensils"></i><p>{this.props.restaurant.cuisine_type}</p>
                    </div>
                    <div className="rest-desc">
                        {this.props.restaurant.description}
                    </div>
                    <div className="rest-ph" id="r-ph-link">
                        <a ><h2>Photos</h2></a>
                        <div className="rest-photos">
                            <div className="photo-c1">
                                <div  className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[first]} />
                                    {/* <img onClick={() => this.photoModal(0)} src={window.salmonplate} /> */}
                                </div>
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[second]} />
                                    {/* <img onClick={() => this.photoModal(1)} src={window.salmonplate} /> */}
                                </div>
                            </div >
                            <div className="photo-c2">
                                <img src={this.props.restaurant.photoUrls[third]} />
                                {/* <img onClick={() => this.photoModal(2)} src={window.salmonplate} /> */}

                            </div>
                            <div className="photo-c1">
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[fourth]} />
                                    {/* <img onClick={() => this.photoModal(3)} src={window.salmonplate} /> */}

                                </div>
                                <div className="photo-r1">
                                    <img src={this.props.restaurant.photoUrls[fifth]} />
                                    {/* <img onClick={() => this.photoModal(4)} src={window.salmonplate} /> */}

                                </div>
                            </div>
                            <div id="pm-bg" className="pm-bg">
                                <div className="pm-cnt">
                                    <button id="l-b" onClick={() => this.clickLeft()}  className="left-arrow">
                                        <div id="l-a"></div>
                                    </button>
                                    {this.photo()}
                                    {/* <img id="p-mdl" src={window.salmonplate} alt="" /> */}
                                    <button id="r-b" onClick={() => this.clickRight()}  className="right-arrow">
                                        <div id="r-a"></div>
                                    </button >
                                    <div onClick={this.pmClose} className="close-pm">
                                        <div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="r-menu-link" className="res-menu">
                        <h2>Menu</h2>
                        <span>{menu}</span>
                    </div>
                    <ReviewIndex openModal={this.props.openModal} reviews={this.props.reviews} restaurant={this.props.restaurant} fetchReviews={this.props.fetchReviews} restaurantId={this.props.restaurantId} />
                </div>
                <div className="reserve-div">
                    <ReservationWidget operation_hours={this.props.restaurant.operation_hours} restaurantId={this.props.restaurant.id} search={this.props.search} />
                    <div className="map-holder">

                        <a target="_blank" rel="noopener" href={`//www.google.com/maps/dir/?api=1&amp;destination=${this.props.restaurant.name.split(" ").join("%20")}${this.props.restaurant.address.split(" ").join("%20")}&key=${window.googleAPIKey}`}><img width="288" src={`https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=288x144&maptype=roadmap&key=${window.googleAPIKey}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0e8eaf%7Clabel:%7C${rformat}&style=feature%3Alandscape%7Celement%3Aall%7Chue%3A0xe5e1df%7Csaturation%3A-62%7Clightness%3A0%7Cvisibility%3Aon&style=feature%3Apoi.school%7Celement%3Aall%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Apoi.medical%7Celement%3Aall%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Apoi.attraction%7Celement%3Aall%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Apoi.government%7Celement%3Aall%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Apoi.place_of_worship%7Celement%3Aall%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Aadministrative.locality%7Celement%3Aall%7Chue%3A0xffffff%7Csaturation%3A0%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Aroad.local%7Celement%3Alabels%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Apoi.business%7Celement%3Alabels%7Chue%3A0xffffff%7Csaturation%3A-100%7Clightness%3A100%7Cvisibility%3Aoff&style=feature%3Awater%7Celement%3Ageometry%7Chue%3A0x82b4ff%7Csaturation%3A100%7Clightness%3A-1%7Cvisibility%3Aon&style=feature%3Aroad.highway%7Celement%3Ageometry%7Chue%3A0xfcb04d%7Csaturation%3A-3%7Clightness%3A1%7Cvisibility%3Asimplified&style=feature%3Apoi.park%7Celement%3Aall%7Chue%3A0xc9e3a8%7Csaturation%3A15%7Clightness%3A-1%7Cvisibility`} alt={this.props.restaurant.address}></img></a>
                        <div>
                            <img src={window.marker} alt="" />
                            <a target="_blank" rel="noopener" href={`//www.google.com/maps/dir/?api=1&amp;destination=${this.props.restaurant.name.split(" ").join("%20")}${this.props.restaurant.address.split(" ").join("%20")}&key=${window.googleAPIKey}`}>{this.props.restaurant.address}</a>
                        </div>
                    </div>
                    <div className="rs-details">
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Address</p>
                                <p>{this.props.restaurant.address}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-city"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Neighborhood</p>
                                <p>{this.props.restaurant.neighborhood}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Phone number</p>
                                <p>{this.props.restaurant.phone_number}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Hours of operation</p>
                                <p>{this.props.restaurant.operation_hours}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Cuisine Type</p>
                                <p>{this.props.restaurant.cuisine_type}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-concierge-bell"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Dining Style</p>
                                <p>{this.props.restaurant.dining_style}</p>
                            </div>
                        </div>
                        <div className="rs-nei-det">
                            <div className="rs-nei-icn">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <div className="rs-nei-p">
                                <p>Dress Code</p>
                                <p>{this.props.restaurant.dress_code}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ShowContent