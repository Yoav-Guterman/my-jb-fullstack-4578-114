import Backup from "./backup.js";
import Kitten from "./kitten.js";

const backupString = new Backup<string>("User's notes backup", "these are my notes...")
backupString.display()

const backupNumber = new Backup<number>('high score backup', 9999)
backupNumber.display()

const backupBoolean = new Backup<boolean>('is this a good app', true)
backupBoolean.display()

const backupDate = new Backup<Date>('when did you born?', new Date("2002-04-19"))
backupDate.display()

const gingo = new Kitten('gingo', 2, 'orange')
const backupObject = new Backup<Kitten>('my cat is gingo', gingo)
backupObject.display()
