import { Mail } from './Mail';

export class SpamDetector {

    /**
     * Detects if a Mail is spam
     * @param m analysed Mail
     */
    public detect(m: Mail): boolean {
        return m.sender.indexOf('steam') >= 0;
    }
}
