import React from 'react'

const Exhibit = ({ header, children }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4">
            <div className="text-xl font-semibold mb-4">
                {header}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Exhibit