import {BehaviorSubject} from 'rxjs';
import {useEffect, useState} from "react";
import {Box, Button} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import Dialog from "@mui/material/Dialog";
import PlusIcon from '@mui/icons-material/PlusOne';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridActionsCellItem, GridRowId} from "@mui/x-data-grid";

import {IUser} from './user';

import AddUserDialog from "./add-user";

interface IUserProps {
    users$: BehaviorSubject<IUser[]> | undefined;
}

const UserList = ({users$}: IUserProps) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (users$) {
            users$.subscribe((res: Array<IUser>) => {
                setUsers(res);
            });
        }
    }, [])

    const submitDialog = (user: Partial<IUser> | undefined) => {
        if (user && users.length) {
            const lastUserId = users[users.length - 1].id;
            const temp = {...user, id: lastUserId + 1} as IUser
            setUsers([...users, temp]);
            users$ && users$.next([...users, temp]);
        }
        setOpen(false)
    }


    const handleEditClick = (id: GridRowId) => () => {
        const user = users.find((user) => user.id === id);

        if (!user) {
            return;
        }
        const updatedUser = {...user, age: user.age + 1}
        const result = users.map(el => el.id === id ? {...updatedUser} : el);
        users$ && users$.next(result);
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        const userList = users.filter((user) => user.id !== id);
        if (!userList) {
            return;
        }
        users$ && users$.next(userList);
    };

    return (
            <Box sx={{width: '100%'}}>
                <Button color='primary' variant='contained' onClick={() => setOpen(true)}>
                    Add new User
                </Button>
                <Box sx={{height: 250, mt: 1}}>
                    <DataGrid
                            disableColumnMenu={true}
                            rows={users}
                            columns={[
                                {
                                    headerName: 'ID',
                                    width: 200
                                    ,
                                    field: 'id',
                                    sortable: false
                                },
                                {
                                    headerName: 'Name',
                                    width: 400,
                                    field: 'name'
                                },
                                {
                                    headerName: 'Age',
                                    width: 400,
                                    field: 'age'
                                },
                                {
                                    field: 'actions',
                                    type: 'actions',
                                    headerName: 'Actions',
                                    width: 100,
                                    cellClassName: 'actions',
                                    getActions: ({id}) => {
                                        return [
                                            <GridActionsCellItem color="primary"
                                                                 icon={<PlusIcon/>}
                                                                 label="Edit"
                                                                 className="textPrimary"
                                                                 onClick={handleEditClick(id)}/>,
                                            <GridActionsCellItem color="error"
                                                                 icon={<DeleteIcon/>}
                                                                 label="Delete"
                                                                 onClick={handleDeleteClick(id)}/>
                                        ];
                                    }
                                }]}
                    />
                </Box>
                <Dialog open={open}>
                    <AddUserDialog closeDialog={submitDialog}></AddUserDialog>
                </Dialog>
            </Box>

    );
}

export default UserList;
