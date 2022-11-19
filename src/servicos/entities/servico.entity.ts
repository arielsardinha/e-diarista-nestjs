import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  valorMinimo: number;

  @Column()
  quantidadeHoras: number;

  @Column()
  porcentagem: number;

  @Column()
  valorQuarto: number;

  @Column()
  horasQuarto: number;

  @Column()
  valorSala: number;

  @Column()
  horasSala: number;

  @Column()
  valorBanheiro: number;

  @Column()
  horasBanheiro: number;

  @Column()
  valorCozinha: number;

  @Column()
  horasCozinha: number;

  @Column()
  valorQuintal: number;

  @Column()
  horasQuintal: number;

  @Column()
  valorOutros: number;

  @Column()
  horasOutros: number;

  @Column()
  icones: string;

  @Column()
  posicao: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updateAt: Date;
}
