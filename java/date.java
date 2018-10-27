import java.util.Calendar;

public class Date {

    static void print(Object o){
        System.out.println(o);
    }

    public static void main(String[] args){
        // Instance of current date
        Calendar calendar = Calendar.getInstance();
        // Printing
        print("Current Date/Hour: "+calendar.getTime());
        print("Current Year: "+calendar.get(Calendar.YEAR));
        print("Current Month: "+calendar.get(Calendar.MONTH));
        print("Current day of the month: "+calendar.get(Calendar.DAY_OF_MONTH));

    }

}
