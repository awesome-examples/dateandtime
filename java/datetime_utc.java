// Only supports UTC
import java.time.LocalDateTime;
public class dateTime{
	public static void main(String[] args){
		System.out.printf(LocalDateTime.now().toString().replace("T", " "));
	}
}
