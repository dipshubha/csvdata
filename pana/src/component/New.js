import React from 'react'
import raw from "../component/simple.txt"
import { Products } from '../Product'
const New = () => {

    const arr = [
        { id: 1, name: 'The Lord of the Rings' },
        { id: 2, name: 'A Tale of Two Cities' },
        { id: 3, name: 'Don Quixote' },
        { id: 4, name: 'The Hobbit' },
        { id: 5, name: "bbbb" }
    ]

    const s=Products.sort(function (a, b) {
        var aA = a.title.toUpperCase();
        var bB = b.title.toUpperCase();
        if (aA < bB) {
            return -1;
        }
        if (aA > bB) {
            return 1;
        }
        return 0;
    })
    console.log(s);

    const click = () => {


        fetch(raw)
            .then(res => res.text())
            .then(data => {
                console.log(data);
                alert(data)
            })
    }
    return (
        <>
            <div >{s.map((e)=>{
                
               return (<li>{e.id} {e.title}</li>);
            })} 
            </div>
            <div>

                <button onClick={click}> submit</button>
            </div>
        </>
    )
}

export default New
