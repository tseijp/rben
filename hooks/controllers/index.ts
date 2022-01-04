export * from './PlotController'
export * from './RbenController'
export * from './RubyController'

export class DelayController {
    listener = () => {};
    callback = () => {};
    timeStamp = 1000;

    apply (callback = ()=>{}, timeStamp = 1000) {
        this.callback = callback;
        this.timeStamp = timeStamp;
        return this.delay.bind(this);
    }

    delay (...args: any[]) {
        this.listener();
        const timeout = window.setTimeout(this.callback, this.timeStamp, ...args);
        this.listener = () => void window.clearTimeout(timeout);
    }
}
