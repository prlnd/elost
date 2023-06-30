import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';

export const gun = new GUN();

export const user: any = gun.user();
