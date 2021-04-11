import './MyTeamsTable.css'
import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';

const MyTeamsTable = props => {

    function renderRows() {
        const teamsList = props.teams || []
        return teamsList.map(team => (
            <TableRow key={team._id} className="table-row">
                <TableCell component="th" scope="row" className="table-cell">
                    {team.name}
                </TableCell>
                <TableCell className="table-cell">
                    {team.description}
                </TableCell>
                <TableCell className="table-cell">
                    <div className="icon-buttons">
                        <IconButton size="small" className="ic-button" href={`/form/Delete/${team._id}`}><DeleteIcon /></IconButton>
                        <IconButton size="small" className="ic-button"><ShareIcon /></IconButton>
                        <IconButton size="small" className="ic-button" href={`/form/Update/${team._id}`}><EditIcon /></IconButton>
                    </div>
                </TableCell>
            </TableRow>
        ))
    }

    return (
        <TableContainer>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Name</strong>
                        </TableCell>
                        <TableCell>
                            <strong>Description</strong>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {renderRows()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MyTeamsTable