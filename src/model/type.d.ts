declare namespace Components {
    namespace Schemas {
        export interface Location {
            lat: number;
            lng: number;
        }
        export interface LookupData {
            id?: number; // int32
            name?: string;
        }
        export interface Lookups {
            tailSize?: LookupData[];
            training?: LookupData[];
            medicalRecord?: LookupData[];
            socialSkill?: LookupData[];
        }
        export interface Pet {
            id: string;
            name: string;
            rescueLocation: Location;
            about: string;
            details: string;
            medicalRecord: string;
            rescueDate: string; // date-time
            tailDetails: string;
            socialSkills: string;
            training: string;
            petImage: string;
        }
        export interface Rating {
            id?: string;
            petId: string;
            description: string;
            stars?: number; // int32
        }
        export interface RoleDTO {
            roleName: string;
        }
        export interface UserDto {
            firstName: string;
            lastName: string;
            username: string;
            password: string;
            email: string;
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
    namespace GrantRole {
        namespace Parameters {
            export type UserName = string;
        }
        export interface PathParameters {
            userName: Parameters.UserName;
        }
        export type RequestBody = Components.Schemas.RoleDTO;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace RegisterUser {
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
