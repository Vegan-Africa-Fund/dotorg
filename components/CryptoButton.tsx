import React from 'react';
import Box from '@material-ui/core/Box';
import {Popover, Avatar} from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddressToCopy from './AddressToCopy'

export interface CryptoProps {
    btn: string;
    icon: string;
    address: string
}

const CryptoButton: React.FC<CryptoProps> = ({btn, icon, address}) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Avatar alt={btn} src={icon} {...bindTrigger(popupState)}/>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <AddressToCopy address={address} />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default CryptoButton
