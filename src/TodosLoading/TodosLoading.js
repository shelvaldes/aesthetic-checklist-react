import React from "react";
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="skeleton-container">

            <div className="header-container">
                <div className='header-subcontainer'>
                    <div className="skeleton-title" />
                    <div className="skeleton-btn" />
                </div>
                <div className="skeleton-subtitle" />
            </div>

            <div className="skeleton-todoitem">
                <div className="skeleton-icon-rose" />
            </div>
            <div className="skeleton-todolist">

                <div className="skeleton-todoitem">
                    <div className="skeleton-icon-rose" />
                    <div className="skeleton-text" />
                    <div className="skeleton-spacer" />
                    <div className="skeleton-icon-gray" />
                </div>

                <div className="skeleton-todoitem">
                    <div className="skeleton-icon-rose" />
                    <div className="skeleton-text" />
                    <div className="skeleton-spacer" />
                    <div className="skeleton-icon-gray" />
                </div>

                <div className="skeleton-todoitem">
                    <div className="skeleton-icon-rose" />
                    <div className="skeleton-text" />
                    <div className="skeleton-spacer" />
                    <div className="skeleton-icon-gray" />
                </div>

            </div>
        </div>

    );
}

export { TodosLoading }; 