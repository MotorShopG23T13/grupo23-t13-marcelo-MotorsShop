import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Ads } from "./ads.entities";
import { Address } from "./address.entities";
import { date } from "yup";

export enum UserType {
  Anunciante = "Anunciante",
  Comprador = "Comprador",
}

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  cell_phone: string;

  @Column({ 
    type: "date",
  })
  birthdate: Date;

  @Column({ type: "text" })
  description: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @Column({ type: "enum", enum: UserType })
  type: UserType;

  @Column({ nullable: true })
  profile_picture: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ type: "boolean", default: true })
  is_active: boolean;

  @Column({ type: 'varchar', nullable: true })
  reset_token?: string | null

  @Column({ type: Date, nullable: true })
  reset_time: Date | null;

  @OneToMany(() => Ads, (ads) => ads.user)
  ads: Ads[];

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn({ name: "address_id" })
  address: Address;

  
}

export { User };
