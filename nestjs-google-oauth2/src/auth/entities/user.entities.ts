import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  givenName: string;

  @Column()
  familyName: string;

  @Column()
  displayName: string;

  @Column({ nullable: true })
  photoUrl?: string;
}
