import { Specification } from "../model/Specification";

interface ICreateSpacificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    
    create({ description, name }: ICreateSpacificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpacificationDTO }