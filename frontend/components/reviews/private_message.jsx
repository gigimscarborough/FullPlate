import React from 'react'


const PrivateNote = ({ closeModal }) => (
    <div>
        <div className="pn-modal" onClick={e => e.stopPropagation()}>
            <i onClick={closeModal} class="fas fa-times rh-close"></i>
            <div className="pn-body">
                <h2>
                    Send a private note
                </h2>
                <span>
                    Many FullPlate restaurants welcome the opportunity to respond directly to diner comments. By providing your contact information, you will allow the restaurant to follow-up directly with you when appropriate.
                </span>
                <span>
                    The confidential note to the restaurant is a great way to recognize to the restaurant manager a specific server or staff member who shined, provide suggestions to the staff or chef, or tell the restaurant anything unique to your experience that might not be relevant to others visiting the restaurant.
                </span>
                <div>
                    <span>Sample note:</span>
                    <span>"Our server Gigi was very helpful and attentive all night. Please send her our thanks. She also made great recommendations for wines and desserts. We appreciate that you bought us a round of drinks when the entrees were delayed. You might want to change a few lightbulbs in the parking lot as it was a bit dark when we left."</span>
                    <span>If you provide your email address in the space provided, the restaurant may choose to contact you about your feedback at their option.</span>
                </div>
                <span>
                    FullPlate reserves the right to remove any forms that violate our user agreement. See our complete <span>privacy policy and user agreement</span> for more details.
                </span>
            </div>
        </div>
    </div>
)

export default PrivateNote;
