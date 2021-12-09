import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Layer from "../atoms/layer";

const ShowcaseMolecule = ({
    vertLayout = false
}) => {
    let layoutClass = '';
    if (vertLayout) {
        layoutClass = 'flex flex-col flex-a-start flex-j-center';
    }
    return (
        <div className={`${layoutClass}`}>
            <Label text='Search' />
            <Input></Input>
            <Button>Submit</Button>
        </div>
    );
}

export default ShowcaseMolecule;