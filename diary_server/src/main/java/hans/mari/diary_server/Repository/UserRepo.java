package hans.mari.diary_server.Repository;

import hans.mari.diary_server.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByUsercode(String usercode);

    Optional<User> findByEmail(String email);

}
