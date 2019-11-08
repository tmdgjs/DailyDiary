package hans.mari.diary_server.Exception;

public class AppException extends RuntimeException{
    public AppException(String message){
        super(message);
    }

    public AppException(String message, Throwable throwable){
        super(message,throwable);
    }
}
