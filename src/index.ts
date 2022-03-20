import Pushover from 'pushover-notifications';
import dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const mrwhiskers = './example.png';

fs.readFile(mrwhiskers, (err, data) => {
  const p = new Pushover({
    user: process.env['PUSHOVER_USER'],
    token: process.env['PUSHOVER_TOKEN'],
  });

  const msg = {
    message: 'Pushover from Typescript just happened.', // required
    title: 'Important Message',
    sound: 'magic',
    device: 'devicename',
    priority: 1,
    file: { name: mrwhiskers, data: data }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  p.send(msg, (err: any, result: any) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});
