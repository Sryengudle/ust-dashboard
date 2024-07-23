import React from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { AVG_VAlUES } from '../../utils/machine-data';
import { getLiveMachineStatuses } from '../../api';
import { useApi } from '../../hooks/use-api';

interface machineProps {
    handleMachineStatus: (status: string) => void
}

function MachineStaus({ handleMachineStatus }: machineProps) {
    const { isLoading, data } = useApi(getLiveMachineStatuses)

    const handleStatus = (status: string): void => {
        handleMachineStatus(status)
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            {
                isLoading ? (
                    <div>
                        <span>Loading....</span>
                    </div>
                ) : (
                    <>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: '50px'
                        }}>
                            {data.map((item, idx) => {
                                return (
                                    <div key={idx}
                                        style={{
                                            background: item.color,
                                            borderRadius: '20px',
                                            marginRight: '10px',
                                            padding: '4px 15px',
                                            color: '#FFFFFF',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            height: '31px',
                                            width: 'max-content',
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                        onClick={() => handleStatus(item.name)}
                                    >
                                        <span>{`${item.name} (${item.count})`}</span>
                                    </div>
                                )
                            })}
                            <div onClick={() => handleMachineStatus('')}>
                                <RestartAltIcon sx={{ cursor: 'pointer' }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px', fontSize: '14px', width: '80px' }}>Avg. Values </span>
                            {AVG_VAlUES.map((item, idx) => {
                                return (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', fontSize: '12px' }}>
                                        <span style={{
                                            borderRadius: '50%',
                                            border: `5px solid ${item.color}`,
                                            marginRight: '5px'
                                        }}></span>
                                        <span>{item.value}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            }
        </div>

    )
}

export default MachineStaus