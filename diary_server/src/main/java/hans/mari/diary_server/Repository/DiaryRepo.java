package hans.mari.diary_server.Repository;

import hans.mari.diary_server.Domain.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiaryRepo extends JpaRepository<Diary,Long> {

    List<Diary> findByUsercodeAndAndToday(String usercode, String today);

}
