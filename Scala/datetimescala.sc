import java.util.Calendar;
object MyClass {
      def main(args: Array[String]) {
          var dT = Calendar.getInstance()
          var currentMinute = dT.get(Calendar.MINUTE)
          var currentHour = dT.get(Calendar.HOUR_OF_DAY)
          if(currentHour > 12){
              currentHour %= 12
              println("Current time is "+currentHour+":"+currentMinute+" PM")
          }
          else{
            println("Current time is "+currentHour+":"+currentMinute+" AM")  
          }
          
      }
   }
