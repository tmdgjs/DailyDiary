package hans.mari.diary_server.Service;

import hans.mari.diary_server.Domain.User;

public interface UserService {

    User login(String usercode);

    User signup(User user);

    User user_found(String email);
}
