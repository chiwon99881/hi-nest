import { IsNumber, IsString } from "class-validator";

//DTO: Data Transfer Object 
//데이터 전송 객체를 의미한다.
export class CreateMovieDto {
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsString({each: true})
    readonly genres: string[];
}