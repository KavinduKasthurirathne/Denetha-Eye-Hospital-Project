import React, { useState } from "react";
import { ViewAllReceipts } from "./ViewAllReceipts";

export const ReceiptContainer = () => {

    const [EditReceipt, setEditReceipt] = useState(false);
    const [ReceiptId, setReceiptId] = useState();

    return(
        <>
        {!EditReceipt? <ViewAllReceipts btnsetter={setEditReceipt} btnstate={EditReceipt} Idsetter={setReceiptId}/>

        :null

        }
        
        </>

    );

}