package hans.mari.diary_server.Exception.Diary;

import hans.mari.diary_server.Exception.AppException;

public class DiaryfoundException extends AppException {
    public DiaryfoundException() {
        super("diary not found");
    }
}
