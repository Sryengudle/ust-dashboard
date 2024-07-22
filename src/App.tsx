import React, { useEffect, useState } from 'react';

//material
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//utils
import { MACHINES } from '../src/utils/machine-data';

//components
import MachineStaus from '../src/components/machine-status';
import MiniDrawer from '../src/shared/side-bar'
import BasicTable from '../src/shared/basic-table';
import InputSearch from '../src/shared/search';

//api's
import { getLiveMachineData } from './api';

//hooks
import { useApi } from './hooks/use-api'

import './App.css'

function App() {

  const [filtredMachines, setFiltredMachines] = useState<any[]>([])
  const [machineStaus, setMachineSataus] = useState<string>('')
  const { isLoading, data: machineData, error } = useApi(getLiveMachineData, machineStaus)

  useEffect(() => {
    setFiltredMachines(machineData)
  }, [machineData])


  return (
    <div className='appRoot'>
      <MiniDrawer>
        <Grid container
          spacing={1}
          className='mainContainer'
          style={{
            boxShadow: '1px 2px 7px 4px #dbddce8a',
          }}
        >
          <Grid item xs={0.3} style={{
            background: '#1e0ea7'
          }}>
          </Grid>
          <Grid item xs={11.5} style={{
            padding: '10px'
          }}>
            <Typography variant="h5">Compare Machines</Typography>
            <InputSearch />
            <hr style={{ borderTop: '0.5px solid #b8afaf' }}></hr>
            <MachineStaus
              handleMachineStatus={setMachineSataus}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} marginTop={'unset'} style={{
          boxShadow: '1px 2px 7px 4px #dbddce8a',
          border: '1px solid #cec9c9'
        }}>
          <Grid item xs={12} padding={1} display={'flex'} alignItems={'center'}>
            {
              MACHINES.map((item, idx) => {
                return (
                  <>
                    <Box key={idx} display={'flex'} alignItems={'center'}>
                      <Typography style={{ fontWeight: '600' }}>{item.name}: </Typography>
                      <Typography>{item.value}</Typography>
                    </Box>
                    {idx !== MACHINES.length - 1 && <>
                      &nbsp; &nbsp;
                      |
                      &nbsp; &nbsp;
                    </>}
                  </>

                )
              })
            }
          </Grid>
        </Grid>
        <BasicTable
          data={filtredMachines}
          isLoading={isLoading}
          error={error}
        />
      </MiniDrawer>
    </div>
  )
}

export default App
