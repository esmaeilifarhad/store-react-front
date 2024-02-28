import React, { useState } from "react";
import { range } from "lodash";

const Pagination = ({ total, currentPage, pageCount, pageNumberClick, countRecordChange }) => {

    const pageCountCal = Math.ceil(total / pageCount);


    if (pageCountCal === 1) return null;

    const pages = range(1, pageCountCal + 1);

    const firstPage = () => {

        if (currentPage != 1) return
        return (
            { display: "none" }
        )
    }
    const lastPage = () => {

        if ((pages.length) != currentPage) return
        return (
            { display: "none" }
        )
    }
    const tagLinkCreate = (page, index) => {

        if (currentPage - 3 > page) {
            return
        }
        if (currentPage + 3 >= page) {

            return (
                <a
                    className="page-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => pageNumberClick(index)}
                >
                    {page}
                </a>
            )
        }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <p><span>تعداد کل رکورد ها : </span> {total}</p>
            <p><span>تعداد  صفحه : </span> {pageCount}</p>
            <nav aria-label="Page navigation">

                <ul className="pagination justify-content-center">

                    <li style={firstPage()} key={-1}>
                        <a className="page-link" style={{ cursor: "pointer", backgroundColor: "#7b63ff", color: "white" }} onClick={() => pageNumberClick(0)}>
                            اول
                        </a>
                    </li>

                    {pages.map((page, index) => (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >

                            {tagLinkCreate(page, index)}
                        </li>
                    ))}

                    <li style={lastPage()} key={-2}>
                        <a className="page-link" style={{ cursor: "pointer", backgroundColor: "#7b63ff", color: "white" }} onClick={() => pageNumberClick(pages.length - 1)}>
                            آخر
                        </a>
                    </li>
                </ul>
            </nav>
            <span>تعدا نمایش رکورد ها : </span>

            <select onChange={(e) => { countRecordChange(e.currentTarget.value) }}>
                <option selected={pageCount == 5} value={5}>5</option>
                <option selected={pageCount == 10} value={10}>10</option>
                <option selected={pageCount == 30} value={30}>30</option>
                <option selected={pageCount == 50} value={50}>50</option>
                <option selected={pageCount == 100} value={100}>100</option>
            </select>
        </div>
    );
};

export default Pagination;
