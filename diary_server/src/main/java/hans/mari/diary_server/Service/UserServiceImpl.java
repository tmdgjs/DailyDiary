package hans.mari.diary_server.Service;

import hans.mari.diary_server.Domain.User;
import hans.mari.diary_server.Exception.User.UserNotFoundException;
import hans.mari.diary_server.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public User login(String usercode) {

        return this.userRepo.findByUsercode(usercode).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public User signup(User user) {

        return this.userRepo.save(user);

    }

    @Override
    public User user_found(String email) {
        return this.userRepo.findByUsercode(email).orElseThrow(UserNotFoundException::new);
    }
}