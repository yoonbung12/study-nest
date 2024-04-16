import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// 방법 1..
// export class UpdateMovieDto {
//   //   validation하기 위해서 @IsString, @IsNumber등등 사용(유효성 검사)
//   @IsString()
//   // 읽기전용이 필수가 아니니까 "?"를 더함
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

// ******** 방법 2*****
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
