import Country from "./Country";
import Role from "./Role";
import Permission from "./Permission";
import RolePermission from "./RolePermission";
import User from "./User";
import PasswordReset from "./PasswordReset";


const models = [
    Country, 
    Role,
    Permission,
    User,
    RolePermission,
    PasswordReset,
];


models.map((model) => {
    model.sync();
});


export const CountryModel = Country;
export const RoleModel = Role;
export const PermissionModel = Permission;
export const UserModel = User;
export const RolePermissionModel = RolePermission;
export const PasswordResetModel = PasswordReset;