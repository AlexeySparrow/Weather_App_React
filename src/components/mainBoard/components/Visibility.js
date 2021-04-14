import React from 'react'

export const Visibility = ({visibility}) => {
    return (
        <li>
            <p>Видимость</p>
            <p>
                {Math.round(visibility) / 1000}
                <span>км</span>
            </p>
        </li>
    )
}