import React from 'react'


const Report = ({ closeModal }) => (

    <div className="report-modal" onClick={e => e.stopPropagation()}>
        <div className="report-head">
            <h2>
                Report this review as inappropriate?
                </h2>
        </div>

        <div className="report-body">
            <span>
                If you believe this review should be removed from FullPlate, please let us know and someone will investigate.
                </span>
            <textarea placeholder="Tell us why you find this review inappropriate."></textarea>
            <div>
                <button onClick={closeModal}>Report</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    </div>

)

export default Report;
