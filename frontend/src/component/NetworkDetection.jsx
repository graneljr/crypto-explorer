import {Detector} from 'react-detect-offline';
import NetworkDisconnected from './NetworkDisconnected';
const NetworkDetection = props => {
    return (
        <Detector
            render={({ online }) => (
              online ?  props.children : <NetworkDisconnected/>
            )}
        />
    );
}
 
export default NetworkDetection;