package hans.mari.diary_server.Exception.User;

import hans.mari.diary_server.Exception.AppException;

public class UserNotFoundException extends AppException {
    public UserNotFoundException() {
        super("user not found");
    }
}
