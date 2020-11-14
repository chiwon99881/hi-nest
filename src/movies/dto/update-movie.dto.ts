import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

//DTO: Data Transfer Object (데이터 전송 객체를 의미한다.)

//PartialType은 베이스 타입이 필요한데 그 베이스 타입을 CreateMovieDto로 받은 것이고, 
//PartialType은 필수가 아니라 부분으로 받아올 수 있게 해준다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}