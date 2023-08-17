import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['sword', 'stars', 'nunchucks'], { message: 'Use correct weapon' })
  weapon: string;
}
