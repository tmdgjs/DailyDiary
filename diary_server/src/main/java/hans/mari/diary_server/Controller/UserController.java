package hans.mari.diary_server.Controller;

import hans.mari.diary_server.Domain.User;
import hans.mari.diary_server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/login/{usercode}")
    public User user_login(@PathVariable String usercode){
        return this.userService.login(usercode);
    }

    @PostMapping("/user/signup")
    public User user_join(@RequestBody User user){

        return this.userService.signup(user);
    }
}
