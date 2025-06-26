import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Max,
} from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  @IsInt({ each: true })
  itemsId: number[];

  @IsOptional()
  @IsString()
  @Max(1500)
  description?: string;
}
