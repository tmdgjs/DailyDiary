package hans.mari.diary_server.Service;

import hans.mari.diary_server.Domain.User;
import hans.mari.diary_server.Exception.User.UserExistException;
import hans.mari.diary_server.Exception.User.UserNotFoundException;
import hans.mari.diary_server.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public User login(String userCode) {

        try{
            return this.userRepo.findByUsercode(userCode).orElseThrow(UserNotFoundException::new);
        }catch (UserNotFoundException e){
            System.out.println(e.getMessage());
            return new User();
        }

    }

    @Override
    public User signup(User user) {

        try{
            if(this.userRepo.findByUsercode(user.getUsercode()).orElse(null) != null ||
                    this.userRepo.findByEmail(user.getEmail()).orElse(null) != null){
                throw new UserExistException();
            }

            return this.userRepo.save(user);
        }catch (UserExistException e){
            e.printStackTrace();
            return new User();
        }



    }

    @Override
    public User user_found(String email) {
        return this.userRepo.findByUsercode(email).orElseThrow(UserNotFoundException::new);
    }
}
