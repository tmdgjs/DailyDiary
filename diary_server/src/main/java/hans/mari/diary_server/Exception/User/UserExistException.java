package hans.mari.diary_server.Exception.User;

import hans.mari.diary_server.Exception.AppException;

public class UserExistException extends AppException {
    public UserExistException() {
        super("user already exist");
    }
}
