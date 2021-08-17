
import React from 'react'
import { CSVLink } from 'react-csv';
import d from "../component/text.txt"

const Csv = () => {
    const data1 = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];



    return (
        <>
            <div>
                <CSVLink data={data1}>Download me</CSVLink>
                
            </div>
        </>
    )
}

export default Csv
