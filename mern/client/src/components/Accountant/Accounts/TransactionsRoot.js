import React from "react";

const TransactionsRoot = (props) => {
    return(
        <>
            <div>
                <ul>
                    {props.data.map((item, index) => (
                        <li key={index}>{item.name} | {item.type} | Rs.{item.amount}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TransactionsRoot;