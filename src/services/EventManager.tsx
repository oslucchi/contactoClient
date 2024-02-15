import mitt from 'mitt';
import { Emitter } from 'mitt';


type AppEvents = {
    updateInput: string; // Event named "updateInput" with a payload of type string
};

// Define your emitter using the AppEvents interface
export const emitter: Emitter<AppEvents> = mitt<AppEvents>();

export default emitter;