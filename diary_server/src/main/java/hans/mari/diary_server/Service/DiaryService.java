package hans.mari.diary_server.Service;

import hans.mari.diary_server.Domain.Diary;

import java.util.List;

public interface DiaryService {

    List<Diary> dailydiary(String usercode,String today);

    List<Diary> diary_add(List<Diary> diarylist);
}
