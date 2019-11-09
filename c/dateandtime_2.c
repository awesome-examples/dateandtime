
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(void)
{

    time_t current_time;
    struct tm *v_time;


    // get current time
    time(&current_time);

    if (current_time == ((time_t)-1))
    {
        printf("Failure to obtain the current time.\n");
        exit(1);

    }

     if (v_time == NULL)
    {
        printf("Failure to convert the current time.\n");
        exit(1);
    }
    else{
         // Convert to local time
    v_time = localtime(&current_time);
    printf("The date and time is %s", asctime(v_time));
    }

    return 0;
}

