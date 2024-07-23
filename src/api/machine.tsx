import { MACHINE_DATA, STATUSES } from '../utils/machine-data';

export function getLiveMachineData(query?: string) {
    // TODO: Mock Machine Api
    return new Promise((resolve) => {
        setTimeout(() => {
            if (query) {
                resolve({
                    data: {
                        data: MACHINE_DATA.filter(item => {
                            if (item.status.includes(query)) return item
                        }),
                        message: "OK",
                        success: true,
                    },
                })
            } else {
                resolve({
                    data: {
                        data: MACHINE_DATA,
                        message: "OK",
                        success: true,
                    },
                })
            }
        }, 1000);
    });
}


export function getLiveMachineStatuses() {
    // TODO: Mock Machine Status Api
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    data: STATUSES,
                    message: "OK",
                    success: true,
                },
            })
        }, 1000);
    });
}