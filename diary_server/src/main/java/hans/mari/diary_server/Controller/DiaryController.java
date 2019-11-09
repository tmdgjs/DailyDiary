package hans.mari.diary_server.Controller;

import hans.mari.diary_server.Domain.Diary;
import hans.mari.diary_server.Service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DiaryController {

    @Autowired
    public DiaryService diaryService;

    @GetMapping("/diary/{today}/{usercode}")
    public List<Diary> today_diary(@PathVariable String usercode, @PathVariable String today){
        return diaryService.dailydiary(usercode,today);
    }

}
