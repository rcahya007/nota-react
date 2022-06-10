import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

const ModalFilter = ({closeModal}) => {
    
    return(
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center " id="modalFilter">
            <div className="bg-gray-200 max-w-3xl rounded-xl">
                <div className="border-b-2 border-black ">
                    <div className="flex justify-between items-center p-3">
                        <p className="text-3xl">Pencarian Data Nota</p>
                        <button onClick={()=> {closeModal(false)}}>
                            <XCircleIcon className="h-10 w-10" />
                        </button>
                    </div>
                </div>
                    <div className="p-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis nesciunt iste asperiores sit ipsa hic consectetur pariatur a et? Esse placeat, laborum beatae consequatur sunt laudantium voluptatem asperiores nam, ex fugit illo eos dolore dolorum expedita quidem sint temporibus labore dicta neque commodi earum et? Alias dolor quibusdam doloremque.</div>
            </div>
        </div>
    )
}

export default ModalFilter;