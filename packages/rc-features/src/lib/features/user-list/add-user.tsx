import {useState} from "react";
import {Box} from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {IUser} from "./user";

const AddUserDialog = ({closeDialog}: { closeDialog: (value: Partial<IUser> | undefined) => void }) => {

    const [user, setUser] = useState<IUser>({name: '', age: 0, id: 0} as IUser)

    const handleClose = () => {
        closeDialog(undefined);
    };
    const submitForm = () => {
        closeDialog(user);
    }


    return (
            <Box component="form">
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
                    <TextField autoFocus
                               value={user.name}
                               margin="dense"
                               id="name"
                               label="User name"
                               type="text"
                               fullWidth
                               onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                    <TextField id="age"
                               label="User age"
                               value={user.age}
                               margin="dense"
                               type="number"
                               fullWidth
                               onChange={(e) => setUser({...user, age: Number(e.target.value)})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={() => handleClose()}>Cancel</Button>
                    <Button variant='contained' color='primary'
                            onClick={() => submitForm()}>Submit</Button>
                </DialogActions>
            </Box>
    );
}

export default AddUserDialog
