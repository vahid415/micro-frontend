import 'ng-element';
import {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

const Application = () => {
    const [value, setValue] = useState(false);

    const buttonRef = useRef({
        addEventListener(name: string, event: (event: CustomEvent) => void) {
        },
        removeEventListener(name: string, event: (value: CustomEvent) => void) {
        },
    });

    useEffect(() => {
        const ref = buttonRef.current;
        const handleEvent = (event: CustomEvent) => changedValue(event.detail);
        ref.addEventListener('changedVal', handleEvent);
        return () => {
            ref.removeEventListener('changedVal', handleEvent);
        };
    }, [value]);

    const changedValue = (value: boolean) => {
        console.log(value);
        setValue(value);
    };

    // @ts-ignore
    const checkbox = (<el-checkbox
            size="lg"
            color={'danger'}
            ref={buttonRef}
            changeVal={changedValue}
    />)

    return (<>
                <Box>Hello Vahid</Box>
                {checkbox}
            </>
    )
}

export default Application;
