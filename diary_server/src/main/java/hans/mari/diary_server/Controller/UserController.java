package hans.mari.diary_server.Controller;

import hans.mari.diary_server.Domain.User;
import hans.mari.diary_server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login/{usercode}")
    public ResponseEntity<User> user_login(@PathVariable String usercode){

        User rsUser = this.userService.login(usercode);

        if(rsUser.getId() == null){
            return new ResponseEntity<>(rsUser, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(rsUser,HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<User> user_join(@RequestBody User user){

        User rsUser = this.userService.signup(user);

        if(rsUser.getId() == null){
            return new ResponseEntity<>(rsUser, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(rsUser,HttpStatus.OK);
    }

    @GetMapping("/found/{email}")
    public User user_found(@PathVariable String email){
        return this.userService.user_found(email);
    }
}
