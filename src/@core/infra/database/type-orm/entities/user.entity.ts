import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}