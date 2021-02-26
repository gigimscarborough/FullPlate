import React from 'react'


const PrivateNote = ({closeModal}) => (
    <div>
        <div className="rev-help" onClick={e => e.stopPropagation()}>
            <i onClick={closeModal} class="fas fa-times rh-close"></i>
            <div className="rh-body">
                <h2>
                    Review guidelines
                </h2>
                <span>
                    Your review should help other diners decide if this restaurant is a good choice for them.
                </span>
                <ol>
                    <li>
                        Keep it short, simple and specific
                    </li>
                    <li>
                        Make it useful – describe the scene, food and service levels
                    </li>
                    <li>
                        Describe outstanding dishes, beverages or service experiences
                    </li>
                    <li>
                        Capture what makes the restaurant unique 
                    </li>
                    <li>
                        Avoid storytelling or irrelevant details
                    </li>
                </ol>
                <div>
                    <span>Sample review:</span>
                    <span>
                        "I love the relaxed feel of this place – like a comfortable dining room in a friends home. I definitely would return to try more dishes. The lobster bisque was amazing and the Roasted Beet salad was refreshing. The table was split on the seabass – one person thought it was great, but another felt that the tastes didn't quite mesh. Everyone loved the flat iron steak. Service was well-timed and friendly, wines were affordable."
                    </span>
                </div>
               
            </div>
        </div>
    </div>
)

export default PrivateNote;
