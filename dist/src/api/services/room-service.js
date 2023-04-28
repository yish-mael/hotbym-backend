"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const booking_daily_service_1 = __importDefault(require("./booking-daily-service"));
class RoomService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoomModel.findAll({
                include: [models_1.PropertyModel],
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoomModel.findByPk(id, { include: [models_1.PropertyModel] });
        });
    }
    static addAmenities(id, amenities) {
        return __awaiter(this, void 0, void 0, function* () {
            return amenities.map((item) => __awaiter(this, void 0, void 0, function* () {
                return yield models_1.RoomAmenityModel.findOrCreate({ where: { roomId: id, amenityId: item } });
            }));
        });
    }
    static removeAmenitiess(id, amenities) {
        return __awaiter(this, void 0, void 0, function* () {
            return amenities.map((item) => __awaiter(this, void 0, void 0, function* () {
                return yield models_1.RoomAmenityModel.destroy({ where: { roomId: id, amenityId: item } });
            }));
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoomModel.findAll({ where: criteria });
        });
    }
    static getUnavailableRange(room, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(room.limit)
            try {
                const unavailableBookings = yield booking_daily_service_1.default.getWhere({ date: { [sequelize_1.Op.between]: [new Date(start), new Date(end)] }, roomId: parseInt(room.id), quantity: room.limit, timeIn: null, timeOut: null, });
                return unavailableBookings;
            }
            catch (err) {
                return err;
            }
        });
    }
    static getWhereSearch(include) {
        return __awaiter(this, void 0, void 0, function* () {
            const allActiveRooms = yield models_1.RoomModel.findAll({
                where: {
                    status: "active",
                },
                include: [
                    {
                        model: models_1.PropertyModel,
                        where: {
                            categoryId: include === null || include === void 0 ? void 0 : include.categoryId,
                            stateId: include === null || include === void 0 ? void 0 : include.stateId,
                            status: "active",
                        }
                    }
                ]
            });
            const allAvailableRooms = allActiveRooms.map((room) => __awaiter(this, void 0, void 0, function* () {
                const unavailableList = yield this.getUnavailableRange(room, include.start, include.end);
                if (!(unavailableList.length > 0)) {
                    return room;
                }
            }));
            return (yield Promise.all(allAvailableRooms)).filter(n => n);
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { propertyId, roomType, beds, adults, children, limit, price, pricePerHour, discount, status } = values;
            const [room, created] = yield models_1.RoomModel.findOrCreate({ where: { propertyId, roomType, beds, adults, children, limit, price, pricePerHour, discount, status } });
            if (created == false)
                throw "Room already exists.";
            return room;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoomModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield this.getById(id);
            return yield (room === null || room === void 0 ? void 0 : room.destroy());
        });
    }
}
exports.default = RoomService;
