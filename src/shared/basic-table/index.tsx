import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type MachineData = {
    data: {
        id: string,
        deviceId: string,
        machineName: string,
        description: string,
        status: string,
        isActive: boolean,
        motorData: {
            deviceId: string,
            sensorType: string,
            timestamp: string,
            sensorValues: string,
            avgTime: string
        },
    }[]
}

const BasicTable = ({ data }: MachineData) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: '32px' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: 600}}>Machine Name</TableCell>
                        <TableCell style={{fontWeight: 600}} align="right">Status</TableCell>
                        <TableCell style={{fontWeight: 600}} align="right">Sensor Type</TableCell>
                        <TableCell style={{fontWeight: 600}} align="right">Description</TableCell>
                        <TableCell style={{fontWeight: 600}} align="right">Average Value</TableCell>
                        <TableCell style={{fontWeight: 600}} align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(data) && data.length > 0 ? 
                        data.map((row, idx) => (
                        <TableRow
                            key={idx + row.machineName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.machineName}
                            </TableCell>
                            <TableCell align="right">{row?.status}</TableCell>
                            <TableCell align="right">{row?.motorData?.sensorType}</TableCell>
                            <TableCell align="right">{row?.description ? row?.description : '-'}</TableCell>
                            <TableCell align="right">{`${row?.motorData?.avgTime}mm/sec`}</TableCell>
                            <TableCell align="right">{row?.motorData?.timestamp}</TableCell>
                        </TableRow>
                    )): <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}><h5>No Machine Found</h5></div>
                }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;