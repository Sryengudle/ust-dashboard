
import React from 'react'
import { STATUSES, MACHINE_DATA, AVG_VAlUES } from '../../utils/machine-data';

interface machineProps {
    setFiltredMachines: (data: any[]) => void;
}

function MachineStaus({ setFiltredMachines }: machineProps) {

    const selectMachine = (status: string): void => {
        if (status) {
            const filteredData = MACHINE_DATA.filter(item => {
                if (item.status.includes(status)) return item
            })
            setFiltredMachines(filteredData)
        }
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '50px'
            }}>
                {STATUSES.map((item, idx) => {
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
                                display: 'flex',
                            }}
                            onClick={() => selectMachine(item.name)}
                        >
                            <span>{`${item.name} (${item.count})`}</span>
                        </div>
                    )
                })}
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
        </div>

    )
}

export default MachineStaus