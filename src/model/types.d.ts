declare namespace Components {
    namespace Schemas {
        export interface Pet {
            id?: string;
            name?: string;
            rescueLocation?: string; // ^\d\.?\d?,\d.?\d?
            details?: string[];
            rescueDate?: string; // date-time
            tailDetails?: "SHORT_TAIL" | "MEDIUM_TAIL" | "LARGE_TAIL";
            socialSkills?: "FRIENDLY" | "LONELY" | "SCARY";
            training?: "NOT_TRAINED" | "ALMOST_TRAINED" | "FULL_TRAINED";
            base64Image?: string;
        }
        export interface Rating {
            id?: string;
            petId: string;
            description: string;
            stars?: number; // int32
        }
        export interface RoleDTO {
            roleName?: string;
        }
        export interface UserDto {
            id?: string;
            firstName?: string;
            lastName?: string;
            username?: string;
            password?: string;
            email?: string;
        }
    }
}
declare namespace Paths {
    namespace AddRating {
        export type RequestBody = Components.Schemas.Rating;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace Delete {
        namespace Parameters {
            export type PetId = string;
        }
        export interface PathParameters {
            petId: Parameters.PetId;
        }
    }
    namespace GetAverageRate {
        namespace Parameters {
            export type PetId = string;
        }
        export interface PathParameters {
            petId: Parameters.PetId;
        }
    }
    namespace GetById {
        namespace Parameters {
            export type PetId = string;
        }
        export interface PathParameters {
            petId: Parameters.PetId;
        }
    }
    namespace GetRatingsListForPet {
        namespace Parameters {
            export type PetId = string;
        }
        export interface PathParameters {
            petId: Parameters.PetId;
        }
    }
    namespace RegisterUser {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        export type RequestBody = Components.Schemas.RoleDTO;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace RegisterUser1 {
        export type RequestBody = Components.Schemas.UserDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace Save {
        export type RequestBody = Components.Schemas.Pet;
    }
    namespace Update {
        export type RequestBody = Components.Schemas.Pet;
    }
}
