import { Mail } from './Mail';
import { ToastController } from '@ionic/angular';
import { SpamDetector } from './SpamDetector';

/**
 * Normal User.
 * Holds several list of Mails separated by context.
 */
export class User {
    name = 'Registed User';
    email = 'registered@nullify.com';
    profile = '';

    inbox: Mail[] = [];
    trash: Mail[] = [];
    spam: Mail[] = [];

    interval;
    spamDetector: SpamDetector = new SpamDetector();

    constructor(
        protected toast: ToastController,
    ) {
        this.interval = setInterval(this._getEmail.bind(this), 6000); // Generates a Mail each 4 secondss
    }

    /**
     * Receives a Mail and put on right array.
     * Simulates an email services.
     */
    private async _getEmail() {
        const random = Math.round(Math.random());
        const date = new Date();
        let mail: Mail;

        if (random) {
            mail = new Mail('Steam', 'no-reply@steam.com', `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
        } else {
            mail = new Mail('Study', 'no-reply@sigaa.com', `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
        }

        if (this.spamDetector.detect(mail)) {
            this.spam.push(mail);
            (await this.toast.create({
                message: `Detected Spam from ${mail.sender}. Redirecting to Spam folder.`,
                color: 'success',
                duration: 5000,
                translucent: true
            })).present();
        } else {
            this.inbox.push(mail);
        }
    }

    async openMail() {
        const t = await this.toast.create({
            message: 'Opened Email, good reading.',
            duration: 3000,
            color: 'light',
            position: 'top'
        });
        t.present();
    }

    /**
     * Moves a mail from inbox to trash
     * @param index email index
     */
    inboxToTrash(index: number) {
        this.trash.push(new Mail(this.inbox[index].subject, this.inbox[index].sender, this.inbox[index].date));
        this.inbox.splice(index, 1);
    }

    /**
     * Moves a mail from trash to inbox
     * @param index mail index
     */
    restoreMail(index: number) {
        this.inbox.push(new Mail(this.trash[index].subject, this.trash[index].sender, this.trash[index].date));
        this.trash.splice(index, 1);
    }
}
