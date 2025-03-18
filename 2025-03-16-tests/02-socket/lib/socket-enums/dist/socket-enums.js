"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketMessages;
(function (SocketMessages) {
    SocketMessages["NEW_POST"] = "NEW_POST";
    SocketMessages["NEW_COMMENT"] = "NEW_COMMENT";
    SocketMessages["FOLLOW"] = "FOLLOW";
    SocketMessages["UNFOLLOW"] = "UNFOLLOW";
    SocketMessages["REMOVE_POST"] = "REMOVE_POST";
    SocketMessages["UPDATE_POST"] = "UPDATE_POST";
})(SocketMessages || (SocketMessages = {}));
exports.default = SocketMessages;
