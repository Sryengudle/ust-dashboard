

export const MACHINE_STATUSES = {
    ACCEPTABLE: 'Acceptable',
    MONITOR: 'Monitor',
    DANGER: 'Danger',
    ALARM: 'Alarm',
    NO_STATUS: 'no status',
}


export const MACHINE_DATA = [
    {
        id: '1',
        deviceId: 'IOT_DEVICE_2',
        machineName: 'Line 1 Extruder',
        description: 'Misaligment Motor',
        status: MACHINE_STATUSES.ACCEPTABLE,
        motorData: {
            deviceId: "IOT_DEVICE_2",
            sensorType: "IOT_DEVICE",
            timestamp: +new Date(),
            sensorValues: Date.now() + 11234,
            avgTime: '1.40'
        },
    },
    {
        id: '2',
        deviceId: 'IOT_DEVICE_2',
        machineName: 'Line 2 Extruder',
        description: 'Rubin or friction Motor',
        status: MACHINE_STATUSES.MONITOR,
        motorData: {
            deviceId: "IOT_DEVICE_2",
            sensorType: "MAIN DEVICE_01",
            timestamp: +new Date(),
            sensorValues: Date.now() + 11234,
            avgTime: '2.90'
        },
    },
    // {
    //     id: '3',
    //     deviceId: 'IOT_DEVICE_2',
    //     machineName: 'Line 3 Extruder',
    //     description: 'Building Extruders',
    //     status: MACHINE_STATUSES.DANGER,
    //     motorData: {
    //         deviceId: "IOT_DEVICE_2",
    //         sensorType: "IOT_DEVICE",
    //         timestamp: +new Date,
    //         sensorValues: Date.now() + 11234,
    //         avgTime: '2.0'
    //     },
    // },
    {
        id: '4',
        deviceId: 'IOT_DEVICE_2',
        machineName: 'Line 4 Extruder',
        status: MACHINE_STATUSES.ALARM,
        motorData: {
            deviceId: "IOT_DEVICE_2",
            sensorType: "IOT_DEVICE",
            timestamp: +new Date(),
            sensorValues: Date.now() + 11234,
            avgTime: '0.35'
        },
    },
    {
        id: '5',
        deviceId: 'IOT_DEVICE_2',
        machineName: 'Line 6 Extruder',
        status: MACHINE_STATUSES.NO_STATUS,
        motorData: {
            deviceId: "IOT_DEVICE_2",
            sensorType: "IOT_DEVICE",
            timestamp: +new Date(),
            sensorValues: Date.now() + 11234,
            avgTime: '2.90'
        },
    },
    {
        id: '6',
        deviceId: 'IOT_DEVICE_2',
        machineName: 'Line 7 Extruder',
        status: MACHINE_STATUSES.ACCEPTABLE,
        description: 'Misaligment Motor',
        motorData: {
            deviceId: "IOT_DEVICE_2",
            sensorType: "IOT_DEVICE",
            timestamp: +new Date(),
            sensorValues: Date.now() + 11234,
            avgTime: '2.90'
        },
    },
]

export const getMachineCount= (status: string) => {
    return MACHINE_DATA.filter((item): item is any => {
        return item && typeof item.status === 'string' && item.status === status
    }).length
}

export const STATUSES = [
    {
        name: MACHINE_STATUSES.ACCEPTABLE,
        count: getMachineCount(MACHINE_STATUSES.ACCEPTABLE),
        color: '#0e7e16'
    },
    {
        name: MACHINE_STATUSES.MONITOR,
        count: getMachineCount(MACHINE_STATUSES.MONITOR),
        color: '#a4c831'
    },
    {
        name: MACHINE_STATUSES.ALARM,
        count: getMachineCount(MACHINE_STATUSES.ALARM),
        color: '#e66500'
    },
    {
        name: MACHINE_STATUSES.DANGER,
        count: getMachineCount(MACHINE_STATUSES.DANGER),
        color: '#d32f2f'
    },
    {
        name: MACHINE_STATUSES.NO_STATUS,
        count: getMachineCount(MACHINE_STATUSES.NO_STATUS),
        color: '#959393'
    },
]


export const MACHINES = [
    {
        name: 'Main Machine',
        value: 'Line 3 Extruder'
    },
    {
        name: 'Segment',
        value: 'Segment Extruder'
    },
    {
        name: 'Total Machines',
        value: MACHINE_DATA.length
    }
]

export const AVG_VAlUES = [
    {
        value: '2.94mm/sec',
        color: '#0e7e16'
    },
    {
        value: '3.02m/sec',
        color: '#a4c831'
    },
    {
        value: '2.3mm/sec',
        color: '#e66500'
    },
    {
        value: '0mm/sec',
        color: '#d32f2f'
    },
    {
        value: '0mm/sec',
        color: '#959393'
    },
]