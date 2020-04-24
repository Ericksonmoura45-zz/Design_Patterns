import { Mail } from './Mail';
import { ToastController } from '@ionic/angular';

/**
 * Not registered User.
 * Holds several list of Mails separated by context.
 * Can do some things a normal user can and its progress won't be saved.
 */
export class NullUser {
    name: string;
    email: string;

    inbox: Mail[] = [];
    trash: Mail[] = [];
    spam: Mail[] = [];

    interval; // Yuo need to create this to clear this interval later

    constructor(
        protected toast: ToastController,
    ) {
        this.name = 'Null User';
        this.email = 'guest42069@null.com';
        this.interval = setInterval(this._getEmail.bind(this), 6000); // Generates a Mail each 4 seconds
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
            (await this.toast.create({
                message: `Received email from ${mail.sender}. Log in to automaticaly detect spams.`,
                color: 'warning',
                duration: 5000,
                translucent: true
            })).present();
        } else {
            mail = new Mail('Study', 'no-reply@sigaa.com', `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
        }
        this.inbox.push(mail);
    }


    async openMail() {
        const t = await this.toast.create({
            message: `Null users can't open mails.`,
            duration: 3000,
            color: 'danger',
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
        console.log(`trash: `, this.trash);
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
