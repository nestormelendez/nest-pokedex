/* eslint-disable prettier/prettier */
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';
export class CreatePokemonDto {
  @MinLength(1)
  @IsString()
  public name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  public readonly no: number;
}
