import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  //   validation하기 위해서 @IsString, @IsNumber등등 사용(유효성 검사)
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
