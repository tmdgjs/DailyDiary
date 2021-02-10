package hans.mari.diary_server.Service;

import hans.mari.diary_server.Domain.Diary;

import hans.mari.diary_server.Exception.Diary.DiaryfoundException;
import hans.mari.diary_server.Repository.DiaryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiaryServiceImpl implements DiaryService {

    @Autowired
    private DiaryRepo diaryRepo;

    @Override
    public List<Diary> dailydiary(String usercode, String today) {

        List<Diary> todayDiary = diaryRepo.findByUsercodeAndAndToday(usercode,today);

        try{

            if(todayDiary.size() <= 0){
                throw new DiaryfoundException();
            }

            return todayDiary;
        }
        catch (DiaryfoundException e){
            return new ArrayList<>();
        }

    }

    @Override
    public List<Diary> diary_add(List<Diary> diarylist) {

           return this.diaryRepo.saveAll(diarylist);

    }
}
