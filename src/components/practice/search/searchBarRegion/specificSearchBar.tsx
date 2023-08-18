import React from 'react'
import specificSearchBarStyle from './specificSearchBar.module.css'
export default function specificSearchBar() {
    return (
        <div>
            <div className={specificSearchBarStyle.containerInput}>
                <div>
                    <input type="text" placeholder="Search for region or substations"/>
                </div>
            </div>
            <div className={specificSearchBarStyle.searchResult}>
                <p>Search Result : <span>meow </span></p>
            </div>
        </div>
    )
}
